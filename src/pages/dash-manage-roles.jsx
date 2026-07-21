import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { dashManageRolesDocument } from '../content/pages/dash-manage-roles.js';

export default function PageDashManageRoles() {
  return <StructuredContent document={dashManageRolesDocument} />;
}
