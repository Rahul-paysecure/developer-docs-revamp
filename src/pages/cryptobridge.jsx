import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { cryptobridgeTreeDocument } from '../content/trees/cryptobridge.js';

export default function PageCryptobridge() {
  return <StructuredContent document={cryptobridgeTreeDocument} />;
}
