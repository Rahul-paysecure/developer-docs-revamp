import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashboardConfigurationTreeDocument } from '../content/trees/dashboard-configuration.js';

export default function PageDashboardConfiguration() {
  return <StructuredContent document={dashboardConfigurationTreeDocument} />;
}
