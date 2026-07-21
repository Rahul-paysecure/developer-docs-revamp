import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { skrillTreeDocument } from '../content/trees/skrill.js';

export default function PageSkrill() {
  return <StructuredContent document={skrillTreeDocument} />;
}
