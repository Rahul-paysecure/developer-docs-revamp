import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { achPayoutTreeDocument } from '../content/trees/ach-payout.js';

export default function PageAchPayout() {
  return <StructuredContent document={achPayoutTreeDocument} />;
}
