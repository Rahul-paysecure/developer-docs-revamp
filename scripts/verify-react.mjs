import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';
import { PAGES } from '../src/content/manifest.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGE_DIR = path.join(ROOT, 'src', 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');
const failures = [];
const warnings = new Set();

const pageFiles = fs.readdirSync(PAGE_DIR).filter((file) => file.endsWith('.jsx')).sort();
const pageSlugs = new Set(pageFiles.map((file) => file.replace(/\.jsx$/, '')));
const manifestSlugs = new Set(Object.keys(PAGES));

for (const slug of manifestSlugs) {
  if (!pageSlugs.has(slug)) failures.push(`Manifest page has no React module: ${slug}`);
}
for (const slug of pageSlugs) {
  if (!manifestSlugs.has(slug)) failures.push(`React module is missing from manifest: ${slug}`);
}

const sourceFiles = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(?:js|jsx)$/.test(entry.name)) sourceFiles.push(full);
  }
}
walk(path.join(ROOT, 'src'));
for (const file of sourceFiles) {
  const source = fs.readFileSync(file, 'utf8');
  if (source.includes('dangerouslySetInnerHTML')) {
    failures.push(`Raw HTML rendering found: ${path.relative(ROOT, file)}`);
  }
}

const originalError = console.error;
console.error = (message, ...details) => {
  const text = String(message);
  if (text.includes('useLayoutEffect does nothing on the server')) return;
  if (text.startsWith('Warning:')) warnings.add([text, ...details].join(' '));
  else originalError(message, ...details);
};

const server = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'silent',
});
const { default: EditablePageContent } = await server.ssrLoadModule('/src/components/EditablePageContent.jsx');

let linkCount = 0;
let mediaCount = 0;
let headingCount = 0;
let tryItCount = 0;
let brandHeaderRequestCount = 0;
let brandBodyRequestCount = 0;
let helpfulCount = 0;

for (const file of pageFiles) {
  const slug = file.replace(/\.jsx$/, '');
  try {
    const module = await server.ssrLoadModule(`/src/pages/${file}`);
    const markup = renderToStaticMarkup(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(EditablePageContent, { slug, Page: module.default })
      )
    );
    if (!markup.trim()) failures.push(`${slug}: rendered empty output`);
    linkCount += (markup.match(/<a\b/g) || []).length;
    mediaCount += (markup.match(/<(?:img|video|source)\b/g) || []).length;
    headingCount += (markup.match(/<h[1-4]\b/g) || []).length;
    tryItCount += (markup.match(/class="explorer try-it"/g) || []).length;
    helpfulCount += (markup.match(/class="helpful"/g) || []).length;

    for (const match of markup.matchAll(
      /<textarea[^>]*aria-label="Editable cURL request"[^>]*>([\s\S]*?)<\/textarea>/g
    )) {
      const curl = match[1];
      const hasBrandHeader = /BrandId:\s*YOUR_BRAND_ID/i.test(curl);
      const hasBrandBody = /(?:&quot;|")brand_id(?:&quot;|")\s*:/i.test(curl);
      if (hasBrandHeader) brandHeaderRequestCount += 1;
      if (hasBrandBody) brandBodyRequestCount += 1;
      if (hasBrandHeader && hasBrandBody) {
        failures.push(`${slug}: request includes Brand ID in both the header and body`);
      }
    }

    for (const match of markup.matchAll(/\bhref="([^"]+)"/g)) {
      const href = match[1].replace(/&amp;/g, '&');
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const target = href.split('#')[0].split('?')[0].replace(/^\//, '') || 'index';
      if (!manifestSlugs.has(target)) {
        failures.push(`${slug}: broken internal route ${href}`);
      }
    }
    for (const match of markup.matchAll(/\b(?:src|poster)="([^"]+)"/g)) {
      const source = match[1];
      if (!source.startsWith('/assets/')) continue;
      const localFile = path.join(PUBLIC_DIR, decodeURIComponent(source.replace(/^\//, '').split('?')[0]));
      if (!fs.existsSync(localFile)) failures.push(`${slug}: missing media ${source}`);
    }
  } catch (error) {
    failures.push(`${slug}: ${error.message}`);
  }
}

await server.close();
console.error = originalError;

if (warnings.size) {
  [...warnings].forEach((warning) => failures.push(`React warning: ${warning}`));
}

console.log(
  JSON.stringify(
    {
      pages: pageFiles.length,
      links: linkCount,
      media: mediaCount,
      headings: headingCount,
      interactiveRequests: tryItCount,
      brandIdHeaders: brandHeaderRequestCount,
      brandIdBodies: brandBodyRequestCount,
      feedbackControls: helpfulCount,
      failures: failures.length,
    },
    null,
    2
  )
);
if (failures.length) {
  console.error(failures.slice(0, 50).join('\n'));
  process.exitCode = 1;
}
