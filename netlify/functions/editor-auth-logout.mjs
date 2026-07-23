import { clearCookie, errorResponse, json, methodNotAllowed } from './_shared/http.mjs';
import { SESSION_COOKIE, getSession, requireCsrf } from './_shared/session.mjs';

export async function handler(event) {
  if (event.httpMethod !== 'POST') return methodNotAllowed('POST');
  try {
    const session = getSession(event);
    requireCsrf(event, session);
    return json(
      200,
      { authenticated: false },
      { 'Set-Cookie': clearCookie(SESSION_COOKIE) }
    );
  } catch (error) {
    return errorResponse(error);
  }
}
