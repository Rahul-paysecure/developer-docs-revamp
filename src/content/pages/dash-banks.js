import { createDashboardDocument } from '../schema.js';
import { labeledItem, rich } from './dashboard-content-helpers.js';

const optionalItem = (id, label, description) => ({ id, content: rich(['label', label, 'bold'], ['space', ' '], ['optional', '(optional)', 'italic'], ['description', `: ${description}`]) });

export const dashBanksDocument = createDashboardDocument({
  slug: 'dash-banks', current: 'Banks',
  previous: { label: 'Merchant Profile', href: '/dash-merchant-profile' }, next: { label: 'Add User', href: '/dash-add-user' },
  blocks: [
    { id: 'title', type: 'heading', level: 1, text: 'Banks' },
    { id: 'lead', type: 'paragraph', className: 'lead', text: 'Banks connected to your white-label account, bank details, MID setups, and adding new MIDs.' },
    { id: 'overview-title', type: 'heading', level: 2, anchor: 'overview', text: 'Overview' },
    { id: 'overview', type: 'paragraph', text: 'The Bank menu displays all the banks connected to your white-label merchant account. For each bank you can view its name, activity status, and access options to see detailed bank information as well as the Merchant IDs (MIDs) associated with each bank.' },
    { id: 'bank-list-image', type: 'image', src: '/assets/images/Screenshot_2025-04-08_at_12.43.34_PM-626c81f3557bccbbae9afd1dd3b28d50.png', alt: 'Bank list', caption: 'Figure 1 · Bank menu, connected banks' },
    { id: 'bank-details-title', type: 'heading', level: 2, anchor: 'bank-details', text: 'Viewing Bank Details' },
    { id: 'bank-details', type: 'paragraph', content: rich(['prefix', 'Click the '], ['eye', 'eye icon', 'bold'], ['suffix', " next to any bank entry to view its detailed information. The Bank Details page shows the bank's profile and settings in detail and settings."]) },
    { id: 'bank-details-image', type: 'image', src: '/assets/images/Screenshot_2025-04-08_at_12.45.09_PM-6d753951040cc419ab0d51b4865f7ff9.png', alt: 'Bank details', caption: 'Figure 2 · Bank details view' },
    { id: 'mids-title', type: 'heading', level: 2, anchor: 'mids', text: 'Accessing and Managing MID Setups' },
    { id: 'mids', type: 'paragraph', content: rich(['prefix', 'Click the '], ['bank', 'bank icon', 'bold'], ['suffix', ' adjacent to the bank name to open the MID setup details for that bank. On this page you can view current MID details and initiate the process to add new MIDs.']) },
    { id: 'mid-images', type: 'image', images: [
      { id: 'list', src: '/assets/images/Screenshot_2025-04-08_at_12.47.09_PM-cb24c219571a510b0b7c0a38d0c0b2e9.png', alt: 'MID setup' },
      { id: 'details', src: '/assets/images/Screenshot_2025-04-08_at_1.28.38_PM-39ebfb13058057635441c8288a2d385a.png', alt: 'MID setup' },
      { id: 'form', src: '/assets/images/Screenshot_2025-04-08_at_1.29.44_PM-debdc21aca0a74ba6ee876babe8e93e1.png', alt: 'MID setup' },
    ], caption: 'Figure 3 · MID setup views' },
    { id: 'add-mid-title', type: 'heading', level: 2, anchor: 'add-mid', text: 'Adding a New MID' },
    { id: 'add-mid-intro', type: 'paragraph', content: rich(['prefix', 'Click '], ['action', 'Add MID', 'bold'], ['suffix', ' to launch the new MID entry form, then provide:']) },
    { id: 'mid-fields', type: 'list', items: [
      labeledItem('name', 'MID Name', ': descriptive name for the MID.'), labeledItem('number', 'MID Number', ': unique identification number.'),
      labeledItem('auth', 'AUTH Key', ': the authorisation key.'), labeledItem('currencies', 'Allowed Currencies', ': one or more currencies this MID will accept.'),
      labeledItem('cards', 'Allowed Cards', ': accepted card types (e.g. VISA, Mastercard).'), labeledItem('2d', '2D Transactions Only', ': whether the MID is limited to 2D transactions.'),
      labeledItem('3ds', 'External 3DS Service', ': whether an external 3D Secure service is allowed.'), labeledItem('chargeback', 'Chargeback Optimization', ': enable or disable as required.'),
      optionalItem('redirect', 'Redirect URL', 'URL users are redirected to post-transaction.'), optionalItem('descriptor', 'Descriptor', 'descriptor for transaction statements.'),
      optionalItem('public-key', 'Public Key', 'supply if needed.'),
    ] },
    { id: 'currency-tip', type: 'callout', kind: 'tip', variant: 'info', content: [
      { id: 'tip', text: 'Tip:', bold: true }, { id: 'prefix', text: ' to process transactions in a single currency despite accepting multiple currencies, check the ' },
      { id: 'conversion', text: 'Currency Conversion', bold: true }, { id: 'middle', text: ' option and choose the final payment currency. Conversion rates are configured under the ' },
      { id: 'utilities', text: 'Utilities menu', href: '/dash-utilities' }, { id: 'suffix', text: '.' },
    ] },
    { id: 'submit', type: 'paragraph', content: rich(['prefix', 'Click '], ['submit', 'Submit', 'bold'], ['suffix', ' to save the new MID setup.']) },
    { id: 'finalising-title', type: 'heading', level: 2, anchor: 'finalising', text: 'Finalizing Setup' },
    { id: 'finalising', type: 'paragraph', text: 'Once your MID is configured and submitted, you can immediately start routing transactions through the newly added MID.' },
  ],
});
