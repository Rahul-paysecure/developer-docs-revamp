export const CONTENT_STORAGE_KEY = 'paysecure.docs.content-overrides.v1';
export const CONTENT_SAVED_EVENT = 'paysecure:docs-content-saved';

const EMPTY_SNAPSHOT = Object.freeze({ schemaVersion: 1, pages: {} });

function copy(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

function storageFromBrowser() {
  if (typeof window === 'undefined') return null;
  return window.localStorage;
}

function validSnapshot(value) {
  return Boolean(value && value.schemaVersion === 1 && value.pages && typeof value.pages === 'object');
}

export class ContentRepositoryError extends Error {
  constructor(message, { code = 'CONTENT_REPOSITORY_ERROR', status = 500, details } = {}) {
    super(message);
    this.name = 'ContentRepositoryError';
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

/**
 * Local implementation of the content repository contract.
 *
 * This remains the default during local development so documentation authors can
 * experiment without an SSO or GitHub App configuration.
 */
export function createLocalContentRepository(storage = storageFromBrowser()) {
  function readSnapshot() {
    if (!storage) return copy(EMPTY_SNAPSHOT);
    const raw = storage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) return copy(EMPTY_SNAPSHOT);
    try {
      const parsed = JSON.parse(raw);
      return validSnapshot(parsed) ? parsed : copy(EMPTY_SNAPSHOT);
    } catch {
      return copy(EMPTY_SNAPSHOT);
    }
  }

  function writeSnapshot(snapshot) {
    if (!storage) throw new Error('Local browser storage is unavailable.');
    storage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(snapshot));
  }

  async function deletePage(slug) {
    const snapshot = readSnapshot();
    delete snapshot.pages[slug];
    writeSnapshot(snapshot);
  }

  return {
    kind: 'local-browser',

    async getSession() {
      return {
        configured: true,
        authenticated: true,
        local: true,
        user: { name: 'Local preview', email: 'local-admin' },
      };
    },

    login() {},

    async logout() {},

    async getPage(slug) {
      return copy(readSnapshot().pages[slug] || null);
    },

    async savePage({ slug, changes, message, baseRevision = 'structured-content-v1' }) {
      const sanitizedChanges = Object.fromEntries(
        Object.entries(changes || {}).filter(
          ([key, value]) => key && typeof value === 'string'
        )
      );
      if (!Object.keys(sanitizedChanges).length) {
        await deletePage(slug);
        return null;
      }
      const snapshot = readSnapshot();
      const updatedAt = new Date().toISOString();
      const record = {
        slug,
        changes: sanitizedChanges,
        message: String(message || `Update ${slug} documentation`).trim(),
        baseRevision,
        revision: `local-${Date.now()}`,
        updatedAt,
        savedBy: 'local-admin',
      };
      snapshot.pages[slug] = record;
      writeSnapshot(snapshot);
      return copy(record);
    },

    deletePage,

    async listPages() {
      return Object.values(readSnapshot().pages)
        .map(copy)
        .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
    },

    async exportSnapshot() {
      return copy(readSnapshot());
    },
  };
}

async function parseResponse(response) {
  let payload = {};
  let parsed = false;
  try {
    payload = await response.json();
    parsed = true;
  } catch {
    // Preserve a useful generic error when a proxy returns HTML or an empty body.
  }
  if (!response.ok) {
    const error = typeof payload.error === 'object' ? payload.error : {};
    throw new ContentRepositoryError(
      error.message || payload.message || `The editor service returned HTTP ${response.status}.`,
      {
        code: error.code || (typeof payload.error === 'string' ? payload.error : 'EDITOR_SERVICE_ERROR'),
        status: response.status,
        details: error.details ?? payload.details,
      }
    );
  }
  if (!parsed) {
    throw new ContentRepositoryError('The editor service returned an invalid response.', {
      code: 'EDITOR_SERVICE_INVALID_RESPONSE',
      status: response.status,
    });
  }
  return payload;
}

export function createGitContentRepository({
  baseUrl = '/.netlify/functions',
  fetchImpl = typeof fetch === 'function' ? fetch.bind(globalThis) : null,
  locationImpl = typeof window === 'undefined' ? null : window.location,
} = {}) {
  let session = null;

  async function request(path, options = {}) {
    if (!fetchImpl) throw new ContentRepositoryError('The editor service is unavailable in this browser.');
    return parseResponse(
      await fetchImpl(`${baseUrl}/${path}`, {
        credentials: 'same-origin',
        ...options,
        headers: {
          Accept: 'application/json',
          ...(options.body ? { 'Content-Type': 'application/json' } : {}),
          ...(options.headers || {}),
        },
      })
    );
  }

  return {
    kind: 'git-pull-request',

    async getSession(returnTo = '/') {
      session = await request(`editor-session?returnTo=${encodeURIComponent(returnTo)}`);
      return copy(session);
    },

    login(loginUrl) {
      if (locationImpl && loginUrl) locationImpl.assign(loginUrl);
    },

    async logout() {
      if (!session?.csrf) return;
      await request('editor-auth-logout', {
        method: 'POST',
        headers: { 'X-Editor-CSRF': session.csrf },
      });
      session = null;
    },

    async getPage(slug) {
      return request(`editor-page?slug=${encodeURIComponent(slug)}`);
    },

    async savePage({ slug, changes, message, baseRevision, pageRevision }) {
      if (!session?.csrf) {
        throw new ContentRepositoryError('Your editor session has expired. Sign in again.', {
          code: 'EDITOR_SESSION_REQUIRED',
          status: 401,
        });
      }
      return request('editor-save', {
        method: 'POST',
        headers: { 'X-Editor-CSRF': session.csrf },
        body: JSON.stringify({ slug, changes, message, baseRevision, pageRevision }),
      });
    },

    async deletePage() {
      throw new ContentRepositoryError(
        'Published edits are removed through a reviewed pull request, not directly from the browser.',
        { code: 'EDITOR_OPERATION_UNSUPPORTED', status: 405 }
      );
    },

    async listPages() {
      return [];
    },

    async exportSnapshot() {
      throw new ContentRepositoryError(
        'Git-backed edits are already recorded in GitHub and do not need a browser export.',
        { code: 'EDITOR_OPERATION_UNSUPPORTED', status: 405 }
      );
    },
  };
}

const viteEnvironment = import.meta.env || {};
const useGitRepository =
  viteEnvironment.PROD || viteEnvironment.VITE_EDITOR_BACKEND === 'git';

export const contentRepository = useGitRepository
  ? createGitContentRepository()
  : createLocalContentRepository();
