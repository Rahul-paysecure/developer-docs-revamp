# Documentation content editing architecture

## Current phase: structured content and Git-backed editor complete

All 99 routed documentation pages now render through
`src/components/StructuredContent.jsx`. There is no generated page-body JSX or
legacy React-tree editing fallback in `src/pages/`.

Two complementary record formats are supported:

- `src/content/pages/` contains hand-authored semantic block records for common
  documentation patterns such as breadcrumbs, headings, rich paragraphs,
  lists, figures, callouts, feedback and previous/next navigation.
- `src/content/trees/` contains serializable element-tree records for pages with
  complex tables, SVG flows, code samples and interactive `TryIt` components.
  These records preserve the original React output without storing or parsing
  HTML.

The deterministic migration utility at `scripts/migrate-page-tree.mjs`
preserved native elements and the approved `DocLink`, `Helpful` and `TryIt`
components while assigning a stable ID to every meaningful text leaf. It is a
development utility, not a runtime dependency.

Structured content uses explicit IDs such as `add-user-steps.submit.action`.
The editor recognises `data-content-id` and stores these as `field/<id>` instead
of deriving their identity from React-tree position. IDs are content addresses:
once published, they must not be renamed casually because saved edits and
future Git history will refer to them.

### Migration rules

1. Treat each migration as a structural change; do not rewrite factual content
   in the same change.
2. Give every block a unique, descriptive kebab-case ID.
3. Give independently editable inline runs and list items explicit IDs.
4. Keep request fields and response examples in structured `TryIt` properties;
   never duplicate a `TryIt` contract in page-wrapper JSX.
5. Keep interactive React components in the rendering layer.
6. Run `npm run verify` and `npm run build` after every migration batch. Page,
   link, media, heading, request and feedback counts must match the baseline
   unless the batch intentionally changes them.

Completed migration baseline:

```text
pages 99 · links 884 · media 182 · headings 1118
interactive requests 128 · feedback controls 99 · failures 0
```

### Repository adapters

The React editor is implemented in `src/components/EditablePageContent.jsx`.
Structured fields register directly through `StructuredEditorContext`; the
editor no longer walks or derives addresses from a rendered React tree. No HTML
string is stored or rendered.

The editor calls the repository in `src/content/contentRepository.js`:

```text
getSession(returnTo)
login(loginUrl)
logout()
getPage(slug)
savePage({ slug, changes, message, baseRevision, pageRevision })
deletePage(slug)
listPages()
exportSnapshot()
```

The local-development adapter stores this versioned shape under
`paysecure.docs.content-overrides.v1`:

```json
{
  "schemaVersion": 1,
  "pages": {
    "quickstart": {
      "slug": "quickstart",
      "changes": {
        "field/quickstart.h1.0001": "Updated heading"
      },
      "message": "Improve the quickstart introduction",
      "baseRevision": "structured-content-v1",
      "revision": "local-...",
      "updatedAt": "...",
      "savedBy": "local-admin"
    }
  }
}
```

These overrides are device-local and are not authoritative project content.
The Export edits action provides a portable JSON backup.

Production builds use the Git adapter and Netlify functions. The browser holds
only an HttpOnly signed SSO session cookie and a CSRF token. GitHub App and OIDC
client secrets remain server-side.

The save flow is:

1. Authenticate through provider-neutral OpenID Connect with PKCE and nonce.
2. Load the production branch SHA and a page revision derived from the
   structured source blob and any current override blob.
3. Send the changed stable fields, summary, base SHA, page revision, and CSRF
   token to the server.
4. Reject unknown fields, excessive payloads, stale page revisions, and a
   second editor pull request for the same page.
5. Merge the changed fields into
   `src/content/overrides/<slug>.json` on a short-lived branch.
6. Open a pull request through a repository-scoped GitHub App.
7. Return the pull request and deterministic Netlify Deploy Preview URLs.
8. Let GitHub Actions and Netlify run `npm run verify` and `npm run build`.

The adapter returns a record compatible with the local adapter plus review
metadata:

```json
{
  "slug": "quickstart",
  "changes": {},
  "message": "Improve the quickstart introduction",
  "baseRevision": "previous-commit-sha",
  "pageRevision": "source-and-override-hash",
  "revision": "new-commit-sha",
  "updatedAt": "...",
  "savedBy": "editor@paysecure.net",
  "branch": "docs/editor-quickstart-...",
  "pullRequest": {
    "number": 42,
    "url": "https://github.com/.../pull/42"
  },
  "previewUrl": "https://deploy-preview-42--...netlify.app/quickstart"
}
```

### Published overrides

`src/content/publishedOverrides.js` loads committed override JSON at build time.
The structured renderer treats a published override as the field's current
baseline. The public site never calls the editor functions unless the page was
explicitly opened with `?admin=1`.

`scripts/generate-editor-field-index.mjs` derives the allowlist from the exact
rendered structured documents and Postman addenda. `npm run verify` fails when
the committed index is stale.

## Migration verification

`npm run verify` proves that:

- all 100 page modules expose a structured document with the matching slug;
- all meaningful structured text fields have unique stable IDs;
- the server allowlist contains the exact editable field set;
- no page module contains generated `React.createElement` content;
- all 128 `TryIt` requests have structured request fields and example coverage,
  or an explicit machine-readable source gap when the Postman collection has no
  saved example;
- internal routes, local media, Brand ID placement, cURL execution and the
  editor repository contract remain valid.
- signed-session expiry, CSRF rejection, browser request shape, server-side
  field validation, page conflicts, and open-review conflicts remain valid.

One Postman-derived request has explicit `sourceExampleGap` metadata because
the Apple Pay Redirect Get Status success example is malformed and has no HTTP
status metadata. The documentation deliberately does not invent response
contracts. The gap should be resolved from a corrected authoritative Postman
example or engineering contract.
