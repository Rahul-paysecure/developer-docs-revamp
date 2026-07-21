import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiPaypalTreeDocument } from '../content/trees/api-paypal.js';

export default function PageApiPaypal() {
  return <StructuredContent document={ApiPaypalTreeDocument} />;
}
