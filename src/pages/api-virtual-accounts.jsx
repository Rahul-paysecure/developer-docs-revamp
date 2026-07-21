import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiVirtualAccountsTreeDocument } from '../content/trees/api-virtual-accounts.js';

export default function PageApiVirtualAccounts() {
  return <StructuredContent document={ApiVirtualAccountsTreeDocument} />;
}
