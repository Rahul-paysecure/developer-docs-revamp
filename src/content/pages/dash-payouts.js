import { createDashboardDocument } from '../schema.js';
import { labeledItem, rich } from './dashboard-content-helpers.js';

export const dashPayoutsDocument = createDashboardDocument({
  slug: 'dash-payouts',
  current: 'Payouts',
  previous: { label: 'Utilities Module', href: '/dash-utilities' },
  next: { label: 'Reports and Analytics', href: '/dash-reports' },
  blocks: [
    { id: 'title', type: 'heading', level: 1, text: 'Payouts' },
    { id: 'lead', type: 'paragraph', className: 'lead', text: 'Track, filter, and analyse payout transactions, dashboard, filters, and the Payout Analytics Report.' },
    { id: 'overview-title', type: 'heading', level: 2, anchor: 'overview', text: 'Overview' },
    { id: 'overview', type: 'paragraph', text: 'The Payout feature enables admins to track, filter, and analyse payout transactions. The dashboard provides an overview of paid, error, and in-process payouts across different timeframes; transactions can be filtered by Purchase ID, Merchant, Bank, MID, Date, Currency and Status. The Payout Analytics Report lets finance teams generate detailed reports, apply filters, and export data.' },
    { id: 'steps-title', type: 'heading', level: 2, anchor: 'steps', text: 'Checking Payout Functionality' },
    {
      id: 'payout-steps', type: 'list', ordered: true, items: [
        { id: 'login', content: rich(['prefix', 'Log in to the dashboard at '], ['url', 'app.paysecure.net/login', 'code'], ['suffix', '.']) },
        { id: 'navigate', content: rich(['prefix', 'On the left-hand panel, click '], ['payout', 'Payout', 'bold'], ['suffix', '.']) },
      ],
    },
    { id: 'payout-menu-image', type: 'image', src: '/assets/images/image-217b7d3cc17bd33f925e2704df922253.png', alt: 'Payout menu', caption: 'Figure 1 · Payout menu' },
    { id: 'dashboard-intro', type: 'paragraph', content: rich(['prefix', 'The payout '], ['dashboard', 'Dashboard', 'bold'], ['suffix', ' provides an overview of transaction analytics, paid transactions, errors, and payouts in process, across daily, weekly, monthly and yearly timeframes:']) },
    {
      id: 'dashboard-metrics', type: 'list', items: [
        labeledItem('paid', 'Paid transactions', ': total number of successful transactions and the amount processed.'),
        labeledItem('errors', 'Error transactions', ': failed or declined transactions.'),
        labeledItem('processing', 'Payout in process', ': transactions still being processed.'),
      ],
    },
    { id: 'analytics-image', type: 'image', src: '/assets/images/image%201-3b4b01019f205eab40ae4066009eb2bd.png', alt: 'Payout analytics', caption: 'Figure 2 · Payout dashboard analytics' },
    { id: 'transactions-title', type: 'heading', level: 2, anchor: 'transactions', text: 'Transactions Dashboard' },
    { id: 'transactions', type: 'paragraph', content: rich(
      ['prefix', 'Track, filter, and review payout transaction records. Filter by '],
      ['filters', 'Purchase ID, Status, Merchant, Bank, MID, Date Range, Time Zone,', 'bold'],
      ['and-currency', ' and '], ['currency', 'Currency', 'bold'],
      ['details', ', then click search to see per-transaction details: date, transaction ID, merchant name, partial email, amount, currency, payment method, error messages, and last status ('],
      ['paid', 'Paid', 'code'], ['separator-1', ', '], ['error', 'Error', 'code'], ['separator-2', ', or '], ['pending', 'Pending', 'code'],
      ['suffix', '). Use the download option to export transaction data.']
    ) },
    { id: 'transactions-images', type: 'image', images: [
      { id: 'filters', src: '/assets/images/image%202-18b5ab494314d050b720ad21e565a977.png', alt: 'Payout transactions' },
      { id: 'results', src: '/assets/images/image%203-4b0e32a01db6504349bd88ce24833e6d.png', alt: 'Payout transactions' },
    ], caption: 'Figure 3 · Payout transactions with filters' },
    { id: 'analytics-report-title', type: 'heading', level: 2, anchor: 'analytics-report', text: 'Payout Analytic Report' },
    { id: 'analytics-report', type: 'paragraph', content: rich(['prefix', 'Analyse and filter payout transactions by '], ['filters', 'Group By, Merchant, Bank, Currency, Amount range, Date Range, Time Zone, Status, Sort By,', 'bold'], ['and', ' and '], ['order', 'Sort Order', 'bold'], ['suffix', ', then submit to view the report.']) },
    { id: 'api-links', type: 'callout', kind: 'info', content: rich(
      ['prefix', 'For payout API integration, endpoints, webhooks and signatures, see the '],
      ['webhooks', 'payout webhooks reference', 'href'], ['and', ' and '], ['operations', 'Operations', 'href'], ['suffix', '.']
    ).map((run) => run.id === 'webhooks' ? { ...run, href: '/webhooks#payout', bold: undefined } : run.id === 'operations' ? { ...run, href: '/operations', bold: undefined } : run) },
  ],
});
