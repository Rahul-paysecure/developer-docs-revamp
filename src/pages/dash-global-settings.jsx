import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashGlobalSettingsDocument } from '../content/pages/dash-global-settings.js';

export default function PageDashGlobalSettings() {
  return <StructuredContent document={dashGlobalSettingsDocument} />;
}
