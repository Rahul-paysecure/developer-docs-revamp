import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiPixTreeDocument } from '../content/trees/api-pix.js';

export default function PageApiPix() {
  return <StructuredContent document={ApiPixTreeDocument} />;
}
