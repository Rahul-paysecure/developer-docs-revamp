import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../data/icons.jsx';
import { TENANT } from '../tenant.js';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Topbar({ page, navMode, hasSide, onBurger, onOpenSearch }) {
  const { dark, toggle } = useTheme();
  const [logoFail, setLogoFail] = useState(false);

  const cls = (active) => (active ? 'active' : '');

  return (
    <header className="topbar">
      {hasSide && (
        <button className="nav-burger" aria-label="Menu" onClick={onBurger}>
          <Icon name="menu" />
        </button>
      )}
      <Link className={'brand' + (logoFail ? ' logo-fail' : '')} to="/">
        <img
          className="brand-logo lg-color"
          src={TENANT.logo.color}
          alt=""
          onError={() => setLogoFail(true)}
        />
        <img className="brand-logo lg-white" src={TENANT.logo.white} alt="" />
        <span className="brand-fallback">
          <span className="brand-mark">{TENANT.brand.mark}</span>
        </span>
        <span className="brand-name">
          {TENANT.brand.name}
          <span>{TENANT.brand.nameAccent}</span>
        </span>
        <span className="brand-docs">{TENANT.brand.docsLabel}</span>
      </Link>
      <nav className="topnav">
        <Link to="/" className={cls(page === 'index')}>
          Home
        </Link>
        <Link to="/guides" className={cls(navMode === 'guides' && page !== 'index')}>
          Guides
        </Link>
        <Link to="/api-reference" className={cls(navMode === 'api')}>
          API Reference
        </Link>
        <Link to="/dashboard" className={cls(navMode === 'dashboard')}>
          Dashboard
        </Link>
        <a href={TENANT.domains.status} target="_blank" rel="noopener noreferrer">
          System Status
        </a>
      </nav>
      <div className="topbar-right">
        <div className="search-pill" onClick={onOpenSearch}>
          <Icon name="search" /> Search docs… <kbd>⌘K</kbd>
        </div>
        <button
          className="theme-toggle"
          title="Toggle dark mode"
          aria-label="Toggle dark mode"
          onClick={toggle}
        >
          <Icon name={dark ? 'sun' : 'moon'} />
        </button>
        <a className="btn-dash" href="#">
          Dashboard ↗
        </a>
      </div>
    </header>
  );
}
