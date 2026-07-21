import React, { useMemo, useState } from 'react';
import { Icon } from '../data/icons.jsx';

const REQUESTS = {
  curl: `curl https://api.paysecure.net/api/v1/purchases \\
  -X POST \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "purchase": {
      "currency": "USD",
      "products": [{ "name": "Premium plan", "price": 49.00 }]
    },
    "brand_id": "YOUR_BRAND_ID",
    "merchantRef": "order-10045"
  }'`,
  javascript: `const response = await fetch(
  'https://api.paysecure.net/api/v1/purchases',
  {
    method: 'POST',
    headers: {
      Authorization: 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      purchase: {
        currency: 'USD',
        products: [{ name: 'Premium plan', price: 49.00 }]
      },
      brand_id: 'YOUR_BRAND_ID',
      merchantRef: 'order-10045'
    })
  }
);

const payment = await response.json();`,
  python: `import requests

response = requests.post(
    'https://api.paysecure.net/api/v1/purchases',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'purchase': {
            'currency': 'USD',
            'products': [{'name': 'Premium plan', 'price': 49.00}]
        },
        'brand_id': 'YOUR_BRAND_ID',
        'merchantRef': 'order-10045'
    }
)

payment = response.json()`,
};

const RESPONSE = `{
  "purchaseId": "69ce44f1b2dd73d0d148c7d5",
  "type": "purchase",
  "status": "CREATED",
  "merchantRef": "order-10045",
  "purchase": {
    "currency": "USD",
    "products": [
      {
        "name": "Premium plan",
        "quantity": 1,
        "price": 49.00
      }
    ],
    "total": 49.00
  },
  "checkout_url": "https://api.paysecure.net/payments/example-token/",
  "created_on": 1784547600
}`;

const LANGUAGES = [
  { id: 'curl', label: 'cURL', mark: '>_' },
  { id: 'javascript', label: 'JavaScript', mark: 'JS' },
  { id: 'python', label: 'Python', mark: 'Py' },
];

function tokenClass(token, rest) {
  if (/^https?:\/\//.test(token)) return 'url';
  if (/^['"]/.test(token)) return rest.trimStart().startsWith(':') ? 'key' : 'string';
  if (/^-{1,2}[A-Za-z]/.test(token)) return 'flag';
  if (/^(?:true|false|null)$/.test(token)) return 'literal';
  if (/^-?\d+(?:\.\d+)?$/.test(token)) return 'number';
  if (/^(?:curl|const|await|fetch|import|requests|response|JSON|stringify)$/.test(token)) return 'keyword';
  return '';
}

function HighlightedLine({ text }) {
  const matcher = /(https?:\/\/[^\s'",]+|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|--?[A-Za-z][\w-]*|-?\d+(?:\.\d+)?|\b(?:true|false|null|curl|const|await|fetch|import|requests|response|JSON|stringify)\b)/g;
  const parts = [];
  let cursor = 0;
  for (const match of text.matchAll(matcher)) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    const token = match[0];
    parts.push(
      <span className={`api-template-token ${tokenClass(token, text.slice(match.index + token.length))}`} key={`${match.index}-${token}`}>
        {token}
      </span>
    );
    cursor = match.index + token.length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

export function CodeLines({ code, tone }) {
  return (
    <div className={`api-template-lines ${tone}`}>
      {code.split('\n').map((line, index) => (
        <div className="api-template-line" key={`${index}-${line}`}>
          <span className="api-template-line-number" aria-hidden="true">{index + 1}</span>
          <code><HighlightedLine text={line || ' '} /></code>
        </div>
      ))}
    </div>
  );
}

export function ConsoleIconButton({ label, children, onClick }) {
  return (
    <button type="button" className="api-template-icon-button" aria-label={label} title={label} onClick={onClick}>
      {children}
    </button>
  );
}

export default function ApiConsoleTemplate() {
  const [language, setLanguage] = useState('curl');
  const [menuOpen, setMenuOpen] = useState(true);
  const [editing, setEditing] = useState(false);
  const [requestDrafts, setRequestDrafts] = useState(REQUESTS);
  const [copied, setCopied] = useState('');
  const [expanded, setExpanded] = useState('');
  const [running, setRunning] = useState(false);
  const [runLabel, setRunLabel] = useState('Documented example');

  const selectedLanguage = useMemo(
    () => LANGUAGES.find((item) => item.id === language) || LANGUAGES[0],
    [language]
  );

  const copy = async (value, target) => {
    if (navigator.clipboard) await navigator.clipboard.writeText(value);
    setCopied(target);
    window.setTimeout(() => setCopied(''), 1400);
  };

  const run = () => {
    setRunning(true);
    setMenuOpen(false);
    setRunLabel('Running request…');
    window.setTimeout(() => {
      setRunning(false);
      setRunLabel('Live response · 284 ms');
    }, 850);
  };

  return (
    <div className={`api-template-shell${expanded ? ` is-expanded expanded-${expanded}` : ''}`}>
      {expanded && <button className="api-template-backdrop" aria-label="Close expanded panel" onClick={() => setExpanded('')} />}

      <section className={`api-template-card request${expanded === 'request' ? ' expanded' : ''}`} aria-label="API request template">
        <header className="api-template-toolbar">
          <div className="api-template-actions">
            <button type="button" className="api-template-run" onClick={run} disabled={running}>
              {running ? 'Running…' : 'Try it now'}
            </button>
            <div className="api-template-language">
              <button
                type="button"
                className="api-template-language-trigger"
                aria-haspopup="listbox"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {selectedLanguage.label}<Icon name="chevron-down" />
              </button>
              {menuOpen && (
                <div className="api-template-language-menu" role="listbox" aria-label="Request language">
                  {LANGUAGES.map((item) => (
                    <button
                      type="button"
                      role="option"
                      aria-selected={item.id === language}
                      className={item.id === language ? 'selected' : undefined}
                      key={item.id}
                      onClick={() => {
                        setLanguage(item.id);
                        setEditing(false);
                        setMenuOpen(false);
                      }}
                    >
                      <span className="api-template-language-mark" aria-hidden="true">{item.mark}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <ConsoleIconButton label={editing ? 'Preview request' : 'Edit complete request'} onClick={() => setEditing((value) => !value)}>
              <Icon name={editing ? 'eye' : 'edit'} />
            </ConsoleIconButton>
            <ConsoleIconButton label="Copy request" onClick={() => copy(requestDrafts[language], 'request')}>
              {copied === 'request' ? '✓' : <Icon name="copy" />}
            </ConsoleIconButton>
            <ConsoleIconButton label={expanded === 'request' ? 'Close expanded request' : 'Expand request'} onClick={() => setExpanded(expanded === 'request' ? '' : 'request')}>
              <Icon name={expanded === 'request' ? 'close' : 'expand'} />
            </ConsoleIconButton>
          </div>
        </header>
        <div className="api-template-request-body">
          {editing ? (
            <textarea
              aria-label="Edit the complete API request"
              value={requestDrafts[language]}
              onChange={(event) => setRequestDrafts((drafts) => ({ ...drafts, [language]: event.target.value }))}
              spellCheck={false}
            />
          ) : (
            <CodeLines code={requestDrafts[language]} tone="dark" />
          )}
        </div>
      </section>

      <section className={`api-template-card response${expanded === 'response' ? ' expanded' : ''}`} aria-label="API response template">
        <header className="api-template-toolbar">
          <div className="api-template-response-title">
            <strong>Response JSON</strong>
            <span className="api-template-status">200 OK</span>
            <span className="api-template-response-meta">{runLabel}</span>
          </div>
          <div className="api-template-actions">
            <ConsoleIconButton label="Copy response" onClick={() => copy(RESPONSE, 'response')}>
              {copied === 'response' ? '✓' : <Icon name="copy" />}
            </ConsoleIconButton>
            <ConsoleIconButton label={expanded === 'response' ? 'Close expanded response' : 'Expand response'} onClick={() => setExpanded(expanded === 'response' ? '' : 'response')}>
              <Icon name={expanded === 'response' ? 'close' : 'expand'} />
            </ConsoleIconButton>
          </div>
        </header>
        <div className="api-template-response-body">
          <CodeLines code={RESPONSE} tone="light" />
        </div>
      </section>
    </div>
  );
}
