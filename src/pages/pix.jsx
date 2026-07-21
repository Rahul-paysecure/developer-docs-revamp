import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { pixTreeDocument } from '../content/trees/pix.js';

export default function PagePix() {
  return <StructuredContent document={pixTreeDocument} />;
}
