import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { paymentMethodsTreeDocument } from '../content/trees/payment-methods.js';

export default function PagePaymentMethods() {
  return <StructuredContent document={paymentMethodsTreeDocument} />;
}
