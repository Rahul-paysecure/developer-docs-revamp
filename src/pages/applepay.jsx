import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { applepayTreeDocument } from '../content/trees/applepay.js';

export default function PageApplepay() {
  return <StructuredContent document={applepayTreeDocument} />;
}
