import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashPayoutsDocument } from '../content/pages/dash-payouts.js';

export default function PageDashPayouts() {
  return <StructuredContent document={dashPayoutsDocument} />;
}
