import { createDashboardDocument } from '../schema.js';

export const dashBalanceDocument = createDashboardDocument({
  slug: 'dash-balance',
  current: 'Balance',
  previous: { label: 'Global Blocking', href: '/dash-global-blocking' },
  next: { label: 'Brand Settings', href: '/dash-brand-settings' },
  blocks: [
    { id: 'title', type: 'heading', level: 1, text: 'Balance' },
    { id: 'lead', type: 'paragraph', className: 'lead', text: 'Track available funds per payment method, currency balances, and rolling reserve.' },
    { id: 'overview-title', type: 'heading', level: 2, anchor: 'overview', text: 'Overview' },
    { id: 'overview', type: 'paragraph', text: 'The Balance section tracks the available funds for each payment method. View balances in various currencies as well as the rolling reserve maintained for payouts and other charges.' },
    {
      id: 'balance-steps',
      type: 'list',
      ordered: true,
      items: [
        { id: 'login', text: 'Log in to your portal.' },
        { id: 'navigate', content: [{ id: 'prefix', text: 'In the side menu, click the ' }, { id: 'operations', text: 'Operations', bold: true }, { id: 'middle', text: ' module and select ' }, { id: 'balances', text: 'Balances', bold: true }, { id: 'suffix', text: '.' }] },
        { id: 'open', text: 'The Balance module opens, displaying your available funds.' },
        { id: 'select', text: 'Select the desired payment method for detailed views.' },
      ],
    },
    {
      id: 'balance-images',
      type: 'image',
      images: [
        { id: 'primary', src: '/assets/images/Screenshot_2025-05-16_at_6.24.26_PM-354a946f18aaab9b4c93d9204e991978.png', alt: 'Balance views' },
        { id: 'secondary', src: '/assets/images/Screenshot_2025-03-28_at_1.44.41_PM-bec31580f3924960fb261f53a93004dc.png', alt: 'Balance views' },
      ],
      caption: 'Figure 1 · Balance module',
    },
    {
      id: 'settlement-warning',
      type: 'callout',
      kind: 'warn',
      content: [
        { id: 'prefix', text: 'This module shows the balance accumulated from the start of your payins. The balance does ' },
        { id: 'not', text: 'not', bold: true },
        { id: 'suffix', text: ' update automatically upon merchant settlements.' },
      ],
    },
  ],
});
