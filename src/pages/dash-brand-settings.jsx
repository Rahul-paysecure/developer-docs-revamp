import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashBrandSettingsDocument } from '../content/pages/dash-brand-settings.js';

export default function PageDashBrandSettings() {
  return <StructuredContent document={dashBrandSettingsDocument} />;
}
