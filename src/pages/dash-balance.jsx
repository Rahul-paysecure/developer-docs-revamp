import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashBalanceDocument } from '../content/pages/dash-balance.js';

export default function PageDashBalance() {
  return <StructuredContent document={dashBalanceDocument} />;
}
