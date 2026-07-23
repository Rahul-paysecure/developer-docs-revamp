import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { paymentMethodsDocument } from '../content/pages/payment-methods.js';

export default function PagePaymentMethods() {
  return <StructuredContent document={paymentMethodsDocument} />;
}
