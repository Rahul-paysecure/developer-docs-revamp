import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { SaveACardTreeDocument } from '../content/trees/save-a-card.js';

export default function PageSaveACard() {
  return <StructuredContent document={SaveACardTreeDocument} />;
}
