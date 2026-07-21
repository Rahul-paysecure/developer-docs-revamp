import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { productPaymentsTreeDocument } from '../content/trees/product-payments.js';

export default function PageProductPayments() {
  return <StructuredContent document={productPaymentsTreeDocument} />;
}
