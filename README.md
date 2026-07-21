# Paysecure Developer Docs — React

The Paysecure documentation is a React-native Vite application. All 99
documentation pages render from structured content records through thin React
route components. Page bodies are no longer standalone HTML files, generated
`React.createElement` modules, or HTML strings stored in JSON.

The only HTML source inside this project is Vite's small `index.html` mounting
shell. Browsers require that entry document, but all visible documentation,
navigation and interactions are rendered by React.

## Run locally

Node.js 18 or newer is required.

```bash
npm install
npm run dev
```

Vite prints the local preview address, normally `http://localhost:5173`.

## React content model

| Responsibility | Location |
|---|---|
| Thin documentation route components | `src/pages/<slug>.jsx` |
| Shared documentation interactions | `src/components/PagePrimitives.jsx` |
| Page routing and layout metadata | `src/content/manifest.js` |
| Navigation and search data | `src/data/nav.js` |
| React SVG icons | `src/data/iconNodes.jsx` and `src/data/icons.jsx` |
| Shell, sidebar, top bar, search and TOC | `src/components/` |
| Theme and responsive design | `src/styles.css` |
| Tenant configuration | `src/tenants/` |
| OpenAPI specification | `openapi/paysecure.openapi.yaml` |
| Admin content persistence adapter | `src/content/contentRepository.js` |
| Structured content schema | `src/content/schema.js` |
| Hand-authored block records | `src/content/pages/` |
| Fidelity-preserving tree records | `src/content/trees/` |

Every page module is a thin wrapper around `StructuredContent`. Hand-authored
block records support common documentation patterns. Tree records preserve
complex tables, SVG flows, code examples and `TryIt` contracts as serializable
data while assigning a stable ID to every meaningful text field.

Shared interactive elements are React components:

- `DocLink` provides client-side navigation between documentation pages.
- `TryIt` renders a fully editable cURL command and executes its method, URL,
  headers and body directly from the browser. It displays the live HTTP status,
  timing, response headers and response body. The API must allow the deployed
  documentation origin through CORS; credentials remain in the current tab and
  are never persisted by the docs application.
- `Helpful` manages page-feedback state.

There is no `dangerouslySetInnerHTML` content pipeline and no runtime HTML
parser.

## Edit a page from the UI

While running locally, open any documentation page and select **Edit this page**
in the Admin content editor. Editable text is highlighted on hover. The editor
supports:

- editing visible headings, prose, table cells and static code text;
- a change summary that is ready to become a future Git commit message;
- saving an override in this browser's local storage;
- cancelling unsaved changes or resetting a page to its structured source;
- exporting all local edits as JSON for backup or migration.

This local phase is intentionally not access controlled and should not be
treated as a production admin system. In a production build the editor is only
shown when the page is opened with `?admin=1`; real authentication must be added
before enabling that route for merchants.

The editor does not serialise or render HTML. It stores text overrides against
stable field IDs such as `field/quickstart.h1.0001`, then applies them through
the structured renderer. API request contracts remain managed by structured
`TryIt` properties and the Postman parity gate.

The UI depends on an async content repository contract rather than calling
`localStorage` directly. The planned Git implementation can replace the local
adapter and turn the same save action into an authenticated commit. See
`docs/content-editing-architecture.md`.

Source editing is available in `src/content/pages/` and `src/content/trees/`;
Vite hot reloads the page while `npm run dev` is running. Stable IDs are content
addresses and should not be renamed casually because browser overrides and the
future Git adapter refer to them.

## Add a page

1. Create and validate a structured document record.
2. Create `src/pages/<slug>.jsx` as a thin `StructuredContent` wrapper.
3. Add the page's layout metadata to `src/content/manifest.js`.
4. Add its route to the appropriate navigation group and search entries in
   `src/data/nav.js`.
5. Run `npm run verify` and `npm run build`.

Page modules are loaded lazily per route. A new page therefore creates its own
small production chunk instead of increasing the initial application bundle.

## Verification

```bash
npm run verify
npm run build
```

Compare every interactive request and saved response against a fresh merchant-facing Postman export:

```bash
npm run audit:postman -- "/absolute/path/to/Paysecure API Documentation - Live.postman_collection.json" /tmp/postman-parity.json --strict
```

Add `--sync` only when intentionally merging missing Postman request and response fields into the React examples. The sync preserves merchant-safe examples, sanitizes imported personal data, and keeps React-only fields where the collection entry is known to be incomplete.

The verification gate:

- renders every page through React;
- requires all 99 routes to expose valid structured documents;
- requires every meaningful tree text field to have a unique stable ID;
- validates all structured `TryIt` contracts and explicit source-example gaps;
- checks that the manifest and page modules agree;
- rejects `dangerouslySetInnerHTML` in project source;
- checks internal page routes and local media files;
- treats React DOM warnings as failures;
- counts interactive request and feedback components.
- verifies the local content repository and editor rendering contract.

## Deploy to Netlify

```bash
npm run build
```

Deploy the generated `dist/` directory. `public/_redirects` ensures that direct
visits to routes such as `/api-pix` return the React application.

For repository-based deployments, `netlify.toml` runs verification before the
production build and publishes `dist/`. Pull requests receive isolated Deploy
Previews after the GitHub repository is connected to Netlify.

## Contribution workflow

Production changes use short-lived branches and pull requests. See
`CONTRIBUTING.md` for source-of-truth, verification and review requirements,
and `docs/OWNERSHIP.md` for the ownership matrix that must be completed before
required code-owner reviews are enabled.

## White-label builds

The build-time multi-tenant proof of concept remains available:

```bash
npm run build:tenants
npm run leak-scan
```

Tenant configuration supplies branding, palette, domains and enabled payment
methods. The tenant build plugin includes only the allowed React page modules.
Page-body brand tokenisation is still required before a partner build can pass
the brand-leak gate.

## OpenAPI specification

`openapi/paysecure.openapi.yaml` remains an internal machine-readable contract
for validation, testing, SDK generation and future integrations. The public
documentation uses the existing React API Reference pages so developers have
one authoritative API documentation experience.

## Legacy prototype

The HTML prototype remains outside this React project only as a temporary
historical reference. The React application does not import, read or build from
it. Once the React release is accepted, the parent prototype can be archived or
removed independently.
