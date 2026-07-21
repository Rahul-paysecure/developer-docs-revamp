import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEARCH } from 'virtual:tenant-docs';
import { toPath, isExternalHref } from '../utils/links.js';

export default function SearchModal({ open, onClose }) {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);

  const hits = useMemo(() => {
    const ql = q.trim().toLowerCase();
    if (!ql) return SEARCH.slice(0, 8);
    return SEARCH.filter(
      (i) => (i.t + ' ' + i.p).toLowerCase().indexOf(ql) !== -1
    );
  }, [q]);

  useEffect(() => {
    if (open) {
      setQ('');
      setSel(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
    }
  }, [open]);

  useEffect(() => setSel(0), [q]);

  const go = (href) => {
    onClose();
    if (isExternalHref(href)) {
      window.location.href = href;
    } else {
      navigate(toPath(href));
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') return onClose();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, hits.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    }
    if (e.key === 'Enter' && hits[sel]) {
      e.preventDefault();
      go(hits[sel].h);
    }
  };

  if (!open) return null;

  return (
    <div
      className="search-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="search-box">
        <input
          id="searchInput"
          ref={inputRef}
          placeholder="Search pages, endpoints, parameters…"
          autoComplete="off"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <div className="search-results" id="searchResults">
          {hits.length === 0 ? (
            <div className="none">No results for "{q}"</div>
          ) : (
            hits.map((i, n) => (
              <a
                key={i.h + n}
                href={toPath(i.h)}
                className={n === sel ? 'sel' : undefined}
                onMouseEnter={() => setSel(n)}
                onClick={(e) => {
                  e.preventDefault();
                  go(i.h);
                }}
              >
                <div className="st">{i.t}</div>
                <div className="sp">{i.p}</div>
              </a>
            ))
          )}
        </div>
        <div className="search-foot">
          <span>↵ open</span>
          <span>↑↓ navigate</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
