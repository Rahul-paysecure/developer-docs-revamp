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

/**
 * Local implementation of the content repository contract.
 *
 * The UI only calls getPage/savePage/deletePage/listPages/exportSnapshot. A future
 * Git adapter can implement the same async methods and turn savePage's message,
 * baseRevision and changes into a reviewed commit without changing the editor.
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

export const contentRepository = createLocalContentRepository();
