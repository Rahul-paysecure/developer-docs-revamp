// White-label tenant selection (build-time multi-tenant).
// The active tenant is chosen at build time via VITE_TENANT (defaults to
// "paysecure"). Each tenant is one JSON config in src/tenants/. This is the
// heart of Goal 2: one shared source, one config per partner, one built site
// per tenant.

const configs = import.meta.glob('./tenants/*.json', {
  import: 'default',
  eager: true,
});

const BY_ID = {};
for (const [file, cfg] of Object.entries(configs)) {
  const id = file.replace('./tenants/', '').replace('.json', '');
  BY_ID[cfg.id || id] = cfg;
}

const activeId = import.meta.env.VITE_TENANT || 'paysecure';
export const TENANT = BY_ID[activeId] || BY_ID.paysecure;

// Inject the tenant palette as CSS variable overrides on :root. Because each
// tenant is a separate build, only this tenant's theme ships in the bundle.
export function applyTenantTheme() {
  const root = document.documentElement;
  const p = TENANT.palette || {};
  Object.entries(p).forEach(([k, v]) => root.style.setProperty('--' + k, v));
}
