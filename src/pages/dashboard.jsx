import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashboardTreeDocument } from '../content/trees/dashboard.js';

export default function PageDashboard() {
  return <StructuredContent document={dashboardTreeDocument} />;
}
