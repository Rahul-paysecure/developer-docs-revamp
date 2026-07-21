import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { virtualAccountsTreeDocument } from '../content/trees/virtual-accounts.js';

export default function PageVirtualAccounts() {
  return <StructuredContent document={virtualAccountsTreeDocument} />;
}
