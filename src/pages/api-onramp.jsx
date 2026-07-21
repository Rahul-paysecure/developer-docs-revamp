import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiOnrampTreeDocument } from '../content/trees/api-onramp.js';

export default function PageApiOnramp() {
  return <StructuredContent document={ApiOnrampTreeDocument} />;
}
