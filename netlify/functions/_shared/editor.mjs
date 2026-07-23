import fieldIndex from '../../../src/content/editor-field-index.json' with { type: 'json' };
import { EditorHttpError } from './http.mjs';
import {
  createBranch,
  createEditorBranch,
  createPullRequest,
  deleteBranch,
  findOpenEditorPullRequest,
  getBaseRef,
  getContent,
  netlifyPreviewUrl,
  pageRevision,
  putContent,
} from './github.mjs';

const MAX_CHANGES = 200;
const MAX_FIELD_BYTES = 20 * 1024;
const OVERRIDE_SCHEMA_VERSION = 1;

function decodeContent(record) {
  return record?.content ? Buffer.from(record.content.replace(/\n/g, ''), 'base64').toString('utf8') : '';
}

function parseOverride(record, slug) {
  if (!record) return { schemaVersion: 1, slug, changes: {} };
  try {
    const value = JSON.parse(decodeContent(record));
    const allowed = new Set(fieldIndex.pages[slug] || []);
    if (
      value.schemaVersion !== OVERRIDE_SCHEMA_VERSION ||
      value.slug !== slug ||
      !value.changes ||
      typeof value.changes !== 'object' ||
      Array.isArray(value.changes) ||
      Object.entries(value.changes).some(
        ([key, text]) => !allowed.has(key) || typeof text !== 'string'
      )
    ) {
      throw new Error('invalid shape');
    }
    return value;
  } catch {
    throw new EditorHttpError(409, 'CONTENT_OVERRIDE_INVALID', `The published override for ${slug} is invalid.`);
  }
}

export function validateEditorChange(payload) {
  const slug = String(payload.slug || '');
  if (!/^[a-z0-9][a-z0-9-]{0,79}$/.test(slug) || !fieldIndex.pages[slug]) {
    throw new EditorHttpError(400, 'EDITOR_PAGE_INVALID', 'The requested documentation page is not editable.');
  }
  if (
    !payload.changes ||
    typeof payload.changes !== 'object' ||
    Array.isArray(payload.changes)
  ) {
    throw new EditorHttpError(400, 'EDITOR_CHANGES_INVALID', 'Documentation changes must be a field-to-text object.');
  }
  const allowed = new Set(fieldIndex.pages[slug]);
  const entries = Object.entries(payload.changes);
  if (!entries.length) {
    throw new EditorHttpError(400, 'EDITOR_CHANGES_EMPTY', 'Make at least one documentation change before creating a pull request.');
  }
  if (entries.length > MAX_CHANGES) {
    throw new EditorHttpError(400, 'EDITOR_TOO_MANY_CHANGES', `A single edit may change at most ${MAX_CHANGES} fields.`);
  }
  const changes = {};
  for (const [key, value] of entries) {
    if (!allowed.has(key)) {
      throw new EditorHttpError(400, 'EDITOR_FIELD_INVALID', `${key} is not an editable field on ${slug}.`);
    }
    if (typeof value !== 'string' || value.includes('\0')) {
      throw new EditorHttpError(400, 'EDITOR_VALUE_INVALID', `${key} must contain plain text.`);
    }
    if (Buffer.byteLength(value, 'utf8') > MAX_FIELD_BYTES) {
      throw new EditorHttpError(400, 'EDITOR_FIELD_TOO_LARGE', `${key} exceeds ${MAX_FIELD_BYTES} bytes.`);
    }
    changes[key] = value;
  }
  const message = String(payload.message || '').trim().replace(/\s+/g, ' ');
  if (message.length < 8 || message.length > 120) {
    throw new EditorHttpError(400, 'EDITOR_MESSAGE_INVALID', 'The change summary must contain 8 to 120 characters.');
  }
  const baseRevision = String(payload.baseRevision || '');
  const expectedPageRevision = String(payload.pageRevision || '');
  if (!/^[a-f0-9]{40}$/.test(baseRevision) || !/^[a-f0-9]{64}$/.test(expectedPageRevision)) {
    throw new EditorHttpError(400, 'EDITOR_REVISION_INVALID', 'Refresh the page to load the current Git revision.');
  }
  return { slug, changes, message, baseRevision, pageRevision: expectedPageRevision };
}

async function sourcePathForPage(slug, ref) {
  const wrapperPath = `src/pages/${slug}.jsx`;
  const wrapper = await getContent(wrapperPath, ref);
  if (!wrapper) throw new EditorHttpError(404, 'EDITOR_PAGE_MISSING', `${slug} is not present on the production branch.`);
  const source = decodeContent(wrapper);
  const match = source.match(/from\s+['"]\.\.\/content\/(pages|trees)\/([^'"]+)['"]/);
  if (!match) {
    throw new EditorHttpError(409, 'EDITOR_SOURCE_UNRESOLVED', `The structured source for ${slug} could not be resolved.`);
  }
  return {
    wrapperPath,
    wrapperSha: wrapper.sha,
    sourcePath: `src/content/${match[1]}/${match[2]}`,
  };
}

export async function getPageState(slug) {
  if (!fieldIndex.pages[slug]) {
    throw new EditorHttpError(404, 'EDITOR_PAGE_INVALID', 'The requested documentation page is not editable.');
  }
  const base = await getBaseRef();
  const source = await sourcePathForPage(slug, base.sha);
  const sourceRecord = await getContent(source.sourcePath, base.sha);
  if (!sourceRecord) {
    throw new EditorHttpError(409, 'EDITOR_SOURCE_MISSING', `The structured source for ${slug} is missing.`);
  }
  const overridePath = `src/content/overrides/${slug}.json`;
  const overrideRecord = await getContent(overridePath, base.sha);
  return {
    slug,
    baseRevision: base.sha,
    pageRevision: pageRevision(sourceRecord.sha, overrideRecord?.sha),
    sourcePath: source.sourcePath,
    overridePath,
    overrideRecord,
    override: parseOverride(overrideRecord, slug),
  };
}

function pullRequestBody({ slug, changes, baseRevision, pageRevision: revision, user }) {
  const route = slug === 'index' ? '/' : `/${slug}`;
  const changedFields = Object.keys(changes).map((field) => `- \`${field}\``).join('\n');
  return [
    '## Git-backed editor submission',
    '',
    `- Page: \`${route}\``,
    `- Submitted by: ${user.name} (\`${user.email}\`)`,
    `- Base commit: \`${baseRevision}\``,
    `- Page revision: \`${revision}\``,
    '',
    '### Changed fields',
    '',
    changedFields,
    '',
    '### Preview',
    '',
    `@netlify ${route}`,
    '',
    '### Review requirements',
    '',
    '- [ ] Content owner approval',
    '- [ ] Engineering approval for API fields, enums, paths, statuses, or examples',
    '- [ ] GitHub verification and Netlify Deploy Preview pass',
  ].join('\n');
}

export async function savePageChange(payload, user) {
  const input = validateEditorChange(payload);
  const current = await getPageState(input.slug);
  if (current.pageRevision !== input.pageRevision) {
    throw new EditorHttpError(
      409,
      'CONTENT_CONFLICT',
      'This page changed after you opened it. Refresh and reapply your edit before creating a pull request.',
      {
        expectedPageRevision: input.pageRevision,
        currentPageRevision: current.pageRevision,
        currentBaseRevision: current.baseRevision,
      }
    );
  }
  const openPullRequest = await findOpenEditorPullRequest(input.slug);
  if (openPullRequest) {
    throw new EditorHttpError(
      409,
      'EDITOR_PAGE_IN_REVIEW',
      'Another editor change for this page is already under review. Review or close it before creating a second pull request.',
      { pullRequest: openPullRequest }
    );
  }

  const updatedAt = new Date().toISOString();
  const record = {
    schemaVersion: OVERRIDE_SCHEMA_VERSION,
    slug: input.slug,
    changes: { ...current.override.changes, ...input.changes },
    message: input.message,
    baseRevision: current.baseRevision,
    updatedAt,
    savedBy: user.email,
  };
  const branch = createEditorBranch(input.slug);
  await createBranch(branch, current.baseRevision);
  try {
    const commit = await putContent({
      path: current.overridePath,
      branch,
      message: input.message,
      content: `${JSON.stringify(record, null, 2)}\n`,
      sha: current.overrideRecord?.sha,
      user,
    });
    const pullRequest = await createPullRequest({
      branch,
      title: input.message,
      body: pullRequestBody({ ...input, baseRevision: current.baseRevision, user }),
    });
    return {
      slug: input.slug,
      changes: input.changes,
      message: input.message,
      baseRevision: current.baseRevision,
      pageRevision: current.pageRevision,
      revision: commit.commit.sha,
      updatedAt,
      savedBy: user.email,
      branch,
      pullRequest: {
        number: pullRequest.number,
        url: pullRequest.html_url,
        state: pullRequest.state,
      },
      previewUrl: netlifyPreviewUrl(pullRequest.number, input.slug),
    };
  } catch (error) {
    try {
      await deleteBranch(branch);
    } catch (cleanupError) {
      console.error('Unable to clean up failed editor branch', cleanupError);
    }
    throw error;
  }
}
