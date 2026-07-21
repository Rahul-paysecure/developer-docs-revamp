import { createDashboardDocument } from '../schema.js';

export const dashBrandSettingsDocument = createDashboardDocument({
  slug: 'dash-brand-settings',
  current: 'Brand Settings',
  previous: { label: 'Balance', href: '/dash-balance' },
  next: { label: 'Utilities Module', href: '/dash-utilities' },
  blocks: [
    { id: 'title', type: 'heading', level: 1, text: 'Brand Settings' },
    { id: 'lead', type: 'paragraph', className: 'lead', text: 'Personalise the checkout experience, logo, favicon, checkout URL, and theme colours.' },
    { id: 'introduction', type: 'paragraph', text: "This module allows merchants to personalise and manage their customers' checkout experience through Paysecure. You can:" },
    {
      id: 'capabilities',
      type: 'list',
      items: [
        { id: 'logo', text: 'Upload a custom logo to display on the cashier page.' },
        { id: 'favicon', text: 'Set a favicon for the payment link.' },
        { id: 'url', text: 'Customise the checkout URL.' },
        { id: 'colours', text: 'Choose primary and secondary theme colours to match your brand.' },
      ],
    },
    { id: 'summary', type: 'paragraph', text: 'These options ensure a consistent, branded experience for your customers during the payment process.' },
    {
      id: 'brand-settings-image',
      type: 'image',
      src: '/assets/images/Screenshot_2025-05-19_at_5.52.00_PM-058d60582c2c95653b03cd4a5226d0c4.png',
      alt: 'Brand settings',
      caption: 'Figure 1 · Brand settings, checkout customisation',
    },
  ],
});
