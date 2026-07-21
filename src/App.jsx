import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import DocPage from './components/DocPage.jsx';
// Tenant-filtered React page modules + metadata, generated at build time.
import { PAGE_COMPONENTS, PAGES } from 'virtual:tenant-docs';
import { slugToPath } from './utils/links.js';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        {Object.entries(PAGES).map(([slug, meta]) => {
          const Page = PAGE_COMPONENTS[slug];
          return (
            <Route
              key={slug}
              path={slugToPath(slug)}
              element={
                <DocPage slug={slug} meta={meta} Page={Page} />
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}
