import { createDashboardDocument } from '../schema.js';
import { labeledItem, rich } from './dashboard-content-helpers.js';

export const dashMerchantProfileDocument = createDashboardDocument({
  slug: 'dash-merchant-profile', current: 'Merchant Profile',
  previous: { label: 'Manage Roles', href: '/dash-manage-roles' }, next: { label: 'Banks', href: '/dash-banks' },
  blocks: [
    { id: 'title', type: 'heading', level: 1, text: 'Merchant Profile' },
    { id: 'lead', type: 'paragraph', className: 'lead', text: 'View and configure processing settings per merchant, currencies, payment methods, limits, charges and MDR.' },
    { id: 'configuration-title', type: 'heading', level: 2, anchor: 'configuration', text: 'Merchant Configuration (White-Label Admin Guide)' },
    { id: 'configuration', type: 'paragraph', text: 'As a white-label admin, you have full access to view and configure processing settings for any of your merchants, allowed currencies, payment methods, and other key configurations.' },
    { id: 'merchant-profile-image', type: 'image', src: '/assets/images/Screenshot_2025-05-16_at_6.04.40_PM-4b7b4bca261b6db6a05f482a6eb78dc4.png', alt: 'Merchant Profile', caption: 'Figure 1 · Merchant Profile module' },
    { id: 'viewing-title', type: 'heading', level: 2, anchor: 'viewing', text: 'Viewing Merchant Details' },
    { id: 'viewing-steps', type: 'list', ordered: true, items: [
      { id: 'select', text: 'Select the desired merchant from the dropdown menu.' },
      { id: 'display', text: "The selected merchant's profile and configuration settings are displayed." },
    ] },
    { id: 'details-intro', type: 'paragraph', content: rich(['prefix', 'The '], ['details', 'Merchant Details', 'bold'], ['suffix', ' section provides:']) },
    { id: 'detail-options', type: 'list', items: [
      labeledItem('merchant-details', 'Merchant Details', ': general information and business details.'),
      labeledItem('payment-methods', 'Allowed Payment Methods', ': configure which payment methods are enabled for the merchant.'),
      labeledItem('estimation', 'Profile Estimation Data', ": analytics and projected data related to the merchant's activity."),
      labeledItem('documents', 'Download Documents', ': access documentation uploaded by or for the merchant.'),
      labeledItem('services', 'Allowed Services', ': manage which services the merchant may access.'),
      labeledItem('currency', 'Allowed Currency', ': set the currencies the merchant can transact in.'),
      labeledItem('descriptor', 'Allowed Descriptor', ": configure the descriptors that appear on customers' statements."),
      labeledItem('qbpay', 'QBPay Signup', ": manage or initiate the merchant's signup for QBPay."),
    ] },
    { id: 'limits-title', type: 'heading', level: 2, anchor: 'limits', text: 'Limits and Charges Configuration' },
    { id: 'limits-intro', type: 'paragraph', text: 'The Limits and Charges module lets white-label admins define transaction and fee rules per merchant.' },
    { id: 'limits-steps', type: 'list', ordered: true, items: [
      { id: 'merchant', content: rich(['prefix', 'Select the '], ['merchant', 'Merchant Name', 'bold'], ['suffix', '.']) },
      { id: 'configuration', content: rich(['prefix', 'Choose the relevant '], ['currency', 'Currency', 'bold'], ['and', ' and '], ['method', 'Payment Method', 'bold'], ['suffix', '.']) },
      { id: 'get', content: rich(['prefix', 'Click '], ['get', 'Get', 'bold'], ['suffix', ' to load the configuration.']) },
    ] },
    { id: 'settings-intro', type: 'paragraph', text: 'Once loaded, you can set:' },
    { id: 'settings', type: 'list', items: [
      labeledItem('transaction-limits', 'Transaction limits', ': maximum number of transactions allowed.'),
      labeledItem('amount-limits', 'Amount limits', ': minimum and maximum transaction amounts.'),
      labeledItem('fees', 'Fees and charges', ': fixed or percentage-based fees.'),
      labeledItem('mdr', 'MDR (Merchant Discount Rate)', ': the MDR applicable for the selected merchant.'),
    ] },
    { id: 'summary', type: 'paragraph', text: 'This ensures tailored configurations for each merchant under your white-label account.' },
  ],
});
