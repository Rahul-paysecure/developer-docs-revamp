import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { productCashierTreeDocument } from '../content/trees/product-cashier.js';

export default function PageProductCashier() {
  return <StructuredContent document={productCashierTreeDocument} />;
}
