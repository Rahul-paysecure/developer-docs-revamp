import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { onrampTreeDocument } from '../content/trees/onramp.js';

export default function PageOnramp() {
  return <StructuredContent document={onrampTreeDocument} />;
}
