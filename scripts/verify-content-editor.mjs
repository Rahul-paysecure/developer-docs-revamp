import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import {
  ContentRepositoryError,
  CONTENT_STORAGE_KEY,
  createGitContentRepository,
  createLocalContentRepository,
} from '../src/content/contentRepository.js';
import { validateEditorChange, savePageChange } from '../netlify/functions/_shared/editor.mjs';
import { pageRevision } from '../netlify/functions/_shared/github.mjs';
import {
  createSession,
  getSession,
  requireCsrf,
  signPayload,
  verifyPayload,
} from '../netlify/functions/_shared/session.mjs';
import { safeReturnTo } from '../netlify/functions/_shared/http.mjs';
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

const browserRequests = [];
const browserResponses = [
  {
    configured: true,
    authenticated: true,
    csrf: 'csrf-token',
    user: { email: 'editor@paysecure.net', name: 'Editor' },
  },
  {
    slug: 'quickstart',
    changes: {},
    baseRevision: 'a'.repeat(40),
    pageRevision: 'b'.repeat(64),
  },
  {
    slug: 'quickstart',
    changes: { 'field/quickstart.b.0006': 'Updated text' },
    pullRequest: { number: 42, url: 'https://github.test/pull/42' },
    previewUrl: 'https://deploy-preview-42--docs.netlify.app/quickstart',
  },
];
const gitRepository = createGitContentRepository({
  fetchImpl: async (url, options = {}) => {
    browserRequests.push({ url, options });
    return new Response(JSON.stringify(browserResponses.shift()), {
      status: url.endsWith('editor-save') ? 201 : 200,
      headers: { 'Content-Type': 'application/json' },
    });
  },
  locationImpl: { assign() {} },
});
assert.equal((await gitRepository.getSession('/quickstart?admin=1')).authenticated, true);
assert.equal((await gitRepository.getPage('quickstart')).baseRevision, 'a'.repeat(40));
await gitRepository.savePage({
  slug: 'quickstart',
  changes: { 'field/quickstart.b.0006': 'Updated text' },
  message: 'Improve quickstart copy',
  baseRevision: 'a'.repeat(40),
  pageRevision: 'b'.repeat(64),
});
assert.equal(browserRequests[2].options.headers['X-Editor-CSRF'], 'csrf-token');
assert.deepEqual(JSON.parse(browserRequests[2].options.body), {
  slug: 'quickstart',
  changes: { 'field/quickstart.b.0006': 'Updated text' },
  message: 'Improve quickstart copy',
  baseRevision: 'a'.repeat(40),
  pageRevision: 'b'.repeat(64),
});

const failingRepository = createGitContentRepository({
  fetchImpl: async () => new Response(
    JSON.stringify({
      error: 'CONTENT_CONFLICT',
      message: 'This page changed after you opened it.',
      details: { currentPageRevision: 'c'.repeat(64) },
    }),
    { status: 409, headers: { 'Content-Type': 'application/json' } }
  ),
});
await assert.rejects(
  () => failingRepository.getPage('quickstart'),
  (error) =>
    error instanceof ContentRepositoryError &&
    error.code === 'CONTENT_CONFLICT' &&
    error.status === 409 &&
    error.details.currentPageRevision === 'c'.repeat(64)
);

const priorSecret = process.env.EDITOR_SESSION_SECRET;
const priorNodeEnv = process.env.NODE_ENV;
process.env.EDITOR_SESSION_SECRET = 'editor-test-secret-that-is-longer-than-32-characters';
process.env.NODE_ENV = 'test';
try {
  const now = Math.floor(Date.now() / 1000);
  const signed = signPayload({ sub: 'test', exp: now + 60 });
  assert.equal(verifyPayload(signed).sub, 'test');
  assert.equal(verifyPayload(`${signed}tampered`), null);
  assert.equal(verifyPayload(signPayload({ sub: 'expired', exp: now - 1 })), null);

  const editorSession = createSession({
    sub: 'user-1',
    email: 'editor@paysecure.net',
    name: 'Editor',
  });
  const event = { headers: {} };
  event.headers.cookie = `ps_docs_editor_session=${encodeURIComponent(signPayload(editorSession))}`;
  const restored = getSession(event);
  assert.equal(restored.email, 'editor@paysecure.net');
  assert.doesNotThrow(() =>
    requireCsrf({ headers: { 'x-editor-csrf': restored.csrf } }, restored)
  );
  assert.throws(
    () => requireCsrf({ headers: { 'x-editor-csrf': 'wrong' } }, restored),
    (error) => error.code === 'EDITOR_CSRF_INVALID'
  );
} finally {
  if (priorSecret === undefined) delete process.env.EDITOR_SESSION_SECRET;
  else process.env.EDITOR_SESSION_SECRET = priorSecret;
  if (priorNodeEnv === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = priorNodeEnv;
}

assert.equal(safeReturnTo('/quickstart?admin=1'), '/quickstart?admin=1');
assert.equal(safeReturnTo('https://attacker.test'), '/?admin=1');
assert.equal(safeReturnTo('//attacker.test'), '/?admin=1');
assert.equal(safeReturnTo('/\\attacker.test'), '/?admin=1');

const baseRevision = 'a'.repeat(40);
const sourceSha = 'c'.repeat(40);
const expectedPageRevision = pageRevision(sourceSha);
assert.deepEqual(
  validateEditorChange({
    slug: 'quickstart',
    changes: { 'field/quickstart.b.0006': 'Updated text' },
    message: 'Improve quickstart copy',
    baseRevision,
    pageRevision: expectedPageRevision,
  }).changes,
  { 'field/quickstart.b.0006': 'Updated text' }
);
assert.throws(
  () => validateEditorChange({
    slug: 'quickstart',
    changes: { 'field/not-a-real-field': 'Updated text' },
    message: 'Improve quickstart copy',
    baseRevision,
    pageRevision: expectedPageRevision,
  }),
  (error) => error.code === 'EDITOR_FIELD_INVALID'
);
assert.throws(
  () => validateEditorChange({
    slug: 'quickstart',
    changes: null,
    message: 'Improve quickstart copy',
    baseRevision,
    pageRevision: expectedPageRevision,
  }),
  (error) => error.code === 'EDITOR_CHANGES_INVALID'
);

const priorGitEnv = Object.fromEntries(
  [
    'EDITOR_GITHUB_TOKEN',
    'EDITOR_GITHUB_OWNER',
    'EDITOR_GITHUB_REPO',
    'EDITOR_GITHUB_BASE_BRANCH',
    'EDITOR_NETLIFY_SITE_NAME',
  ].map((key) => [key, process.env[key]])
);
const priorFetch = globalThis.fetch;
process.env.EDITOR_GITHUB_TOKEN = 'test-token';
process.env.EDITOR_GITHUB_OWNER = 'paysecure';
process.env.EDITOR_GITHUB_REPO = 'docs';
process.env.EDITOR_GITHUB_BASE_BRANCH = 'main';
process.env.EDITOR_NETLIFY_SITE_NAME = 'paysecure-dev-docs-react';
const githubWrites = [];
let editorPullRequestOpen = false;
globalThis.fetch = async (url, options = {}) => {
  const parsed = new URL(url);
  const route = parsed.pathname;
  const method = options.method || 'GET';
  if (method !== 'GET') githubWrites.push({ route, method, body: options.body });
  let body;
  let status = 200;
  if (route.endsWith('/git/ref/heads/main')) {
    body = { object: { sha: baseRevision } };
  } else if (route.endsWith('/contents/src/pages/quickstart.jsx')) {
    body = {
      sha: 'd'.repeat(40),
      content: Buffer.from("import document from '../content/trees/quickstart.js';").toString('base64'),
    };
  } else if (route.endsWith('/contents/src/content/trees/quickstart.js')) {
    body = { sha: sourceSha, content: Buffer.from('export default {};').toString('base64') };
  } else if (route.endsWith('/contents/src/content/overrides/quickstart.json') && method === 'GET') {
    status = 404;
    body = { message: 'Not Found' };
  } else if (route.endsWith('/pulls') && method === 'GET') {
    body = editorPullRequestOpen
      ? [{
          number: 42,
          html_url: 'https://github.test/paysecure/docs/pull/42',
          head: { ref: 'docs/editor-quickstart-20260723010101-abcdef' },
        }]
      : [];
  } else if (route.endsWith('/git/refs') && method === 'POST') {
    body = { ref: 'refs/heads/docs/editor-test' };
  } else if (route.endsWith('/contents/src/content/overrides/quickstart.json') && method === 'PUT') {
    body = { commit: { sha: 'e'.repeat(40) } };
  } else if (route.endsWith('/pulls') && method === 'POST') {
    editorPullRequestOpen = true;
    body = { number: 42, html_url: 'https://github.test/paysecure/docs/pull/42', state: 'open' };
  } else {
    throw new Error(`Unexpected GitHub test request: ${method} ${url}`);
  }
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
};
try {
  const submission = await savePageChange(
    {
      slug: 'quickstart',
      changes: { 'field/quickstart.b.0006': 'Updated text' },
      message: 'Improve quickstart copy',
      baseRevision,
      pageRevision: expectedPageRevision,
    },
    { email: 'editor@paysecure.net', name: 'Editor' }
  );
  assert.equal(submission.pullRequest.number, 42);
  assert.equal(
    submission.previewUrl,
    'https://deploy-preview-42--paysecure-dev-docs-react.netlify.app/quickstart'
  );
  assert.deepEqual(githubWrites.map(({ method }) => method), ['POST', 'PUT', 'POST']);
  await assert.rejects(
    () => savePageChange(
      {
        slug: 'quickstart',
        changes: { 'field/quickstart.b.0006': 'Another update' },
        message: 'Make another quickstart change',
        baseRevision,
        pageRevision: expectedPageRevision,
      },
      { email: 'editor@paysecure.net', name: 'Editor' }
    ),
    (error) =>
      error.code === 'EDITOR_PAGE_IN_REVIEW' &&
      error.details.pullRequest.number === 42
  );
} finally {
  globalThis.fetch = priorFetch;
  for (const [key, value] of Object.entries(priorGitEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

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
