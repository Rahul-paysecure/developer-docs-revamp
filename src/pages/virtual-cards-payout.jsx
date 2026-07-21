import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { virtualCardsPayoutTreeDocument } from '../content/trees/virtual-cards-payout.js';

export default function PageVirtualCardsPayout() {
  return <StructuredContent document={virtualCardsPayoutTreeDocument} />;
}
