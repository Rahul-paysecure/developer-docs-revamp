import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { paymintTreeDocument } from '../content/trees/paymint.js';

export default function PagePaymint() {
  return <StructuredContent document={paymintTreeDocument} />;
}
