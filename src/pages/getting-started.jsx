import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { gettingStartedTreeDocument } from '../content/trees/getting-started.js';

export default function PageGettingStarted() {
  return <StructuredContent document={gettingStartedTreeDocument} />;
}
