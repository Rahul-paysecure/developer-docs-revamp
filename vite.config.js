import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const slugOf = (href) => {
  const route = href.split('#')[0].replace(/^\/+/, '');
  return route || 'index';
};

// ---- Goal 2: build-time tenant subsetting ---------------------------------
// A virtual module (virtual:tenant-docs) that, for the active VITE_TENANT,
// statically imports ONLY that tenant's allowed pages and emits the filtered
// nav, search and page metadata. Because the imports are generated per tenant,
// excluded payment-method pages are never bundled — "not built, not hidden".
function tenantDocs() {
  const virtualId = 'virtual:tenant-docs';
  const resolved = '\0' + virtualId;
  return {
    name: 'paysecure-tenant-docs',
    resolveId(id) {
      if (id === virtualId) return resolved;
    },
    async load(id) {
      if (id !== resolved) return;
      const tenant = process.env.VITE_TENANT || 'paysecure';
      const cfg = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'src', 'tenants', tenant + '.json'), 'utf8')
      );
      const { PAGES } = await import('./src/content/manifest.js');
      const nav = await import('./src/data/nav.js');

      const PM = new Set();
      for (const g of [...nav.NAV_GUIDES, ...nav.NAV_API]) {
        if ((g.label || '').includes('Payment Method'))
          g.items.forEach((it) => {
            const s = slugOf(it.h);
            if (!s.startsWith('payment-methods')) PM.add(s);
          });
      }
      const all = !cfg.methods || cfg.methods === 'all';
      const enabled = new Set(all ? [] : cfg.methods);
      const allow = (s) => all || !PM.has(s) || enabled.has(s);

      const allowedSlugs = Object.keys(PAGES).filter(allow);
      const filterTree = (tree) =>
        tree
          .map((g) => ({
            ...g,
            items: g.items.filter(
              (it) =>
                it.h === '#' ||
                it.h.startsWith('http') ||
                it.h.includes('payment-methods') ||
                allow(slugOf(it.h))
            ),
          }))
          .filter((g) => g.items.length > 0);

      const navByMode = {
        guides: filterTree(nav.NAV_GUIDES),
        api: filterTree(nav.NAV_API),
        dashboard: filterTree(nav.NAV_DASH),
      };
      const search = nav.SEARCH_INDEX.filter((i) => allow(slugOf(i.h)));
      const pages = {};
      allowedSlugs.forEach((s) => (pages[s] = PAGES[s]));

      let code = '';
      allowedSlugs.forEach((s, index) => {
        code += `import Page${index} from ${JSON.stringify('/src/pages/' + s + '.jsx')};\n`;
      });
      code += 'export const PAGE_COMPONENTS = {\n';
      allowedSlugs.forEach((s, index) => {
        code += `  ${JSON.stringify(s)}: Page${index},\n`;
      });
      code += '};\n';
      code += `export const PAGES = ${JSON.stringify(pages)};\n`;
      code += `export const NAV_BY_MODE = ${JSON.stringify(navByMode)};\n`;
      code += `export const SEARCH = ${JSON.stringify(search)};\n`;
      return code;
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), tenantDocs()],
});
