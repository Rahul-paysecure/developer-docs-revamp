export function json(statusCode, body, headers = {}) {
  return {
    statusCode,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      ...headers,
    },
    body: JSON.stringify(body),
  };
}

export function redirect(location, cookies = []) {
  return {
    statusCode: 302,
    headers: {
      'Cache-Control': 'no-store',
      Location: location,
    },
    multiValueHeaders: cookies.length ? { 'Set-Cookie': cookies } : undefined,
    body: '',
  };
}

export function methodNotAllowed(allowed) {
  return json(405, { error: 'METHOD_NOT_ALLOWED', message: `Use ${allowed}.` }, { Allow: allowed });
}

export function parseCookies(event) {
  const header = event.headers?.cookie || event.headers?.Cookie || '';
  return Object.fromEntries(
    header
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const separator = part.indexOf('=');
        return separator < 0
          ? [decodeURIComponent(part), '']
          : [
              decodeURIComponent(part.slice(0, separator)),
              decodeURIComponent(part.slice(separator + 1)),
            ];
      })
  );
}

function isSecureCookie() {
  return process.env.CONTEXT !== 'dev' && process.env.NODE_ENV !== 'test';
}

export function cookie(name, value, {
  maxAge = 3600,
  httpOnly = true,
  sameSite = 'Lax',
  path = '/',
} = {}) {
  const parts = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `Path=${path}`,
    `Max-Age=${maxAge}`,
    `SameSite=${sameSite}`,
  ];
  if (httpOnly) parts.push('HttpOnly');
  if (isSecureCookie()) parts.push('Secure');
  return parts.join('; ');
}

export function clearCookie(name) {
  return cookie(name, '', { maxAge: 0 });
}

export function requestOrigin(event) {
  if (event.rawUrl) {
    try {
      return new URL(event.rawUrl).origin;
    } catch {
      // Fall through to forwarded headers.
    }
  }
  const protocol = event.headers?.['x-forwarded-proto'] || 'https';
  const host = event.headers?.['x-forwarded-host'] || event.headers?.host;
  if (!host) throw new EditorHttpError(500, 'EDITOR_ORIGIN_UNAVAILABLE', 'Unable to determine the editor origin.');
  return `${protocol}://${host}`;
}

export function safeReturnTo(value, fallback = '/?admin=1') {
  if (
    typeof value !== 'string' ||
    !value.startsWith('/') ||
    value.startsWith('//') ||
    value.includes('\\') ||
    /[\u0000-\u001f\u007f]/.test(value)
  ) return fallback;
  try {
    const base = 'https://editor.invalid';
    const parsed = new URL(value, base);
    return parsed.origin === base
      ? `${parsed.pathname}${parsed.search}${parsed.hash}`
      : fallback;
  } catch {
    return fallback;
  }
}

export function parseJsonBody(event, maxBytes = 64 * 1024) {
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body || '', 'base64').toString('utf8')
    : event.body || '';
  if (Buffer.byteLength(raw, 'utf8') > maxBytes) {
    throw new EditorHttpError(413, 'REQUEST_TOO_LARGE', `The editor request exceeds ${maxBytes} bytes.`);
  }
  try {
    return JSON.parse(raw || '{}');
  } catch {
    throw new EditorHttpError(400, 'INVALID_JSON', 'The editor request body must be valid JSON.');
  }
}

export class EditorHttpError extends Error {
  constructor(statusCode, code, message, details) {
    super(message);
    this.name = 'EditorHttpError';
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}

export function errorResponse(error) {
  if (error instanceof EditorHttpError) {
    return json(error.statusCode, {
      error: error.code,
      message: error.message,
      ...(error.details === undefined ? {} : { details: error.details }),
    });
  }
  console.error(error);
  return json(500, {
    error: 'EDITOR_SERVER_ERROR',
    message: 'The documentation editor could not complete the request.',
  });
}
