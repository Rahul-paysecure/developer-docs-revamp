import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { upiTreeDocument } from '../content/trees/upi.js';

export default function PageUpi() {
  return <StructuredContent document={upiTreeDocument} />;
}
