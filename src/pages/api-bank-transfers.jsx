import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiBankTransfersTreeDocument } from '../content/trees/api-bank-transfers.js';

export default function PageApiBankTransfers() {
  return <StructuredContent document={ApiBankTransfersTreeDocument} />;
}
