import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiPartialRefundsTreeDocument } from '../content/trees/api-partial-refunds.js';

export default function PageApiPartialRefunds() {
  return <StructuredContent document={ApiPartialRefundsTreeDocument} />;
}
