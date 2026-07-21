import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import React from 'react';
import { createServer } from 'vite';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slugs = process.argv.slice(2);
if (!slugs.length) throw new Error('Pass one or more page slugs.');

const KNOWN_COMPONENTS = new Set(['DocLink', 'Helpful', 'TryIt']);
const EXPANDED_COMPONENTS = new Set(['CodeBlock']);
const meaningful = (value) => /[\p{L}\p{N}]/u.test(value);
const clean = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);

function componentName(type) {
  if (type === React.Fragment) return 'fragment';
  if (typeof type === 'string') return type;
  return type?.displayName || type?.name || '';
}

function serializableProps(props) {
  return Object.fromEntries(
    Object.entries(props || {}).filter(([key, value]) =>
      key !== 'children' && value !== undefined && typeof value !== 'function'
    )
  );
}

function serialize(root, slug) {
  let textIndex = 0;
  const unknown = new Set();

  function visit(node, ancestry = []) {
    if (node === null || node === undefined || node === false || node === true) return null;
    if (typeof node === 'string' || typeof node === 'number') {
      const value = String(node);
      if (!meaningful(value)) return { type: 'text', value };
      textIndex += 1;
      const hint = clean(ancestry.filter(Boolean).at(-1) || 'text');
      return { type: 'text', id: `${slug}.${hint}.${String(textIndex).padStart(4, '0')}`, value };
    }
    if (Array.isArray(node)) return node.map((child) => visit(child, ancestry)).filter(Boolean);
    if (!React.isValidElement(node)) return null;

    const tag = componentName(node.type);
    if (EXPANDED_COMPONENTS.has(tag)) return visit(node.type(node.props), ancestry);
    if (typeof node.type !== 'string' && tag !== 'fragment' && !KNOWN_COMPONENTS.has(tag)) unknown.add(tag || '(anonymous)');
    const anchor = node.props?.id || node.props?.['data-content-id'] || tag;
    return {
      type: 'element',
      tag,
      props: serializableProps(node.props),
      children: React.Children.toArray(node.props?.children).map((child) => visit(child, [...ancestry, anchor])).filter(Boolean),
    };
  }

  const tree = visit(root, [slug]);
  if (unknown.size) throw new Error(`${slug}: unsupported components: ${[...unknown].join(', ')}`);
  return { tree, textFields: textIndex };
}

function exportName(slug) {
  const base = slug.split('-').map((part, index) => index ? part[0].toUpperCase() + part.slice(1) : part).join('');
  return `${/^\d/.test(base) ? 'page' : ''}${base[0].toUpperCase()}${base.slice(1)}TreeDocument`;
}

function pageName(slug) {
  return `Page${slug.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')}`;
}

await fs.mkdir(path.join(ROOT, 'src/content/trees'), { recursive: true });
const server = await createServer({ root: ROOT, server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'silent' });
try {
  for (const slug of slugs) {
    const sourcePath = path.join(ROOT, 'src/pages', `${slug}.jsx`);
    const source = await fs.readFile(sourcePath, 'utf8');
    if (source.includes('StructuredContent')) {
      console.log(`Skipped ${slug}: already structured`);
      continue;
    }
    const { default: Page } = await server.ssrLoadModule(`/src/pages/${slug}.jsx`);
    const { tree, textFields } = serialize(Page({}), slug);
    const symbol = exportName(slug);
    const document = { schemaVersion: 1, slug, blocks: [{ id: 'document-tree', type: 'tree', root: tree }] };
    const record = `import { defineDocument } from '../schema.js';\n\nexport const ${symbol} = defineDocument(${JSON.stringify(document, null, 2)});\n`;
    const wrapper = `import React from 'react';\nimport StructuredContent from '../components/StructuredContent.jsx';\nimport { ${symbol} } from '../content/trees/${slug}.js';\n\nexport default function ${pageName(slug)}() {\n  return <StructuredContent document={${symbol}} />;\n}\n`;
    await fs.writeFile(path.join(ROOT, 'src/content/trees', `${slug}.js`), record);
    await fs.writeFile(sourcePath, wrapper);
    console.log(`Migrated ${slug}: ${textFields} stable text fields`);
  }
} finally {
  await server.close();
}
