import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { productPayoutsTreeDocument } from '../content/trees/product-payouts.js';

export default function PageProductPayouts() {
  return <StructuredContent document={productPayoutsTreeDocument} />;
}
