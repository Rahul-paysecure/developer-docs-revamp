import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { payWithCryptoTreeDocument } from '../content/trees/pay-with-crypto.js';

export default function PagePayWithCrypto() {
  return <StructuredContent document={payWithCryptoTreeDocument} />;
}
