import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { interacRequestMoneyTreeDocument } from '../content/trees/interac-request-money.js';

export default function PageInteracRequestMoney() {
  return <StructuredContent document={interacRequestMoneyTreeDocument} />;
}
