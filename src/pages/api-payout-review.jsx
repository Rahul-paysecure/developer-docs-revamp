import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { ApiPayoutReviewTreeDocument } from '../content/trees/api-payout-review.js';

export default function PageApiPayoutReview() {
  return <StructuredContent document={ApiPayoutReviewTreeDocument} />;
}
