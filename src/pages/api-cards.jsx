import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiCardsTreeDocument } from '../content/trees/api-cards.js';

export default function PageApiCards() {
  return <StructuredContent document={ApiCardsTreeDocument} />;
}
