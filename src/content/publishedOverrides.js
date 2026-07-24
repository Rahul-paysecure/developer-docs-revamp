const modules = import.meta.glob('./overrides/*.json', {
  eager: true,
  import: 'default',
});

const overridesBySlug = Object.fromEntries(
  Object.entries(modules).map(([file, record]) => {
    const slug = file.split('/').pop().replace(/\.json$/, '');
    if (!record || record.schemaVersion !== 1 || record.slug !== slug) {
      throw new Error(`Invalid published content override: ${file}`);
    }
    return [slug, Object.freeze({ ...(record.changes || {}) })];
  })
);

export function getPublishedOverrides(slug) {
  return overridesBySlug[slug] || Object.freeze({});
}
