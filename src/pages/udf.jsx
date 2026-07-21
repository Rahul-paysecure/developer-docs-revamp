import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { udfTreeDocument } from '../content/trees/udf.js';

export default function PageUdf() {
  return <StructuredContent document={udfTreeDocument} />;
}
