import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { speiTreeDocument } from '../content/trees/spei.js';

export default function PageSpei() {
  return <StructuredContent document={speiTreeDocument} />;
}
