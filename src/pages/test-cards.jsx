import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { testCardsTreeDocument } from '../content/trees/test-cards.js';

export default function PageTestCards() {
  return <StructuredContent document={testCardsTreeDocument} />;
}
