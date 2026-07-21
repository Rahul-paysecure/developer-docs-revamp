import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { thirdpartyUpiTreeDocument } from '../content/trees/thirdparty-upi.js';

export default function PageThirdpartyUpi() {
  return <StructuredContent document={thirdpartyUpiTreeDocument} />;
}
