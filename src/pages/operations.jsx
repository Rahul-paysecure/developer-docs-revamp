import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { operationsTreeDocument } from '../content/trees/operations.js';

export default function PageOperations() {
  return <StructuredContent document={operationsTreeDocument} />;
}
