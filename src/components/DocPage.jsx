import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './Layout.jsx';
import EditablePageContent from './EditablePageContent.jsx';
import { useEnhancers } from '../hooks/useEnhancers.js';

function parseStyle(value) {
  if (!value) return undefined;
  const result = {};
  value.split(';').forEach((declaration) => {
    const separator = declaration.indexOf(':');
    if (separator < 0) return;
    const name = declaration.slice(0, separator).trim();
    const cssValue = declaration.slice(separator + 1).trim();
    if (!name || !cssValue) return;
    result[name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = cssValue;
  });
  return result;
}

export default function DocPage({ slug, meta, Page }) {
  const ref = useRef(null);
  const location = useLocation();

  useEnhancers(ref, slug);

  useEffect(() => {
    if (meta.title) document.title = meta.title;
  }, [meta.title]);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, slug]);

  return (
    <Layout page={slug} navMode={meta.navMode} noSide={meta.noSide} noToc={meta.noToc}>
      <div
        ref={ref}
        className={meta.innerClass || 'content-inner'}
        style={parseStyle(meta.innerStyle)}
      >
        <EditablePageContent key={slug} slug={slug} Page={Page} />
      </div>
    </Layout>
  );
}
