import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { productRecurringTreeDocument } from '../content/trees/product-recurring.js';

export default function PageProductRecurring() {
  return <StructuredContent document={productRecurringTreeDocument} />;
}
