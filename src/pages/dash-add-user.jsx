import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashAddUserDocument } from '../content/pages/dash-add-user.js';

export default function PageDashAddUser() {
  return <StructuredContent document={dashAddUserDocument} />;
}
