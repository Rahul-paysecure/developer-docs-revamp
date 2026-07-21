import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { productReportingTreeDocument } from '../content/trees/product-reporting.js';

export default function PageProductReporting() {
  return <StructuredContent document={productReportingTreeDocument} />;
}
