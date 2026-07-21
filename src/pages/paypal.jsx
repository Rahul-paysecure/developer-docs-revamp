import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { paypalTreeDocument } from '../content/trees/paypal.js';

export default function PagePaypal() {
  return <StructuredContent document={paypalTreeDocument} />;
}
