import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { indexTreeDocument } from '../content/trees/index.js';

export default function PageIndex() {
  return <StructuredContent document={indexTreeDocument} />;
}
