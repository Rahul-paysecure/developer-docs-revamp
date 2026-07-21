import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { fawrypayTreeDocument } from '../content/trees/fawrypay.js';

export default function PageFawrypay() {
  return <StructuredContent document={fawrypayTreeDocument} />;
}
