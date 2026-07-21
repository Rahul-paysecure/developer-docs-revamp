export const rich = (...runs) => runs.map(([id, text, style]) => ({ id, text, ...(style ? { [style]: true } : {}) }));

export const labeledItem = (id, label, description) => ({
  id,
  content: rich(['label', label, 'bold'], ['description', description]),
});
