import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { quickstartTreeDocument } from '../content/trees/quickstart.js';

export default function PageQuickstart() {
  return <StructuredContent document={quickstartTreeDocument} />;
}
