import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { guidesTreeDocument } from '../content/trees/guides.js';

export default function PageGuides() {
  return <StructuredContent document={guidesTreeDocument} />;
}
