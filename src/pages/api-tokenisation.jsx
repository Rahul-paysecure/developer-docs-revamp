import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiTokenisationTreeDocument } from '../content/trees/api-tokenisation.js';

export default function PageApiTokenisation() {
  return <StructuredContent document={ApiTokenisationTreeDocument} />;
}
