import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { interacEtransferTreeDocument } from '../content/trees/interac-etransfer.js';

export default function PageInteracEtransfer() {
  return <StructuredContent document={interacEtransferTreeDocument} />;
}
