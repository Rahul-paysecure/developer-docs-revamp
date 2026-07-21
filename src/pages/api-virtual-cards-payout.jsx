import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiVirtualCardsPayoutTreeDocument } from '../content/trees/api-virtual-cards-payout.js';

export default function PageApiVirtualCardsPayout() {
  return <StructuredContent document={ApiVirtualCardsPayoutTreeDocument} />;
}
