import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { errorsTreeDocument } from '../content/trees/errors.js';

export default function PageErrors() {
  return <StructuredContent document={errorsTreeDocument} />;
}
