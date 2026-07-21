import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { neosurfTreeDocument } from '../content/trees/neosurf.js';

export default function PageNeosurf() {
  return <StructuredContent document={neosurfTreeDocument} />;
}
