// Normalises an internal documentation link into a React Router path.

export function isExternalHref(href) {
  if (!href) return true;
  return (
    /^(https?:)?\/\//i.test(href) ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  );
}

// A bare "#" or "#section" link stays on the current page.
export function isHashOnly(href) {
  return typeof href === 'string' && href.startsWith('#');
}

export function toPath(href) {
  if (!href || isExternalHref(href)) return href;
  if (isHashOnly(href)) return href;
  if (href.startsWith('/')) return href;
  const [file, hash] = href.split('#');
  const pathname = file === 'index' || file === '' ? '/' : '/' + file;
  return hash ? `${pathname}#${hash}` : pathname;
}

export const slugToPath = (slug) => (slug === 'index' ? '/' : '/' + slug);
