import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from './Topbar.jsx';
import Sidenav from './Sidenav.jsx';
import Toc from './Toc.jsx';
import Footer from './Footer.jsx';
import SearchModal from './SearchModal.jsx';

export default function Layout({ page, navMode, noSide, noToc, children }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Global ⌘K / Ctrl-K to open search.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Keep <body> attributes in sync (parity with the prototype).
  useEffect(() => {
    document.body.setAttribute('data-page', page || '');
    document.body.setAttribute('data-nav', navMode || 'guides');
  }, [page, navMode]);

  // Close the mobile sidebar whenever we navigate.
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const shellClass =
    'shell' + (noSide ? ' no-side' : '') + (noToc ? ' no-toc' : '');

  return (
    <>
      <Topbar
        page={page}
        navMode={navMode}
        hasSide={!noSide}
        onBurger={() => setSidebarOpen((o) => !o)}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <div className={shellClass}>
        {!noSide && <Sidenav navMode={navMode} page={page} open={sidebarOpen} />}
        <main className="content">{children}</main>
        {!noToc && <Toc />}
      </div>
      <Footer />
    </>
  );
}
