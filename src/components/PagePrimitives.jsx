import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { TENANT } from '../tenant.js';
import { isExternalHref, isHashOnly, toPath } from '../utils/links.js';
import {
  buildCurl,
  parseCurl,
  requestCode,
  requestPlaceholders,
} from '../utils/curl.js';
import { brandIdPlacement, fieldsForBrandIdPlacement } from '../utils/brandId.js';
import { Icon } from '../data/icons.jsx';
import { CodeLines, ConsoleIconButton } from './ApiConsoleTemplate.jsx';
import { usePageAddenda } from './PageAddendaContext.jsx';

export function DocLink({ href = '', children, ...props }) {
  if (!href || isExternalHref(href) || isHashOnly(href)) {
    return <a href={href} {...props}>{children}</a>;
  }
  return <Link to={toPath(href)} {...props}>{children}</Link>;
}

export function Helpful({ updated }) {
  const [submitted, setSubmitted] = useState(false);
  const pageAddenda = usePageAddenda();
  return (
    <>
      {pageAddenda}
      <div className="helpful">
        {submitted ? (
          <span style={{ color: 'var(--green)', fontWeight: 600 }}>Thanks for the feedback!</span>
        ) : (
          <>
            Was this page helpful?
            <button onClick={() => setSubmitted(true)}>Yes</button>
            <button onClick={() => setSubmitted(true)}>Not really</button>
          </>
        )}
        {updated && <span className="updated">{updated}</span>}
      </div>
    </>
  );
}

function setDeep(object, fieldPath, value) {
  const keys = fieldPath.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = object;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
      return;
    }
    if (!(key in current)) current[key] = /^\d+$/.test(keys[index + 1]) ? [] : {};
    current = current[key];
  });
}

function splitStatus(status) {
  const match = String(status).match(/^(\S+)\s*(.*)$/);
  return { code: match?.[1] || status, label: match?.[2] || '' };
}

function bodyFromFields(fields = []) {
  const result = {};
  fields.forEach((field) => {
    const key = field.k.replace(/ \(.*\)$/, '');
    const rawValue = String(field.v ?? '');
    let value = rawValue;
    if (/^-?\d+(\.\d+)?$/.test(rawValue)) value = Number(rawValue);
    else if (rawValue === 'true') value = true;
    else if (rawValue === 'false') value = false;
    else if (rawValue === 'null') value = null;
    else if (/^[\[{]/.test(rawValue)) {
      try {
        value = JSON.parse(rawValue);
      } catch {
        value = rawValue;
      }
    }
    setDeep(result, key, value);
  });
  return result;
}

function displayResponseBody(body) {
  if (body === undefined || body === null || body === '') return '';
  return typeof body === 'string' ? body : JSON.stringify(body, null, 2);
}

function parseBody(text) {
  if (!text) return '';
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function endpointLabel(value) {
  try {
    const target = new URL(value);
    return `${target.pathname}${target.search}`;
  } catch {
    return value;
  }
}

export function TryIt({ method = 'POST', url = '/', config = {} }) {
  const cleanUrl = url.split('·')[0].trim();
  const fullUrl = `${TENANT.domains.apiBase.replace(/\/$/, '')}/${cleanUrl.replace(/^\//, '')}`;
  const placement = brandIdPlacement({
    method,
    url: cleanUrl,
    fields: config.fields,
    brandIdHeader: config.brandIdHeader,
  });
  const body = bodyFromFields(fieldsForBrandIdPlacement(config.fields, placement));
  const defaultCurl = buildCurl({
    method,
    url: fullUrl,
    headers: [
      ['Content-Type', 'application/json'],
      ['Authorization', 'Bearer YOUR_API_KEY'],
      ...(placement.header ? [['BrandId', 'YOUR_BRAND_ID']] : []),
    ],
    ...(!['GET', 'HEAD'].includes(method.toUpperCase()) ? { body } : {}),
  });

  const [language, setLanguage] = useState('curl');
  const [curlDraft, setCurlDraft] = useState(defaultCurl);
  const [responseIndex, setResponseIndex] = useState(0);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [responseMenuOpen, setResponseMenuOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [expanded, setExpanded] = useState('');
  const [sending, setSending] = useState(false);
  const [liveResponse, setLiveResponse] = useState(null);
  const [copied, setCopied] = useState('');

  const parsedDraft = useMemo(() => {
    try {
      return { request: parseCurl(curlDraft), error: '' };
    } catch (error) {
      return { request: null, error: error.message };
    }
  }, [curlDraft]);

  const responses = useMemo(() => {
    const result = [];
    if (config.response !== undefined || config.status) {
      result.push({ status: config.status || '202 Accepted', body: config.response || {}, error: false });
    }
    if (config.errorResponse !== undefined || config.errorStatus) {
      result.push({
        status: config.errorStatus || '400 Bad Request',
        body: config.errorResponse || { message: 'descriptive error message', code: 'error_code' },
        error: true,
      });
    }
    return result;
  }, [config]);

  const exampleResponse = responses[responseIndex];
  const selected = liveResponse || exampleResponse;
  const visibleCode =
    language === 'curl'
      ? curlDraft
      : parsedDraft.request
        ? requestCode(language, parsedDraft.request)
        : `Fix the cURL request to generate the ${language === 'js' ? 'JavaScript' : 'Python'} example.\n\n${parsedDraft.error}`;

  const setRequestError = (status, message) => {
    setLiveResponse({
      status,
      body: { error: message },
      headers: {},
      error: true,
      duration: null,
    });
  };

  const send = async () => {
    setSending(true);
    setLanguageMenuOpen(false);
    setResponseMenuOpen(false);
    let timeoutId;
    try {
      const request = parseCurl(curlDraft);
      const placeholders = requestPlaceholders(request);
      if (placeholders.length) {
        setRequestError(
          'INVALID REQUEST',
          `Replace these placeholders before running the request: ${placeholders.join(', ')}`
        );
        return;
      }

      const target = new URL(request.url);
      const apiOrigin = new URL(TENANT.domains.apiBase).origin;
      if (
        target.origin !== apiOrigin &&
        !window.confirm(
          `This request will send its headers and body to ${target.origin}, which is outside the configured Paysecure API origin. Continue?`
        )
      ) {
        return;
      }

      const controller = new AbortController();
      timeoutId = window.setTimeout(() => controller.abort(), request.timeoutMs);
      const startedAt = performance.now();
      const response = await fetch(request.url, {
        method: request.method,
        headers: request.headers,
        ...(!['GET', 'HEAD'].includes(request.method) && request.body !== undefined
          ? { body: request.body }
          : {}),
        mode: 'cors',
        credentials: 'omit',
        redirect: 'follow',
        signal: controller.signal,
      });
      const responseText = await response.text();
      const duration = Math.round(performance.now() - startedAt);
      setLiveResponse({
        status: `${response.status} ${response.statusText}`.trim(),
        body: parseBody(responseText),
        headers: Object.fromEntries(response.headers.entries()),
        error: !response.ok,
        duration,
      });
    } catch (error) {
      const timedOut = error.name === 'AbortError';
      setRequestError(
        timedOut ? 'REQUEST TIMEOUT' : 'NETWORK ERROR',
        timedOut
          ? 'The API did not respond before the cURL timeout expired.'
          : `The browser could not complete the request. Check the URL, connection and API CORS policy. ${error.message || ''}`.trim()
      );
    } finally {
      if (timeoutId) window.clearTimeout(timeoutId);
      setSending(false);
    }
  };

  const copy = async (value, target) => {
    if (navigator.clipboard) await navigator.clipboard.writeText(value);
    setCopied(target);
    window.setTimeout(() => setCopied(''), 1500);
  };

  const reset = () => {
    setCurlDraft(defaultCurl);
    setLanguage('curl');
    setEditing(false);
    setLiveResponse(null);
  };

  const shownMethod = parsedDraft.request?.method || method.toUpperCase();
  const shownUrl = parsedDraft.request?.url || fullUrl;
  const shownEndpoint = endpointLabel(shownUrl);
  const selectedStatus = selected ? splitStatus(selected.status) : null;
  const responseHeaders = liveResponse ? Object.entries(liveResponse.headers || {}) : [];

  return (
    <div className="explorer try-it">
      <div className={`api-template-shell api-live-console${expanded ? ` is-expanded expanded-${expanded}` : ''}`}>
        {expanded && (
          <button type="button" className="api-template-backdrop" aria-label="Close expanded API panel" onClick={() => setExpanded('')} />
        )}

        <section
          className={`api-template-card request${expanded === 'request' ? ' expanded' : ''}`}
          data-request-curl={defaultCurl}
        >
          <header className="api-template-toolbar">
            <div className="api-template-endpoint">
              <span className="api-template-method">{shownMethod}</span>
              <span title={shownUrl}>{shownEndpoint}</span>
            </div>
            <div className="api-template-actions">
              <button type="button" className="api-template-run" onClick={send} disabled={sending}>
                {sending ? 'Running…' : liveResponse ? 'Run again' : 'Try it now'}
              </button>
              <div className="api-template-language">
                <button
                  type="button"
                  className="api-template-language-trigger"
                  aria-haspopup="listbox"
                  aria-expanded={languageMenuOpen}
                  onClick={() => setLanguageMenuOpen((open) => !open)}
                >
                  {language === 'curl' ? 'cURL' : language === 'js' ? 'JavaScript' : 'Python'}
                  <Icon name="chevron-down" />
                </button>
                {languageMenuOpen && (
                  <div className="api-template-language-menu" role="listbox" aria-label="Request language">
                    {[
                      ['curl', 'cURL', '>_'],
                      ['js', 'JavaScript', 'JS'],
                      ['py', 'Python', 'Py'],
                    ].map(([value, label, mark]) => (
                      <button
                        type="button"
                        role="option"
                        aria-selected={language === value}
                        className={language === value ? 'selected' : undefined}
                        key={value}
                        onClick={() => {
                          setLanguage(value);
                          setEditing(false);
                          setLanguageMenuOpen(false);
                        }}
                      >
                        <span className="api-template-language-mark" aria-hidden="true">{mark}</span>
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <ConsoleIconButton
                label={editing ? 'Preview request' : 'Edit complete cURL request'}
                onClick={() => {
                  if (!editing) setLanguage('curl');
                  setEditing((value) => !value);
                }}
              >
                <Icon name={editing ? 'eye' : 'edit'} />
              </ConsoleIconButton>
              <ConsoleIconButton label="Copy request" onClick={() => copy(visibleCode, 'request')}>
                {copied === 'request' ? '✓' : <Icon name="copy" />}
              </ConsoleIconButton>
              <ConsoleIconButton label="Reset request" onClick={reset}>
                <Icon name="rotate" />
              </ConsoleIconButton>
              <ConsoleIconButton
                label={expanded === 'request' ? 'Close expanded request' : 'Expand request'}
                onClick={() => setExpanded(expanded === 'request' ? '' : 'request')}
              >
                <Icon name={expanded === 'request' ? 'close' : 'expand'} />
              </ConsoleIconButton>
            </div>
          </header>
          <div className="api-template-request-body">
            {editing ? (
              <textarea
                aria-label="Editable cURL request"
                value={curlDraft}
                onChange={(event) => {
                  setCurlDraft(event.target.value);
                  setLiveResponse(null);
                }}
                spellCheck={false}
              />
            ) : (
              <CodeLines code={visibleCode} tone="dark" />
            )}
          </div>
          {parsedDraft.error && <div className="api-live-request-error">{parsedDraft.error}</div>}
        </section>

        <section className={`api-template-card response${expanded === 'response' ? ' expanded' : ''}`}>
          <header className="api-template-toolbar">
            <div className="api-template-response-title">
              <strong>Response JSON</strong>
              {selected && (
                <div className="api-live-status-selector">
                  <button
                    type="button"
                    className={`api-template-status${selected.error ? ' error' : ''}`}
                    aria-haspopup={!liveResponse && responses.length > 1 ? 'listbox' : undefined}
                    aria-expanded={!liveResponse && responses.length > 1 ? responseMenuOpen : undefined}
                    onClick={() => !liveResponse && responses.length > 1 && setResponseMenuOpen((open) => !open)}
                  >
                    {selectedStatus.code} {selectedStatus.label}
                    {!liveResponse && responses.length > 1 && <Icon name="chevron-down" />}
                  </button>
                  {!liveResponse && responses.length > 1 && responseMenuOpen && (
                    <div className="api-live-status-menu" role="listbox" aria-label="Documented response example">
                      {responses.map((response, index) => {
                        const status = splitStatus(response.status);
                        return (
                          <button
                            type="button"
                            role="option"
                            aria-selected={index === responseIndex}
                            className={index === responseIndex ? 'selected' : undefined}
                            key={`${response.status}-${index}`}
                            onClick={() => {
                              setResponseIndex(index);
                              setResponseMenuOpen(false);
                            }}
                          >
                            <span className={`api-template-status${response.error ? ' error' : ''}`}>{status.code}</span>
                            {status.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
              <span className="api-template-response-meta">
                {liveResponse
                  ? `Live response${liveResponse.duration === null ? '' : ` · ${liveResponse.duration} ms`}`
                  : selected
                    ? 'Documented example'
                    : sending
                      ? 'Waiting for response…'
                      : 'No documented response'}
              </span>
            </div>
            <div className="api-template-actions">
              <ConsoleIconButton label="Copy response" onClick={() => copy(selected ? displayResponseBody(selected.body) : '', 'response')}>
                {copied === 'response' ? '✓' : <Icon name="copy" />}
              </ConsoleIconButton>
              <ConsoleIconButton
                label={expanded === 'response' ? 'Close expanded response' : 'Expand response'}
                onClick={() => setExpanded(expanded === 'response' ? '' : 'response')}
              >
                <Icon name={expanded === 'response' ? 'close' : 'expand'} />
              </ConsoleIconButton>
            </div>
          </header>
          {responseHeaders.length > 0 && (
            <details className="api-live-response-headers">
              <summary>Response headers ({responseHeaders.length})</summary>
              <pre>{responseHeaders.map(([name, value]) => `${name}: ${value}`).join('\n')}</pre>
            </details>
          )}
          <div className={`api-template-response-body${selected?.error ? ' error' : ''}`} style={{ opacity: sending ? 0.45 : 1 }}>
            <CodeLines code={selected ? displayResponseBody(selected.body) : ''} tone="light" />
          </div>
        </section>
      </div>
    </div>
  );
}
