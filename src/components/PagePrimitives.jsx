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
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [liveResponse, setLiveResponse] = useState(null);
  const [copied, setCopied] = useState(false);

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
    setMenuOpen(false);
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

  const copy = async () => {
    if (navigator.clipboard) await navigator.clipboard.writeText(visibleCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const reset = () => {
    setCurlDraft(defaultCurl);
    setLanguage('curl');
    setLiveResponse(null);
  };

  const shownMethod = parsedDraft.request?.method || method.toUpperCase();
  const shownUrl = parsedDraft.request?.url || fullUrl;
  const selectedStatus = selected ? splitStatus(selected.status) : null;
  const responseHeaders = liveResponse ? Object.entries(liveResponse.headers || {}) : [];

  return (
    <div className="explorer try-it">
      <div className="explorer-head">
        <div className="code-tabs xtabs">
          {[
            ['curl', 'cURL'],
            ['js', 'JavaScript'],
            ['py', 'Python'],
          ].map(([value, label]) => (
            <button
              key={value}
              className={language === value ? 'on' : undefined}
              onClick={() => setLanguage(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <button className="x-copy" title="Copy request" onClick={copy}>
          {copied ? '✓ Copied' : '⧉ Copy'}
        </button>
        <button className="x-copy" title="Reset request" onClick={reset}>
          ↺ Reset
        </button>
        <button className="btn-send" onClick={send} disabled={sending}>
          {sending ? 'Running…' : liveResponse ? '▶ Run again' : '▶ Try It Now'}
        </button>
      </div>
      <div className="explorer-body">
        <div className="explorer-req">
          <div className="fl">
            <span className={`method ${shownMethod.toLowerCase() === 'get' ? 'get' : 'post'}`}>
              {shownMethod}
            </span>
            <span className="xurl">{shownUrl}</span>
          </div>
          {language === 'curl' ? (
            <textarea
              className="req-editor"
              aria-label="Editable cURL request"
              value={curlDraft}
              onChange={(event) => {
                setCurlDraft(event.target.value);
                setLiveResponse(null);
              }}
              rows={14}
              spellCheck={false}
            />
          ) : (
            <pre className="req-preview">{visibleCode}</pre>
          )}
          <div className="req-note">
            Edit the complete cURL command—method, URL, headers and body. It runs directly from
            this browser; credentials are kept only in this tab and are not stored.
          </div>
          {parsedDraft.error && <div className="req-error">{parsedDraft.error}</div>}
        </div>
        <div className="explorer-res">
          <div className="fl res-status">
            {selected ? (
              <div
                className={`res-select${!liveResponse && responses.length > 1 ? '' : ' one'}`}
                tabIndex={0}
                onClick={() =>
                  !liveResponse && responses.length > 1 && setMenuOpen((open) => !open)
                }
              >
                <span className="res-cur">
                  <span className={`res-code ${selected.error ? 'err' : 'ok'}`}>
                    {selectedStatus.code}
                  </span>
                  {selectedStatus.label}
                  <span className="res-meta">
                    {liveResponse
                      ? `Live${liveResponse.duration === null ? '' : ` · ${liveResponse.duration} ms`}`
                      : 'Documented example'}
                  </span>
                </span>
                {!liveResponse && responses.length > 1 && <span className="res-caret">▾</span>}
                {!liveResponse && responses.length > 1 && (
                  <div className="res-menu" hidden={!menuOpen}>
                    {responses.map((response, index) => {
                      const status = splitStatus(response.status);
                      return (
                        <button
                          type="button"
                          className={index === responseIndex ? 'on' : undefined}
                          key={response.status}
                          onClick={(event) => {
                            event.stopPropagation();
                            setResponseIndex(index);
                            setMenuOpen(false);
                          }}
                        >
                          <span className={`res-code ${response.error ? 'err' : 'ok'}`}>
                            {status.code}
                          </span>
                          {status.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <span>{sending ? 'Waiting for response…' : 'Run the request to see its response'}</span>
            )}
          </div>
          {responseHeaders.length > 0 && (
            <details className="res-headers">
              <summary>Response headers ({responseHeaders.length})</summary>
              <pre>{responseHeaders.map(([name, value]) => `${name}: ${value}`).join('\n')}</pre>
            </details>
          )}
          <pre
            className="res-body"
            style={{
              color: selected?.error ? '#F8B4C0' : '#DCE3F5',
              opacity: sending ? 0.4 : 1,
            }}
          >
            {selected ? displayResponseBody(selected.body) : ''}
          </pre>
        </div>
      </div>
    </div>
  );
}
