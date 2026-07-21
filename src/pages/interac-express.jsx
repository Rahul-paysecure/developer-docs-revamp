import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { interacExpressTreeDocument } from '../content/trees/interac-express.js';

export default function PageInteracExpress() {
  return <StructuredContent document={interacExpressTreeDocument} />;
}
