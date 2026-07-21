import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiOpenbankingTreeDocument } from '../content/trees/api-openbanking.js';

export default function PageApiOpenbanking() {
  return <StructuredContent document={ApiOpenbankingTreeDocument} />;
}
