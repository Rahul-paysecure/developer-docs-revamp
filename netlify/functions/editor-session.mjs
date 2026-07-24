import { editorConfigured, getSession } from './_shared/session.mjs';
import { errorResponse, json, methodNotAllowed, safeReturnTo } from './_shared/http.mjs';

export async function handler(event) {
  if (event.httpMethod !== 'GET') return methodNotAllowed('GET');
  try {
    const returnTo = safeReturnTo(event.queryStringParameters?.returnTo);
    const loginUrl = `/.netlify/functions/editor-auth-start?returnTo=${encodeURIComponent(returnTo)}`;
    if (!editorConfigured()) {
      return json(503, {
        configured: false,
        authenticated: false,
        loginUrl,
        message: 'The Git-backed editor is installed but its SSO and GitHub App environment variables are not configured.',
      });
    }
    const session = getSession(event, { required: false });
    if (!session) {
      return json(200, { configured: true, authenticated: false, loginUrl });
    }
    return json(200, {
      configured: true,
      authenticated: true,
      csrf: session.csrf,
      user: {
        sub: session.sub,
        email: session.email,
        name: session.name,
        groups: session.groups || [],
      },
    });
  } catch (error) {
    return errorResponse(error);
  }
}
