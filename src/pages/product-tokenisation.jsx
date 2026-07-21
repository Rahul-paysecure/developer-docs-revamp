import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { productTokenisationTreeDocument } from '../content/trees/product-tokenisation.js';

export default function PageProductTokenisation() {
  return <StructuredContent document={productTokenisationTreeDocument} />;
}
