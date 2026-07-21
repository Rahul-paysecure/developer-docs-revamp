import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiAchPayoutTreeDocument } from '../content/trees/api-ach-payout.js';

export default function PageApiAchPayout() {
  return <StructuredContent document={ApiAchPayoutTreeDocument} />;
}
