import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { payidTreeDocument } from '../content/trees/payid.js';

export default function PagePayid() {
  return <StructuredContent document={payidTreeDocument} />;
}
