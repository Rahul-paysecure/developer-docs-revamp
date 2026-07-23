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

function readClosedState(navMode, groupKey, defaultClosed = false) {
  if (typeof window === 'undefined') return defaultClosed;
  try {
    const saved = JSON.parse(window.localStorage.getItem(SIDENAV_STATE_KEY) || '{}');
    const modeState = saved[navMode] || {};
    return Object.prototype.hasOwnProperty.call(modeState, groupKey)
      ? Boolean(modeState[groupKey])
      : defaultClosed;
  } catch {
    return defaultClosed;
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

function CollapsibleSubcategory({ label, nodes, currentSlug, navMode, stateKey, renderNode }) {
  const [closed, setClosed] = useState(() => readClosedState(navMode, stateKey, true));

  const toggleClosed = () => {
    setClosed((current) => {
      const next = !current;
      saveClosedState(navMode, stateKey, next);
      return next;
    });
  };

  return (
    <div className={`nav-subcategory-group${closed ? ' closed' : ''}`}>
      <button
        type="button"
        className="nav-subcategory-toggle"
        aria-expanded={!closed}
        onClick={toggleClosed}
      >
        <span>{label}</span>
        <span className="tw" aria-hidden="true">▼</span>
      </button>
      <div className="nav-subcategory-items">
        {nodes.map((node) => renderNode(node, currentSlug))}
      </div>
    </div>
  );
}

function CollapsibleCategory({ label, active, navMode, stateKey, children }) {
  const [closed, setClosed] = useState(() => readClosedState(navMode, stateKey, !active));

  const toggleClosed = () => {
    setClosed((current) => {
      const next = !current;
      saveClosedState(navMode, stateKey, next);
      return next;
    });
  };

  return (
    <div className={`nav-category-group${closed ? ' closed' : ''}`}>
      <button
        type="button"
        className="nav-category-toggle"
        aria-expanded={!closed}
        onClick={toggleClosed}
      >
        <span>{label}</span>
        <span className="tw" aria-hidden="true">▼</span>
      </button>
      <div className="nav-category-items">{children}</div>
    </div>
  );
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

  const renderNode = (node, activeSlug = currentSlug, showAllSubs = false) => {
    const parentPath = toPath(node.it.h).split('#')[0];
    const open =
      parentPath === slugToPath(activeSlug) ||
      node.subs.some((s) => toPath(s.h).split('#')[0] === slugToPath(activeSlug));
    return (
      <React.Fragment key={node.it.t + node.it.h}>
        <NavLink item={node.it} currentSlug={activeSlug} isSub={false} />
        {node.subs.length > 0 &&
          (open || showAllSubs) &&
          node.subs.map((s) => (
            <NavLink key={s.t + s.h} item={s} currentSlug={activeSlug} isSub={true} />
          ))}
      </React.Fragment>
    );
  };

  const renderTree = (items) => {
    let category = null;
    let subcategory = null;
    const sections = [];

    buildTree(items).forEach((node) => {
      if (node.it.category) {
        category = node.it.category;
        subcategory = null;
      }
      if (node.it.subcategory) subcategory = node.it.subcategory;
      const previous = sections[sections.length - 1];
      if (!previous || previous.category !== category || previous.subcategory !== subcategory) {
        sections.push({ category, subcategory, nodes: [node] });
      } else {
        previous.nodes.push(node);
      }
    });

    const sectionIsActive = (section) =>
      section.nodes.some((node) => {
        const activePath = slugToPath(currentSlug);
        return (
          toPath(node.it.h).split('#')[0] === activePath ||
          node.subs.some((sub) => toPath(sub.h).split('#')[0] === activePath)
        );
      });

    const renderSection = (section, keyPrefix, showAllSubs = false) => {
      if (section.category === 'APMs' && section.subcategory) {
        return (
          <CollapsibleSubcategory
            key={`${keyPrefix}-${section.subcategory}`}
            label={section.subcategory}
            nodes={section.nodes}
            currentSlug={currentSlug}
            navMode={navMode}
            stateKey={`${groupKey}::${section.category}::${section.subcategory}`}
            renderNode={renderNode}
          />
        );
      }
      return section.nodes.map((node) => renderNode(node, currentSlug, showAllSubs));
    };

    if (group.collapsibleCategories) {
      const categories = [];
      sections.forEach((section) => {
        const previous = categories[categories.length - 1];
        if (!previous || previous.category !== section.category) {
          categories.push({ category: section.category, sections: [section] });
        } else {
          previous.sections.push(section);
        }
      });
      return categories.map((category) => (
        <CollapsibleCategory
          key={`category-${category.category}`}
          label={category.category}
          active={category.sections.some(sectionIsActive)}
          navMode={navMode}
          stateKey={`${groupKey}::${category.category}`}
        >
          {category.sections.flatMap((section, index) =>
            renderSection(section, `category-${category.category}-${index}`, true)
          )}
        </CollapsibleCategory>
      ));
    }

    let previousCategory = null;
    return sections.flatMap((section) => {
      const parts = [];
      if (section.category && section.category !== previousCategory) {
        parts.push(
          <div className="nav-category" key={`category-${section.category}`}>
            {section.category}
          </div>
        );
        previousCategory = section.category;
      }

      if (section.category === 'APMs' && section.subcategory) {
        parts.push(renderSection(section, `subcategory-${section.category}`));
      } else {
        if (section.subcategory) {
          parts.push(
            <div className="nav-subcategory" key={`subcategory-${section.category}-${section.subcategory}`}>
              {section.subcategory}
            </div>
          );
        }
        parts.push(...section.nodes.map((node) => renderNode(node)));
      }
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
