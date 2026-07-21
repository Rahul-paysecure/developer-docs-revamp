import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiSaveACardTreeDocument } from '../content/trees/api-save-a-card.js';

export default function PageApiSaveACard() {
  return <StructuredContent document={ApiSaveACardTreeDocument} />;
}
