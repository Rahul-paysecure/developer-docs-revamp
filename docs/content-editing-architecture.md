# Documentation content editing architecture

## Current phase: structured-content migration complete

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

### Local browser persistence

The React editor is implemented in `src/components/EditablePageContent.jsx`.
Structured fields register directly through `StructuredEditorContext`; the
editor no longer walks or derives addresses from a rendered React tree. No HTML
string is stored or rendered.

The editor calls the repository in `src/content/contentRepository.js`:

```text
getPage(slug)
savePage({ slug, changes, message, baseRevision })
deletePage(slug)
listPages()
exportSnapshot()
```

The local adapter stores this versioned shape under
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

## Next phase: Git-backed repository adapter

Replace `contentRepository` with an adapter that implements the same async
methods and sends writes to an authenticated server endpoint. Do not put Git
credentials or commit logic in the browser.

Recommended save flow:

1. Require an authenticated admin session and CSRF protection.
2. Send `slug`, `changes`, `message`, and `baseRevision` to the server.
3. Validate the page, allowed fields, request size, and expected base revision.
4. Apply edits to a structured content source such as MDX or endpoint JSON.
5. Run formatting, strict Postman parity, React verification, and the production build.
6. Create a branch and commit using the supplied change summary.
7. Return the commit SHA and preview URL to the editor.
8. Prefer a pull request and review step before merging to the production branch.

The Git adapter should return a record compatible with the local adapter:

```json
{
  "slug": "quickstart",
  "changes": {},
  "message": "Improve the quickstart introduction",
  "baseRevision": "previous-commit-sha",
  "revision": "new-commit-sha",
  "updatedAt": "...",
  "savedBy": "admin-user-id"
}
```

## Migration verification

`npm run verify` now proves that:

- all 99 page modules expose a structured document with the matching slug;
- all 23,295 meaningful tree text fields have unique stable IDs;
- no page module contains generated `React.createElement` content;
- all 128 `TryIt` requests have structured request fields and example coverage,
  or an explicit machine-readable source gap when the Postman collection has no
  saved example;
- internal routes, local media, Brand ID placement, cURL execution and the
  editor repository contract remain valid.

One Postman-derived request has explicit `sourceExampleGap` metadata because
the Apple Pay Redirect Get Status success example is malformed and has no HTTP
status metadata. The documentation deliberately does not invent response
contracts. The gap should be resolved from a corrected authoritative Postman
example or engineering contract.
