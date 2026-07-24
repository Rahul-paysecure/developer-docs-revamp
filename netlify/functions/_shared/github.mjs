import {
  createHash,
  randomBytes,
  sign,
} from 'node:crypto';
import { EditorHttpError } from './http.mjs';

let installationTokenCache;

function encodeJson(value) {
  return Buffer.from(JSON.stringify(value)).toString('base64url');
}

function githubConfig() {
  const owner = process.env.EDITOR_GITHUB_OWNER;
  const repo = process.env.EDITOR_GITHUB_REPO;
  const baseBranch = process.env.EDITOR_GITHUB_BASE_BRANCH || 'main';
  if (!owner || !repo) {
    throw new EditorHttpError(503, 'EDITOR_NOT_CONFIGURED', 'GitHub repository settings are incomplete.');
  }
  return { owner, repo, baseBranch };
}

function appJwt() {
  const appId = process.env.EDITOR_GITHUB_APP_ID;
  const privateKey = String(process.env.EDITOR_GITHUB_PRIVATE_KEY || '').replace(/\\n/g, '\n');
  if (!appId || !privateKey) {
    throw new EditorHttpError(503, 'EDITOR_NOT_CONFIGURED', 'GitHub App credentials are incomplete.');
  }
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${encodeJson({ alg: 'RS256', typ: 'JWT' })}.${encodeJson({
    iat: now - 30,
    exp: now + 8 * 60,
    iss: appId,
  })}`;
  return `${unsigned}.${sign('RSA-SHA256', Buffer.from(unsigned), privateKey).toString('base64url')}`;
}

async function installationToken() {
  if (process.env.EDITOR_GITHUB_TOKEN) return process.env.EDITOR_GITHUB_TOKEN;
  if (installationTokenCache?.expiresAt > Date.now() + 60_000) return installationTokenCache.token;
  const installationId = process.env.EDITOR_GITHUB_INSTALLATION_ID;
  if (!installationId) {
    throw new EditorHttpError(503, 'EDITOR_NOT_CONFIGURED', 'EDITOR_GITHUB_INSTALLATION_ID is missing.');
  }
  const response = await fetch(
    `https://api.github.com/app/installations/${encodeURIComponent(installationId)}/access_tokens`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${appJwt()}`,
        'User-Agent': 'paysecure-docs-editor',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );
  if (!response.ok) {
    throw new EditorHttpError(502, 'GITHUB_APP_AUTH_FAILED', `GitHub App authentication returned HTTP ${response.status}.`);
  }
  const body = await response.json();
  installationTokenCache = {
    token: body.token,
    expiresAt: new Date(body.expires_at).getTime(),
  };
  return body.token;
}

function encodeRepoPath(value) {
  return value.split('/').map(encodeURIComponent).join('/');
}

export async function githubRequest(path, { method = 'GET', body, allow404 = false } = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${await installationToken()}`,
      'Content-Type': 'application/json',
      'User-Agent': 'paysecure-docs-editor',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (allow404 && response.status === 404) return null;
  if (!response.ok) {
    const details = await response.text();
    throw new EditorHttpError(
      502,
      'GITHUB_API_FAILED',
      `GitHub returned HTTP ${response.status}.`,
      details.slice(0, 500)
    );
  }
  if (response.status === 204) return null;
  return response.json();
}

function repoApi(path = '') {
  const { owner, repo } = githubConfig();
  return `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}${path}`;
}

export async function getBaseRef() {
  const { baseBranch } = githubConfig();
  const ref = await githubRequest(repoApi(`/git/ref/heads/${encodeURIComponent(baseBranch)}`));
  return { branch: baseBranch, sha: ref.object.sha };
}

export async function getContent(path, ref) {
  return githubRequest(
    repoApi(`/contents/${encodeRepoPath(path)}?ref=${encodeURIComponent(ref)}`),
    { allow404: true }
  );
}

export async function createBranch(branch, sha) {
  return githubRequest(repoApi('/git/refs'), {
    method: 'POST',
    body: { ref: `refs/heads/${branch}`, sha },
  });
}

export async function deleteBranch(branch) {
  return githubRequest(repoApi(`/git/refs/heads/${encodeRepoPath(branch)}`), { method: 'DELETE' });
}

export async function putContent({ path, branch, message, content, sha, user }) {
  const botEmail = process.env.EDITOR_GIT_AUTHOR_EMAIL || 'docs-bot@paysecure.net';
  return githubRequest(repoApi(`/contents/${encodeRepoPath(path)}`), {
    method: 'PUT',
    body: {
      message,
      content: Buffer.from(content).toString('base64'),
      branch,
      ...(sha ? { sha } : {}),
      author: { name: user.name || user.email, email: botEmail },
      committer: { name: 'Paysecure Docs Editor', email: botEmail },
    },
  });
}

export async function createPullRequest({ branch, title, body }) {
  const { baseBranch } = githubConfig();
  return githubRequest(repoApi('/pulls'), {
    method: 'POST',
    body: {
      title,
      head: branch,
      base: baseBranch,
      body,
      draft: false,
      maintainer_can_modify: true,
    },
  });
}

export async function findOpenEditorPullRequest(slug) {
  const { baseBranch } = githubConfig();
  const pulls = await githubRequest(
    repoApi(`/pulls?state=open&base=${encodeURIComponent(baseBranch)}&per_page=100`)
  );
  const prefix = `docs/editor-${slug}-`;
  const match = pulls.find((pull) => String(pull.head?.ref || '').startsWith(prefix));
  return match
    ? { number: match.number, url: match.html_url, branch: match.head.ref }
    : null;
}

export function createEditorBranch(slug) {
  const stamp = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
  const suffix = randomBytes(3).toString('hex');
  return `docs/editor-${slug}-${stamp}-${suffix}`.slice(0, 120);
}

export function pageRevision(sourceSha, overrideSha = '-') {
  return createHash('sha256').update(`${sourceSha}:${overrideSha}`).digest('hex');
}

export function netlifyPreviewUrl(prNumber, slug) {
  const site = process.env.EDITOR_NETLIFY_SITE_NAME;
  if (!site) return null;
  const route = slug === 'index' ? '' : `/${slug}`;
  return `https://deploy-preview-${prNumber}--${site}.netlify.app${route}`;
}
