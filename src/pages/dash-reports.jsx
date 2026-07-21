import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashReportsTreeDocument } from '../content/trees/dash-reports.js';

export default function PageDashReports() {
  return <StructuredContent document={dashReportsTreeDocument} />;
}
