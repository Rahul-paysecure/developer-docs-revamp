import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiTrustScoreTreeDocument } from '../content/trees/api-trust-score.js';

export default function PageApiTrustScore() {
  return <StructuredContent document={ApiTrustScoreTreeDocument} />;
}
