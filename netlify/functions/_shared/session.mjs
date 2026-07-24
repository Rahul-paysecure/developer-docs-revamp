import {
  createHmac,
  randomBytes,
  timingSafeEqual,
} from 'node:crypto';
import {
  EditorHttpError,
  cookie,
  parseCookies,
} from './http.mjs';

export const SESSION_COOKIE = 'ps_docs_editor_session';
export const OIDC_STATE_COOKIE = 'ps_docs_editor_oidc_state';

function encode(value) {
  return Buffer.from(value).toString('base64url');
}

function decode(value) {
  return Buffer.from(value, 'base64url').toString('utf8');
}

function sessionSecret() {
  const value = process.env.EDITOR_SESSION_SECRET || '';
  if (value.length < 32) {
    throw new EditorHttpError(
      503,
      'EDITOR_NOT_CONFIGURED',
      'EDITOR_SESSION_SECRET must contain at least 32 characters.'
    );
  }
  return value;
}

function signature(encodedPayload) {
  return createHmac('sha256', sessionSecret()).update(encodedPayload).digest('base64url');
}

function signaturesMatch(left, right) {
  const leftBuffer = Buffer.from(left || '');
  const rightBuffer = Buffer.from(right || '');
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function signPayload(payload) {
  const encoded = encode(JSON.stringify(payload));
  return `${encoded}.${signature(encoded)}`;
}

export function verifyPayload(value) {
  const [encoded, suppliedSignature] = String(value || '').split('.');
  if (!encoded || !suppliedSignature || !signaturesMatch(signature(encoded), suppliedSignature)) return null;
  try {
    const payload = JSON.parse(decode(encoded));
    if (!payload.exp || payload.exp * 1000 <= Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export function signedCookie(name, payload, maxAge) {
  return cookie(name, signPayload(payload), { maxAge });
}

export function readSignedCookie(event, name) {
  return verifyPayload(parseCookies(event)[name]);
}

export function createSession(user, ttlSeconds = 8 * 60 * 60) {
  const now = Math.floor(Date.now() / 1000);
  return {
    sub: user.sub,
    email: user.email,
    name: user.name || user.email,
    groups: user.groups || [],
    csrf: randomBytes(24).toString('base64url'),
    iat: now,
    exp: now + ttlSeconds,
  };
}

export function getSession(event, { required = true } = {}) {
  const session = readSignedCookie(event, SESSION_COOKIE);
  if (!session && required) {
    throw new EditorHttpError(401, 'EDITOR_AUTH_REQUIRED', 'Sign in with company SSO to use the editor.');
  }
  return session;
}

export function requireCsrf(event, session) {
  const supplied = event.headers?.['x-editor-csrf'] || event.headers?.['X-Editor-Csrf'] || '';
  if (!supplied || !signaturesMatch(String(session.csrf || ''), String(supplied))) {
    throw new EditorHttpError(403, 'EDITOR_CSRF_INVALID', 'The editor session could not validate this change. Refresh and try again.');
  }
}

export function editorConfigured() {
  const hasOidc = Boolean(
    process.env.EDITOR_OIDC_ISSUER &&
    process.env.EDITOR_OIDC_CLIENT_ID &&
    process.env.EDITOR_OIDC_CLIENT_SECRET
  );
  const hasGitHub = Boolean(
    process.env.EDITOR_GITHUB_TOKEN ||
    (
      process.env.EDITOR_GITHUB_APP_ID &&
      process.env.EDITOR_GITHUB_INSTALLATION_ID &&
      process.env.EDITOR_GITHUB_PRIVATE_KEY
    )
  );
  return Boolean(
    (process.env.EDITOR_SESSION_SECRET || '').length >= 32 &&
    hasOidc &&
    hasGitHub &&
    (process.env.EDITOR_ALLOWED_EMAIL_DOMAINS || process.env.EDITOR_ALLOWED_GROUPS) &&
    process.env.EDITOR_GITHUB_OWNER &&
    process.env.EDITOR_GITHUB_REPO
  );
}
