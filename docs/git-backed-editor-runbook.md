# Git-backed content editor runbook

## Purpose

The production editor turns an authenticated text change into a reviewed
GitHub pull request. It does not push to `main`, merge changes, or expose
repository credentials in the browser.

The editor is available only when a production documentation page is opened
with `?admin=1`. Normal public page views do not call the editor service.

## One-time setup

### 1. Create the company SSO client

Create a confidential OpenID Connect application in the company's identity
provider. It must issue RS256 ID tokens and expose the standard discovery
document at:

```text
<issuer>/.well-known/openid-configuration
```

Register this exact redirect URI, replacing the host with the production
documentation host:

```text
https://<documentation-host>/.netlify/functions/editor-auth-callback
```

The editor requests `openid email profile`. If access is restricted through
`EDITOR_ALLOWED_GROUPS`, configure the provider to include a `groups` array in
the ID token.

### 2. Create and install a GitHub App

Create a private GitHub App owned by the Paysecure organisation and install it
only on the documentation repository. Grant:

- Metadata: read
- Contents: read and write
- Pull requests: read and write

Do not grant administration, actions, members, secrets, or organisation-wide
repository access. Record the App ID and installation ID, then generate its
private key.

### 3. Configure Netlify

Copy the names from `.env.example` into the Netlify site's environment
variables. Store real values only in Netlify, never in the repository.

Required:

```text
EDITOR_OIDC_ISSUER
EDITOR_OIDC_CLIENT_ID
EDITOR_OIDC_CLIENT_SECRET
EDITOR_SESSION_SECRET
EDITOR_GITHUB_APP_ID
EDITOR_GITHUB_INSTALLATION_ID
EDITOR_GITHUB_PRIVATE_KEY
EDITOR_GITHUB_OWNER
EDITOR_GITHUB_REPO
EDITOR_GITHUB_BASE_BRANCH
EDITOR_NETLIFY_SITE_NAME
```

At least one contributor restriction is also required:

```text
EDITOR_ALLOWED_EMAIL_DOMAINS
EDITOR_ALLOWED_GROUPS
```

Use a cryptographically random session secret of at least 32 characters. For a
multiline GitHub private key, save the complete PEM value; escaped `\n`
characters are also accepted.

`EDITOR_GITHUB_TOKEN` exists only as a local/test fallback. Do not set it in
Netlify production.

### 4. Confirm repository protection

Keep `main` protected with pull requests, required approvals, code-owner
review, passing verification/build checks, resolved conversations, and stale
approval dismissal. The editor relies on these controls and never merges its
own pull requests.

## Acceptance test

1. Deploy the configuration to production.
2. Open a low-risk page with `?admin=1`.
3. Sign in with an allowed company account.
4. Confirm that the editor displays the current short `main` SHA.
5. Change one prose field and enter an 8–120 character summary.
6. Select **Create pull request**.
7. Confirm the branch begins with `docs/editor-<slug>-`.
8. Confirm the pull request contains only
   `src/content/overrides/<slug>.json`.
9. Wait for GitHub verification and the Netlify Deploy Preview.
10. Review the preview, approve, and merge through the normal repository
    workflow.
11. Confirm the production page contains the merged copy.

Repeat with two browser sessions on the same page. After the first pull request
is opened, the second save must be rejected with a linkable
`EDITOR_PAGE_IN_REVIEW` conflict. After a merged source change, a tab that
loaded the older page revision must receive `CONTENT_CONFLICT`.

## Operating rules

- One open editor pull request per page.
- Do not rename stable field IDs unless the source and editor index are updated
  intentionally.
- API field names, enum values, paths, statuses, and examples require
  engineering review.
- The editor changes text fields only. Structural, navigation, media, and
  interactive request changes remain source-code contributions.
- Closing an unwanted pull request leaves its branch available for normal
  GitHub cleanup; no production content changes.

## Troubleshooting

| Symptom | Check |
|---|---|
| Editor says it is not configured | All required Netlify variables and one allowlist are present |
| SSO redirects back with an error | Redirect URI, issuer, client ID/secret, RS256, email and group claims |
| Sign-in works but save returns 403 | Refresh to renew the signed session and CSRF token |
| GitHub App authentication fails | App installation ID, repository installation, private key formatting |
| Save reports a stale page | Refresh, compare the latest page, and reapply the intended edit |
| Page already under review | Open or close the existing editor pull request before submitting another |
| Preview URL exists but is not ready | Wait for the Netlify Deploy Preview build attached to the pull request |
| Verification says the field index is stale | Run `npm run editor:index`, review the diff, then run `npm run verify` |

## Credential rotation

Rotate the OIDC client secret, session secret, and GitHub App private key in
Netlify. Rotating the session secret immediately signs out existing editor
sessions. Revoke the previous GitHub private key after the new key has been
verified. If the editor must be disabled quickly, remove the GitHub App
installation or one required editor environment variable; public documentation
continues to render normally.
