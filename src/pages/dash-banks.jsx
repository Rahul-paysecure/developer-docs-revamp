import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashBanksDocument } from '../content/pages/dash-banks.js';

export default function PageDashBanks() {
  return <StructuredContent document={dashBanksDocument} />;
}
