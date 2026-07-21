import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashGlobalBlockingDocument } from '../content/pages/dash-global-blocking.js';

export default function PageDashGlobalBlocking() {
  return <StructuredContent document={dashGlobalBlockingDocument} />;
}
