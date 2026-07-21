import React from 'react';
import { TENANT } from '../tenant.js';

export default function Footer() {
  const d = TENANT.domains;
  const siteLabel = (d.site || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <footer className="sitefoot">
      <div className="sitefoot-inner">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
          {TENANT.logo.color ? (
            <>
              <img className="brand-logo lg-color" src={TENANT.logo.color} alt="" />
              <img className="brand-logo lg-white" src={TENANT.logo.white} alt="" />
            </>
          ) : null}
          <span className="brand-name" style={{ fontSize: '14px' }}>
            {TENANT.brand.name}
            <span>{TENANT.brand.nameAccent}</span>
          </span>
        </span>
        <nav>
          <a href={d.site} target="_blank" rel="noopener noreferrer">
            {siteLabel}
          </a>
          <a href={d.status} target="_blank" rel="noopener noreferrer">
            System status
          </a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href={'mailto:' + d.contactEmail}>Contact</a>
        </nav>
        <span className="copyright">
          © 2026 {TENANT.brand.name}
          {TENANT.brand.nameAccent}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
