import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiCashierTreeDocument } from '../content/trees/api-cashier.js';

export default function PageApiCashier() {
  return <StructuredContent document={ApiCashierTreeDocument} />;
}
