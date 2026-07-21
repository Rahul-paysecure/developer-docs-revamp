import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { productPreauthTreeDocument } from '../content/trees/product-preauth.js';

export default function PageProductPreauth() {
  return <StructuredContent document={productPreauthTreeDocument} />;
}
