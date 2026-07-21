import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { openbankingTreeDocument } from '../content/trees/openbanking.js';

export default function PageOpenbanking() {
  return <StructuredContent document={openbankingTreeDocument} />;
}
