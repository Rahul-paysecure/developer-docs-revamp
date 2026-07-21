import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashMerchantProfileDocument } from '../content/pages/dash-merchant-profile.js';

export default function PageDashMerchantProfile() {
  return <StructuredContent document={dashMerchantProfileDocument} />;
}
