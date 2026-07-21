import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiCryptoTreeDocument } from '../content/trees/api-crypto.js';

export default function PageApiCrypto() {
  return <StructuredContent document={ApiCryptoTreeDocument} />;
}
