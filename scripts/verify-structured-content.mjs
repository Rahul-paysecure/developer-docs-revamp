import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { validateDocument } from '../src/content/schema.js';
import addenda from '../src/data/postman-addenda.json' with { type: 'json' };

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGE_DIR = path.join(ROOT, 'src/pages');
const failures = [];
const pageFiles = fs.readdirSync(PAGE_DIR).filter((file) => file.endsWith('.jsx')).sort();
const documentSlugs = new Set();
let stableTextFields = 0;
let structuredRequests = 0;
let documentedSourceGaps = 0;

function verifyRequest(slug, id, props) {
  structuredRequests += 1;
  const config = props?.config;
  const gap = config?.sourceExampleGap;
  const missing = new Set(gap?.missing || []);
  if (gap) {
    documentedSourceGaps += 1;
    if (!gap.reason || !Array.isArray(gap.missing) || !gap.missing.length) failures.push(`${slug}:${id}: sourceExampleGap requires missing[] and reason`);
  }
  if (!props?.method || !props?.url) failures.push(`${slug}:${id}: TryIt requires method and url`);
  if (!config || !Array.isArray(config.fields)) failures.push(`${slug}:${id}: TryIt requires structured fields`);
  if ((!config?.status || config.response === undefined) && !missing.has('success')) failures.push(`${slug}:${id}: TryIt requires a success status and response`);
  if ((!config?.errorStatus || config.errorResponse === undefined) && !missing.has('error')) failures.push(`${slug}:${id}: TryIt requires an error status and response`);
}

function verifyTree(slug, node, ids, location = 'root') {
  if (!node) return;
  if (Array.isArray(node)) {
    node.forEach((child, index) => verifyTree(slug, child, ids, `${location}.${index}`));
    return;
  }
  if (node.type === 'text') {
    if (!/[\p{L}\p{N}]/u.test(node.value || '')) return;
    if (!node.id) failures.push(`${slug}:${location}: meaningful tree text has no stable id`);
    else if (ids.has(node.id)) failures.push(`${slug}:${location}: duplicate stable id ${node.id}`);
    else {
      ids.add(node.id);
      stableTextFields += 1;
    }
    return;
  }
  if (node.type !== 'element') {
    failures.push(`${slug}:${location}: unsupported tree node type ${node.type}`);
    return;
  }
  if (node.tag === 'TryIt') verifyRequest(slug, location, node.props);
  (node.children || []).forEach((child, index) => verifyTree(slug, child, ids, `${location}.${index}`));
}

function verifyBlockRecord(slug, block, location) {
  const checkRuns = (value, prefix) => {
    if (!Array.isArray(value)) return;
    value.forEach((run, index) => {
      if (typeof run === 'object' && run && 'text' in run && !run.id) failures.push(`${slug}:${prefix}.${index}: rich text run requires id`);
    });
  };
  checkRuns(block.content, `${location}.content`);
  (block.items || []).forEach((item, index) => {
    if (!item.id) failures.push(`${slug}:${location}.items.${index}: item requires id`);
    checkRuns(item.content, `${location}.items.${index}.content`);
  });
}

const server = await createServer({ root: ROOT, server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'silent' });
try {
  for (const file of pageFiles) {
    const slug = file.replace(/\.jsx$/, '');
    const source = fs.readFileSync(path.join(PAGE_DIR, file), 'utf8');
    if (!source.includes('StructuredContent')) failures.push(`${slug}: page does not use StructuredContent`);
    if (source.includes('React.createElement')) failures.push(`${slug}: page still contains generated React content`);

    const { default: Page } = await server.ssrLoadModule(`/src/pages/${file}`);
    const element = Page({});
    const document = element?.props?.document;
    if (!document) {
      failures.push(`${slug}: page does not expose a structured document`);
      continue;
    }
    try {
      validateDocument(document);
    } catch (error) {
      failures.push(`${slug}: ${error.message}`);
      continue;
    }
    if (document.slug !== slug) failures.push(`${slug}: document slug is ${document.slug}`);
    if (documentSlugs.has(document.slug)) failures.push(`${slug}: duplicate document slug`);
    documentSlugs.add(document.slug);

    const ids = new Set();
    document.blocks.forEach((block, index) => {
      if (block.type === 'tree') verifyTree(slug, block.root, ids, `blocks.${index}.root`);
      else verifyBlockRecord(slug, block, `blocks.${index}`);
    });
  }
} finally {
  await server.close();
}

for (const example of addenda) verifyRequest(example.slug, `addenda.${example.id}`, { method: example.method, url: example.url, config: example.config });

const editorSource = fs.readFileSync(path.join(ROOT, 'src/components/EditablePageContent.jsx'), 'utf8');
if (editorSource.includes('makeEditable') || editorSource.includes('React-tree')) failures.push('Editor still contains the legacy React-tree fallback');

console.log(JSON.stringify({
  pages: pageFiles.length,
  structuredDocuments: documentSlugs.size,
  stableTextFields,
  structuredRequests,
  documentedSourceGaps,
  failures: failures.length,
}, null, 2));

if (failures.length) {
  console.error(failures.slice(0, 100).join('\n'));
  process.exitCode = 1;
}
