import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { mobilemoneyTreeDocument } from '../content/trees/mobilemoney.js';

export default function PageMobilemoney() {
  return <StructuredContent document={mobilemoneyTreeDocument} />;
}
