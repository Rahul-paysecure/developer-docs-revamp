import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTENT_SAVED_EVENT } from '../content/contentRepository.js';

// Rebuilds the "On this page" list from the h2[id] headings in the rendered
// content, then highlights the current section on scroll (ported from app.js).
export default function Toc() {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    let hs = [];
    const rebuild = () => {
      hs = Array.from(document.querySelectorAll('.content h2[id]'));
      setItems(hs.map((h) => ({ id: h.id, text: h.textContent })));
    };
    rebuild();

    if (!hs.length) return;
    const spy = () => {
      let cur = hs[0];
      hs.forEach((h) => {
        if (h.getBoundingClientRect().top < 120) cur = h;
      });
      setActiveId(cur ? cur.id : null);
    };
    spy();
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener(CONTENT_SAVED_EVENT, rebuild);
    return () => {
      window.removeEventListener('scroll', spy);
      window.removeEventListener(CONTENT_SAVED_EVENT, rebuild);
    };
  }, [location.pathname]);

  if (!items.length) return <aside id="toc" className="toc" />;

  return (
    <aside id="toc" className="toc">
      <div className="toc-label">On this page</div>
      {items.map((it) => (
        <a
          key={it.id}
          href={'#' + it.id}
          className={it.id === activeId ? 'on' : undefined}
        >
          {it.text}
        </a>
      ))}
    </aside>
  );
}
