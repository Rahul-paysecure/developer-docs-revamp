import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiTransactionReportingTreeDocument } from '../content/trees/api-transaction-reporting.js';

export default function PageApiTransactionReporting() {
  return <StructuredContent document={ApiTransactionReportingTreeDocument} />;
}
