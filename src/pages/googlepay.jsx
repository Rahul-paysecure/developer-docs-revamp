import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { googlepayTreeDocument } from '../content/trees/googlepay.js';

export default function PageGooglepay() {
  return <StructuredContent document={googlepayTreeDocument} />;
}
