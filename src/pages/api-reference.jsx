import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiReferenceTreeDocument } from '../content/trees/api-reference.js';

export default function PageApiReference() {
  return <StructuredContent document={ApiReferenceTreeDocument} />;
}
