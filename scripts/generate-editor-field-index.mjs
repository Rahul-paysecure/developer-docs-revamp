import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import addenda from '../src/data/postman-addenda.json' with { type: 'json' };

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGE_DIR = path.join(ROOT, 'src/pages');
const OUTPUT = path.join(ROOT, 'src/content/editor-field-index.json');
const OVERRIDE_DIR = path.join(ROOT, 'src/content/overrides');
const checkOnly = process.argv.includes('--check');

function addField(fields, id) {
  if (typeof id === 'string' && id) fields.add(`field/${id}`);
}

function addRichText(fields, id, value) {
  if (typeof value === 'string') {
    addField(fields, id);
    return;
  }
  if (!Array.isArray(value)) return;
  value.forEach((run, index) => addField(fields, `${id}.${run?.id || index}`));
}

function collectTree(fields, node) {
  if (!node) return;
  if (Array.isArray(node)) {
    node.forEach((child) => collectTree(fields, child));
    return;
  }
  if (node.type === 'text') {
    addField(fields, node.id);
    return;
  }
  (node.children || []).forEach((child) => collectTree(fields, child));
}

function collectBlock(fields, block) {
  switch (block.type) {
    case 'breadcrumbs':
      (block.items || []).forEach((item) => addField(fields, `${block.id}.${item.id}`));
      break;
    case 'heading':
      addField(fields, block.id);
      break;
    case 'paragraph':
      addRichText(fields, block.id, block.content || block.text);
      break;
    case 'list':
      (block.items || []).forEach((item) =>
        addRichText(fields, `${block.id}.${item.id}`, item.content || item.text)
      );
      break;
    case 'image':
      addField(fields, `${block.id}.caption`);
      break;
    case 'callout':
      addRichText(fields, `${block.id}.text`, block.content || block.text);
      break;
    case 'navigation':
      (block.items || []).forEach((item) => {
        addField(fields, `${block.id}.${item.id}.eyebrow`);
        addField(fields, `${block.id}.${item.id}.label`);
      });
      break;
    case 'tree':
      collectTree(fields, block.root);
      break;
    default:
      break;
  }
}

const pages = {};
const pageFiles = fs.readdirSync(PAGE_DIR).filter((file) => file.endsWith('.jsx')).sort();
const server = await createServer({
  root: ROOT,
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'silent',
});

try {
  for (const file of pageFiles) {
    const slug = file.replace(/\.jsx$/, '');
    const { default: Page } = await server.ssrLoadModule(`/src/pages/${file}`);
    const document = Page({})?.props?.document;
    if (!document || document.slug !== slug) {
      throw new Error(`${slug}: page does not expose its matching structured document`);
    }
    const fields = new Set();
    document.blocks.forEach((block) => collectBlock(fields, block));
    pages[slug] = fields;
  }
} finally {
  await server.close();
}

addenda.forEach((example) => {
  const fields = pages[example.slug];
  if (!fields) throw new Error(`${example.slug}: Postman addendum has no routed page`);
  [
    `addenda.${example.id}.title`,
    `addenda.${example.id}.method`,
    `addenda.${example.id}.url`,
    `addenda.${example.id}.description`,
    `addenda.${example.id}.source-note`,
  ].forEach((id) => addField(fields, id));
});

const index = {
  schemaVersion: 1,
  pages: Object.fromEntries(
    Object.entries(pages)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([slug, fields]) => [slug, [...fields].sort()])
  ),
};

if (fs.existsSync(OVERRIDE_DIR)) {
  for (const file of fs.readdirSync(OVERRIDE_DIR).filter((name) => name.endsWith('.json')).sort()) {
    const slug = file.replace(/\.json$/, '');
    const record = JSON.parse(fs.readFileSync(path.join(OVERRIDE_DIR, file), 'utf8'));
    const allowed = pages[slug];
    if (
      !allowed ||
      record.schemaVersion !== 1 ||
      record.slug !== slug ||
      !record.changes ||
      typeof record.changes !== 'object' ||
      Array.isArray(record.changes)
    ) {
      throw new Error(`${file}: invalid published editor override`);
    }
    for (const [field, value] of Object.entries(record.changes)) {
      if (!allowed.has(field) || typeof value !== 'string') {
        throw new Error(`${file}: invalid override field ${field}`);
      }
    }
  }
}

const output = `${JSON.stringify(index, null, 2)}\n`;

if (checkOnly) {
  const existing = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, 'utf8') : '';
  if (existing !== output) {
    console.error('Editor field index is stale. Run npm run editor:index.');
    process.exitCode = 1;
  } else {
    console.log(`Editor field index is current for ${Object.keys(index.pages).length} pages.`);
  }
} else {
  fs.writeFileSync(OUTPUT, output);
  console.log(`Wrote ${OUTPUT} for ${Object.keys(index.pages).length} pages.`);
}
