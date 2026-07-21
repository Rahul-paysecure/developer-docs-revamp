import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { cards2dTreeDocument } from '../content/trees/cards-2d.js';

export default function PageCards2d() {
  return <StructuredContent document={cards2dTreeDocument} />;
}
