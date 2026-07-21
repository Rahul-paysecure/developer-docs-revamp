const BLOCK_TYPES = new Set([
  'breadcrumbs',
  'heading',
  'paragraph',
  'list',
  'image',
  'callout',
  'tree',
  'helpful',
  'navigation',
]);

function invariant(condition, message) {
  if (!condition) throw new Error(`Invalid documentation content: ${message}`);
}

export function validateDocument(document) {
  invariant(document && typeof document === 'object', 'document must be an object');
  invariant(document.schemaVersion === 1, 'schemaVersion must be 1');
  invariant(typeof document.slug === 'string' && document.slug, 'slug is required');
  invariant(Array.isArray(document.blocks), `${document.slug}.blocks must be an array`);

  const ids = new Set();
  document.blocks.forEach((block, index) => {
    invariant(block && typeof block === 'object', `block ${index} must be an object`);
    invariant(BLOCK_TYPES.has(block.type), `block ${index} has unsupported type "${block.type}"`);
    invariant(typeof block.id === 'string' && block.id, `block ${index} requires a stable id`);
    invariant(!ids.has(block.id), `duplicate block id "${block.id}"`);
    ids.add(block.id);
  });

  return document;
}

export function defineDocument(document) {
  return Object.freeze(validateDocument(document));
}

export function createDashboardDocument({ slug, current, owner = 'dashboard-product', lastReviewed = '2026-07-07', blocks, previous, next }) {
  return defineDocument({
    schemaVersion: 1,
    slug,
    owner,
    lastReviewed,
    blocks: [
      {
        id: 'breadcrumbs',
        type: 'breadcrumbs',
        items: [
          { id: 'home', label: 'Home', href: '/' },
          { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
          { id: 'current', label: current },
        ],
      },
      ...blocks,
      { id: 'feedback', type: 'helpful', updated: 'Last updated 07 Jul 2026 · API v1' },
      {
        id: 'page-navigation',
        type: 'navigation',
        items: [
          { id: 'previous', eyebrow: 'Previous', label: `← ${previous.label}`, href: previous.href },
          { id: 'next', eyebrow: 'Next', label: `${next.label} →`, href: next.href, next: true },
        ],
      },
    ],
  });
}

export function defineApiContract(contract) {
  invariant(contract && typeof contract === 'object', 'API contract must be an object');
  invariant(contract.schemaVersion === 1, 'API contract schemaVersion must be 1');
  invariant(typeof contract.id === 'string' && contract.id, 'API contract id is required');
  invariant(typeof contract.method === 'string' && contract.method, `${contract.id}.method is required`);
  invariant(typeof contract.url === 'string' && contract.url, `${contract.id}.url is required`);
  invariant(Array.isArray(contract.fields), `${contract.id}.fields must be an array`);
  contract.fields.forEach((field, index) => {
    invariant(typeof field.k === 'string' && field.k, `${contract.id}.fields[${index}].k is required`);
    invariant(Object.prototype.hasOwnProperty.call(field, 'v'), `${contract.id}.fields[${index}].v is required`);
    invariant(typeof field.req === 'boolean', `${contract.id}.fields[${index}].req must be boolean`);
  });
  invariant(contract.response !== undefined, `${contract.id}.response is required`);
  invariant(contract.errorResponse !== undefined, `${contract.id}.errorResponse is required`);
  return Object.freeze(contract);
}
