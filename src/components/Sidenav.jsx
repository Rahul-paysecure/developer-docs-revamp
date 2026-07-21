import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../data/icons.jsx';
import { NAV_BY_MODE } from 'virtual:tenant-docs';
import { toPath, isExternalHref, isHashOnly, slugToPath } from '../utils/links.js';

function NavLink({ item, currentSlug, isSub }) {
  const samePage = toPath(item.h).split('#')[0] === slugToPath(currentSlug);
  const active = samePage && item.h.indexOf('#') === -1;
  const cls = [active ? 'active' : '', isSub ? 'sub' : ''].filter(Boolean).join(' ');
  const inner = (
    <>
      <Icon name={item.i} />
      <span>{item.t}</span>
      {item.soon && <span className="soon">soon</span>}
    </>
  );

  if (isExternalHref(item.h) || isHashOnly(item.h)) {
    return (
      <a href={item.h} className={cls || undefined}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={toPath(item.h)} className={cls || undefined}>
      {inner}
    </Link>
  );
}

// Group items into parent nodes with their sub-items (mirrors app.js): an item
// with `sub: true` attaches to the previous top-level item.
function buildTree(items) {
  const tree = [];
  let lastTop = null;
  items.forEach((it) => {
    if (it.sub && lastTop) lastTop.subs.push(it);
    else {
      lastTop = { it, subs: [] };
      tree.push(lastTop);
    }
  });
  return tree;
}

const SIDENAV_STATE_KEY = 'ps-sidenav-closed-v1';

function readClosedState(navMode, groupKey) {
  if (typeof window === 'undefined') return false;
  try {
    const saved = JSON.parse(window.localStorage.getItem(SIDENAV_STATE_KEY) || '{}');
    return Boolean(saved[navMode]?.[groupKey]);
  } catch {
    return false;
  }
}

function saveClosedState(navMode, groupKey, closed) {
  if (typeof window === 'undefined') return;
  try {
    const saved = JSON.parse(window.localStorage.getItem(SIDENAV_STATE_KEY) || '{}');
    saved[navMode] = { ...(saved[navMode] || {}), [groupKey]: closed };
    window.localStorage.setItem(SIDENAV_STATE_KEY, JSON.stringify(saved));
  } catch {
    // The navigation still works when browser storage is unavailable.
  }
}

function NavGroup({ group, currentSlug, navMode, groupKey }) {
  const [closed, setClosed] = useState(() => readClosedState(navMode, groupKey));

  const toggleClosed = () => {
    setClosed((current) => {
      const next = !current;
      saveClosedState(navMode, groupKey, next);
      return next;
    });
  };

  const renderTree = (items) => {
    let previousCategory = null;
    let previousSubcategory = null;

    return buildTree(items).flatMap((node) => {
      const parts = [];
      if (node.it.category && node.it.category !== previousCategory) {
        parts.push(
          <div className="nav-category" key={`category-${node.it.category}`}>
            {node.it.category}
          </div>
        );
        previousCategory = node.it.category;
        previousSubcategory = null;
      }
      if (node.it.subcategory && node.it.subcategory !== previousSubcategory) {
        parts.push(
          <div className="nav-subcategory" key={`subcategory-${node.it.category}-${node.it.subcategory}`}>
            {node.it.subcategory}
          </div>
        );
        previousSubcategory = node.it.subcategory;
      }
      const parentPath = toPath(node.it.h).split('#')[0];
      const open =
        parentPath === slugToPath(currentSlug) ||
        node.subs.some((s) => toPath(s.h).split('#')[0] === slugToPath(currentSlug));
      parts.push(
        <React.Fragment key={node.it.t + node.it.h}>
          <NavLink item={node.it} currentSlug={currentSlug} isSub={false} />
          {node.subs.length > 0 &&
            open &&
            node.subs.map((s) => (
              <NavLink key={s.t + s.h} item={s} currentSlug={currentSlug} isSub={true} />
            ))}
        </React.Fragment>
      );
      return parts;
    });
  };

  if (group.solo) {
    return (
      <div className="nav-group solo">
        <div className="nav-items">{renderTree(group.items)}</div>
      </div>
    );
  }
  return (
    <div className={'nav-group' + (closed ? ' closed' : '')}>
      <button
        type="button"
        className="nav-label"
        aria-expanded={!closed}
        onClick={toggleClosed}
      >
        <span>{group.label}</span>
        <span className="tw" aria-hidden="true">▼</span>
      </button>
      <div className="nav-items">{renderTree(group.items)}</div>
    </div>
  );
}

export default function Sidenav({ navMode, page, open }) {
  const nav = NAV_BY_MODE[navMode] || NAV_BY_MODE.guides;
  useLocation(); // re-render on navigation so active states refresh
  return (
    <nav className={'sidenav' + (open ? ' open' : '')}>
      {nav.map((g, i) => {
        const groupKey = g.id || g.label || `solo-${i}`;
        return (
          <NavGroup
            key={groupKey}
            group={g}
            currentSlug={page}
            navMode={navMode}
            groupKey={groupKey}
          />
        );
      })}
    </nav>
  );
}
