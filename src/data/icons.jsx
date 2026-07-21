import React from 'react';
import { ICON_NODES } from './iconNodes.jsx';

export function Icon({ name }) {
  const nodes = ICON_NODES[name] || ICON_NODES.file;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {nodes}
    </svg>
  );
}
