import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { cardsTreeDocument } from '../content/trees/cards.js';

export default function PageCards() {
  return <StructuredContent document={cardsTreeDocument} />;
}
