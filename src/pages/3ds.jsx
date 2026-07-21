import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { page3dsTreeDocument } from '../content/trees/3ds.js';

export default function Page3ds() {
  return <StructuredContent document={page3dsTreeDocument} />;
}
