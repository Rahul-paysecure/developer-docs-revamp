import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { webhooksTreeDocument } from '../content/trees/webhooks.js';

export default function PageWebhooks() {
  return <StructuredContent document={webhooksTreeDocument} />;
}
