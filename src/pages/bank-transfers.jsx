import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { bankTransfersTreeDocument } from '../content/trees/bank-transfers.js';

export default function PageBankTransfers() {
  return <StructuredContent document={bankTransfersTreeDocument} />;
}
