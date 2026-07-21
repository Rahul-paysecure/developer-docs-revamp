import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import {
  CONTENT_STORAGE_KEY,
  createLocalContentRepository,
} from '../src/content/contentRepository.js';
import { dashAddUserDocument } from '../src/content/pages/dash-add-user.js';
import { dashBalanceDocument } from '../src/content/pages/dash-balance.js';
import { dashBrandSettingsDocument } from '../src/content/pages/dash-brand-settings.js';
import { dashGlobalBlockingDocument } from '../src/content/pages/dash-global-blocking.js';
import { dashBanksDocument } from '../src/content/pages/dash-banks.js';
import { dashManageRolesDocument } from '../src/content/pages/dash-manage-roles.js';
import { dashMerchantProfileDocument } from '../src/content/pages/dash-merchant-profile.js';
import { dashPayoutsDocument } from '../src/content/pages/dash-payouts.js';
import { dashDashboardDocument } from '../src/content/pages/dash-dashboard.js';
import { dashGlobalSettingsDocument } from '../src/content/pages/dash-global-settings.js';
import { dashRuleEngineDocument } from '../src/content/pages/dash-rule-engine.js';
import { dashUtilitiesDocument } from '../src/content/pages/dash-utilities.js';
import { validateDocument } from '../src/content/schema.js';

assert.equal(validateDocument(dashAddUserDocument).slug, 'dash-add-user');
[
  dashBalanceDocument,
  dashBrandSettingsDocument,
  dashGlobalBlockingDocument,
  dashBanksDocument,
  dashManageRolesDocument,
  dashMerchantProfileDocument,
  dashPayoutsDocument,
  dashDashboardDocument,
  dashGlobalSettingsDocument,
  dashRuleEngineDocument,
  dashUtilitiesDocument,
].forEach((document) => assert.equal(validateDocument(document).slug, document.slug));
assert.throws(
  () => validateDocument({
    schemaVersion: 1,
    slug: 'duplicate-test',
    blocks: [
      { id: 'same', type: 'paragraph', text: 'One' },
      { id: 'same', type: 'paragraph', text: 'Two' },
    ],
  }),
  /duplicate block id/
);

function memoryStorage() {
  const values = new Map();
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
  };
}

const storage = memoryStorage();
const repository = createLocalContentRepository(storage);

assert.equal(await repository.getPage('quickstart'), null);
const saved = await repository.savePage({
  slug: 'quickstart',
  changes: { 'field/quickstart.h1.0001': 'Updated quickstart title' },
  message: 'Improve quickstart heading',
});
assert.equal(saved.slug, 'quickstart');
assert.equal(saved.message, 'Improve quickstart heading');
assert.equal((await repository.getPage('quickstart')).changes['field/quickstart.h1.0001'], 'Updated quickstart title');
assert.equal((await repository.getPage('quickstart')).baseRevision, 'structured-content-v1');
assert.equal((await repository.listPages()).length, 1);
assert.equal((await repository.exportSnapshot()).schemaVersion, 1);

await repository.deletePage('quickstart');
assert.equal(await repository.getPage('quickstart'), null);

storage.setItem(CONTENT_STORAGE_KEY, '{broken json');
assert.deepEqual(await repository.listPages(), []);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({
  root: ROOT,
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'silent',
});
try {
  const { default: EditablePageContent } = await server.ssrLoadModule('/src/components/EditablePageContent.jsx');
  const { default: StructuredContent } = await server.ssrLoadModule('/src/components/StructuredContent.jsx');
  const { StructuredEditorContext } = await server.ssrLoadModule('/src/content/StructuredEditorContext.js');
  const sampleDocument = {
    schemaVersion: 1,
    slug: 'editor-verification',
    blocks: [{
      id: 'document-tree',
      type: 'tree',
      root: {
        type: 'element', tag: 'article', props: {}, children: [
          { type: 'element', tag: 'h1', props: {}, children: [{ type: 'text', id: 'editor.title', value: 'Editable heading' }] },
          { type: 'element', tag: 'p', props: {}, children: [{ type: 'text', id: 'editor.paragraph', value: 'Editable paragraph' }] },
        ],
      },
    }],
  };
  const SamplePage = () => React.createElement(StructuredContent, { document: sampleDocument });
  const markup = renderToStaticMarkup(
    React.createElement(EditablePageContent, { slug: 'editor-verification', Page: SamplePage })
  );
  assert.match(markup, /Editable heading/);
  assert.match(markup, /Editable paragraph/);
  assert.doesNotMatch(markup, /dangerouslySetInnerHTML/);

  const originals = {};
  const overrideMarkup = renderToStaticMarkup(
    React.createElement(
      StructuredEditorContext.Provider,
      {
        value: {
          registerOriginal(id, value) { originals[id] = value; },
          renderText(id, value) { return id === 'editor.title' ? 'Overridden heading' : value; },
        },
      },
      React.createElement(StructuredContent, { document: sampleDocument })
    )
  );
  assert.match(overrideMarkup, /Overridden heading/);
  assert.equal(originals['editor.title'], 'Editable heading');
  assert.equal(originals['editor.paragraph'], 'Editable paragraph');
} finally {
  await server.close();
}

console.log('Structured content repository and editor checks passed');
