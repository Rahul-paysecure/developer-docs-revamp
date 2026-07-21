import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { sandboxCredentialsTreeDocument } from '../content/trees/sandbox-credentials.js';

export default function PageSandboxCredentials() {
  return <StructuredContent document={sandboxCredentialsTreeDocument} />;
}
