import { createDashboardDocument } from '../schema.js';

const option = (id, label, description) => ({
  id,
  content: [
    { id: 'label', text: label, bold: true },
    { id: 'description', text: `: ${description}` },
  ],
});

export const dashGlobalBlockingDocument = createDashboardDocument({
  slug: 'dash-global-blocking',
  current: 'Global Blocking',
  previous: { label: 'Rule Engine', href: '/dash-rule-engine' },
  next: { label: 'Balance', href: '/dash-balance' },
  blocks: [
    { id: 'title', type: 'heading', level: 1, text: 'Global Blocking' },
    { id: 'lead', type: 'paragraph', className: 'lead', text: 'Block transactions by MID, BIN, card, customer profile, country, or IP address.' },
    { id: 'introduction', type: 'paragraph', text: 'This module enables merchants to block transactions based on specific criteria to enhance security and prevent fraudulent activity, by MID, BIN, card, customer profile, country, or IP address.' },
    {
      id: 'global-blocking-image',
      type: 'image',
      src: '/assets/images/Screenshot_2025-05-16_at_6.22.36_PM-86df091222e5c9d0ce85106649005df5.png',
      alt: 'Global Blocking',
      caption: 'Figure 1 · Global Blocking module',
    },
    { id: 'options-title', type: 'heading', level: 2, anchor: 'options', text: 'Blocking Options' },
    {
      id: 'blocking-options',
      type: 'list',
      items: [
        option('mid', 'MID (Merchant ID)', 'view all MIDs under your white-label account; block or unblock specific MIDs.'),
        option('bin', 'BIN (Bank Identification Number)', 'upload a list of BINs to block; transactions from cards with these BINs are rejected.'),
        option('card', 'Card', 'upload specific card numbers to block; useful for blacklisting known fraudulent cards.'),
        option('customer-profile', 'Customer Profile', 'block by Customer ID or email address.'),
        option('country', 'Country', 'block transactions originating from specific countries.'),
        option('ip-address', 'IP Address', 'block one or more IP addresses from suspicious or untrusted sources.'),
      ],
    },
    { id: 'summary', type: 'paragraph', text: 'This granular control helps protect your business from high-risk or fraudulent transaction attempts.' },
  ],
});
