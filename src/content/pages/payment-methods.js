import { defineDocument } from '../schema.js';

const text = (id, value) => ({ type: 'text', id, value });
const element = (tag, props = {}, children = []) => ({ type: 'element', tag, props, children });
const heading = (level, id, anchor, value) =>
  element(`h${level}`, anchor ? { id: anchor } : {}, [text(id, value)]);
const paragraph = (id, value, className) =>
  element('p', className ? { className } : {}, [text(id, value)]);
const link = (id, href, value, className = 'inline') =>
  element('DocLink', { href, className }, [text(id, value)]);

function card(id, href, title, description, action = 'Read guide →') {
  return element('DocLink', { href, className: 'card' }, [
    element('h4', {}, [text(`${id}.title`, title)]),
    element('p', {}, [text(`${id}.description`, description)]),
    element('span', { className: 'go' }, [text(`${id}.action`, action)]),
  ]);
}

function cards(id, items, columns = 2) {
  return element('div', { className: `cards c${columns}`, 'data-section-id': id }, items);
}

function table(id, headers, rows) {
  return element('div', { className: 'tbl-wrap' }, [
    element('table', { className: 'tbl' }, [
      element('thead', {}, [
        element(
          'tr',
          {},
          headers.map((header, index) =>
            element('th', {}, [text(`${id}.header.${index + 1}`, header)])
          )
        ),
      ]),
      element(
        'tbody',
        {},
        rows.map((row) =>
          element(
            'tr',
            {},
            row.cells.map((cell, index) =>
              element('td', {}, [
                cell.href
                  ? link(`${id}.${row.id}.${index + 1}`, cell.href, cell.value)
                  : text(`${id}.${row.id}.${index + 1}`, cell.value),
              ])
            )
          )
        )
      ),
    ]),
  ]);
}

const directoryRows = [
  { id: 'ach', cells: [{ value: 'ACH Payout', href: '/ach-payout' }, { value: 'Open banking & transfers' }, { value: 'PayOut' }] },
  { id: 'applepay', cells: [{ value: 'Apple Pay', href: '/applepay' }, { value: 'Wallets' }, { value: 'PayIn' }] },
  { id: 'bank-transfers', cells: [{ value: 'Bank Transfers', href: '/bank-transfers' }, { value: 'Open banking & transfers' }, { value: 'PayIn and PayOut' }] },
  { id: 'cards', cells: [{ value: 'Cards', href: '/cards' }, { value: 'Cards' }, { value: 'PayIn' }] },
  { id: 'cryptobridge', cells: [{ value: 'CryptoBridge', href: '/cryptobridge' }, { value: 'Crypto & on-ramp' }, { value: 'PayIn' }] },
  { id: 'fawrypay', cells: [{ value: 'FawryPay', href: '/fawrypay' }, { value: 'Cash & vouchers' }, { value: 'PayIn and PayOut' }] },
  { id: 'googlepay', cells: [{ value: 'Google Pay', href: '/googlepay' }, { value: 'Wallets' }, { value: 'PayIn' }] },
  { id: 'interac-etransfer', cells: [{ value: 'Interac e-Transfer', href: '/interac-etransfer' }, { value: 'Open banking & transfers' }, { value: 'PayIn and PayOut' }] },
  { id: 'interac-express', cells: [{ value: 'Interac Express', href: '/interac-express' }, { value: 'Open banking & transfers' }, { value: 'PayIn and PayOut' }] },
  { id: 'interac-request-money', cells: [{ value: 'Interac Request Money', href: '/interac-request-money' }, { value: 'Open banking & transfers' }, { value: 'PayIn and PayOut' }] },
  { id: 'mobilemoney', cells: [{ value: 'MobileMoney', href: '/mobilemoney' }, { value: 'Mobile payments' }, { value: 'PayIn and PayOut' }] },
  { id: 'neosurf', cells: [{ value: 'Neosurf', href: '/neosurf' }, { value: 'Cash & vouchers' }, { value: 'PayIn and PayOut' }] },
  { id: 'onramp', cells: [{ value: 'On Ramp', href: '/onramp' }, { value: 'Crypto & on-ramp' }, { value: 'PayIn' }] },
  { id: 'openbanking', cells: [{ value: 'Open Banking', href: '/openbanking' }, { value: 'Open banking & transfers' }, { value: 'PayIn' }] },
  { id: 'pay-with-crypto', cells: [{ value: 'Pay with Crypto', href: '/pay-with-crypto' }, { value: 'Crypto & on-ramp' }, { value: 'PayIn' }] },
  { id: 'payid', cells: [{ value: 'PayID', href: '/payid' }, { value: 'Instant payments' }, { value: 'PayIn and PayOut' }] },
  { id: 'paymint', cells: [{ value: 'Paymint', href: '/paymint' }, { value: 'Crypto & on-ramp' }, { value: 'PayIn' }] },
  { id: 'paypal', cells: [{ value: 'PayPal', href: '/paypal' }, { value: 'Wallets' }, { value: 'PayIn' }] },
  { id: 'pix', cells: [{ value: 'PIX', href: '/pix' }, { value: 'Instant payments' }, { value: 'PayIn and PayOut' }] },
  { id: 'skrill', cells: [{ value: 'Skrill', href: '/skrill' }, { value: 'Wallets' }, { value: 'PayIn' }] },
  { id: 'spei', cells: [{ value: 'SPEI', href: '/spei' }, { value: 'Instant payments' }, { value: 'PayIn and PayOut' }] },
  { id: 'thirdparty-upi', cells: [{ value: 'ThirdParty UPI', href: '/thirdparty-upi' }, { value: 'Instant payments' }, { value: 'PayIn and PayOut' }] },
  { id: 'upi', cells: [{ value: 'UPI', href: '/upi' }, { value: 'Instant payments' }, { value: 'PayIn and PayOut' }] },
  { id: 'virtual-accounts', cells: [{ value: 'Virtual Accounts (Korea)', href: '/virtual-accounts' }, { value: 'Open banking & transfers' }, { value: 'PayIn' }] },
  { id: 'virtual-cards', cells: [{ value: 'Virtual Cards Payout', href: '/virtual-cards-payout' }, { value: 'Virtual cards' }, { value: 'PayOut' }] },
];

export const paymentMethodsDocument = defineDocument({
  schemaVersion: 1,
  slug: 'payment-methods',
  owner: 'payments-product',
  lastReviewed: '2026-07-23',
  blocks: [
    {
      id: 'document-tree',
      type: 'tree',
      root: element('fragment', {}, [
        element('div', { className: 'crumbs' }, [
          link('payment-methods.breadcrumb.home', '/', 'Home', undefined),
          element('span', { className: 'sep' }, [text('payment-methods.breadcrumb.sep1', '/')]),
          link('payment-methods.breadcrumb.guides', '/guides', 'Guides', undefined),
          element('span', { className: 'sep' }, [text('payment-methods.breadcrumb.sep2', '/')]),
          text('payment-methods.breadcrumb.current', 'Payment methods'),
        ]),
        heading(1, 'payment-methods.title', null, 'Payment methods'),
        paragraph(
          'payment-methods.lead',
          'Choose the payment rail that fits your customer, market, and transaction flow. Start with a family below, then use the method guide for its exact request fields, customer journey, testing, refunds, and payout behavior.',
          'lead'
        ),
        element('div', { className: 'callout info' }, [
          element('p', {}, [
            text('payment-methods.shared-contract.prefix', 'A single Paysecure integration gives you access to cards and alternative payment methods. The purchase lifecycle stays consistent, while the enabled methods, required customer action, currencies, and capabilities vary by merchant configuration. See '),
            link('payment-methods.shared-contract.setup', '/dashboard-configuration', 'dashboard configuration'),
            text('payment-methods.shared-contract.middle', ' and the '),
            link('payment-methods.shared-contract.api', '/api-reference', 'API overview'),
            text('payment-methods.shared-contract.suffix', ' before you begin.'),
          ]),
        ]),

        heading(2, 'payment-methods.choose.title', 'choose', 'Choose a payment family'),
        paragraph(
          'payment-methods.choose.intro',
          'Use cards when you need direct control over the card experience. Use an alternative payment method when customers expect a wallet, bank transfer, QR code, voucher, mobile-money, crypto, or payout-specific flow.'
        ),
        cards(
          'payment-methods.choose.cards',
          [
            card(
              'payment-methods.choose.cards.card',
              '/cards',
              'Cards',
              'Accept card payments and choose the appropriate 2D or 3D authentication route for your account.',
              'Explore cards →'
            ),
            card(
              'payment-methods.choose.cards.apms',
              '#wallets',
              'Alternative payment methods',
              'Offer local and global wallets, bank rails, instant payments, vouchers, mobile money, crypto, and virtual-card payouts.',
              'Explore APMs →'
            ),
          ],
          2
        ),

        heading(2, 'payment-methods.lifecycle.title', 'lifecycle', 'What stays consistent'),
        paragraph(
          'payment-methods.lifecycle.intro',
          'The customer experience changes by rail, but your integration should follow the same operating pattern.'
        ),
        element('ol', { className: 'list' }, [
          element('li', {}, [text('payment-methods.lifecycle.enable', 'Confirm that the method, transaction direction, country, and currency are enabled for your brand.')]),
          element('li', {}, [text('payment-methods.lifecycle.create', 'Create the purchase or payout using the contract documented on that method’s API reference page.')]),
          element('li', {}, [text('payment-methods.lifecycle.action', 'Handle the required customer action, such as a redirect, wallet approval, QR scan, bank transfer, voucher, or 3D Secure authentication.')]),
          element('li', {}, [text('payment-methods.lifecycle.status', 'Treat the API status and webhook as the source of truth before fulfilling an order or confirming a payout.')]),
        ]),
        table(
          'payment-methods.family-comparison',
          ['Family', 'Included methods', 'Typical customer experience', 'Direction'],
          [
            { id: 'cards', cells: [{ value: 'Cards' }, { value: 'Card payments' }, { value: 'Card entry with 2D or 3D processing' }, { value: 'PayIn' }] },
            { id: 'wallets', cells: [{ value: 'Wallets' }, { value: 'Google Pay, Apple Pay, PayPal, Skrill' }, { value: 'Wallet approval, hosted checkout, or redirect' }, { value: 'PayIn' }] },
            { id: 'bank', cells: [{ value: 'Open banking & transfers' }, { value: 'Interac, Bank Transfers, Open Banking, Virtual Accounts, ACH' }, { value: 'Bank redirect, transfer instruction, or beneficiary flow' }, { value: 'Varies by method' }] },
            { id: 'instant', cells: [{ value: 'Instant payments' }, { value: 'PIX, UPI, ThirdParty UPI, SPEI, PayID' }, { value: 'QR, app intent, or real-time bank instruction' }, { value: 'Varies by method' }] },
            { id: 'cash', cells: [{ value: 'Cash & vouchers' }, { value: 'FawryPay, Neosurf' }, { value: 'Reference code, cash agent, or voucher' }, { value: 'Varies by method' }] },
            { id: 'mobile', cells: [{ value: 'Mobile payments' }, { value: 'MobileMoney' }, { value: 'Mobile-wallet authorization' }, { value: 'PayIn and PayOut' }] },
            { id: 'crypto', cells: [{ value: 'Crypto & on-ramp' }, { value: 'Paymint, CryptoBridge, Pay with Crypto, On Ramp' }, { value: 'Hosted crypto or on-chain flow' }, { value: 'PayIn' }] },
            { id: 'virtual', cells: [{ value: 'Virtual cards' }, { value: 'Virtual Cards Payout' }, { value: 'Payout to a generated virtual card' }, { value: 'PayOut' }] },
          ]
        ),

        heading(2, 'payment-methods.cards.title', 'cards', 'Cards'),
        paragraph(
          'payment-methods.cards.intro',
          'The cards guide explains the participants in a card transaction, how authorization and settlement differ, and how Paysecure routes card payments. Use the 2D and 3D Secure guides to choose the authentication model configured for your MID.'
        ),
        cards(
          'payment-methods.cards.links',
          [
            card('payment-methods.cards.overview', '/cards', 'Cards overview', 'Understand the cardholder, merchant, Paysecure, acquirer, scheme, and issuer journey.'),
            card('payment-methods.cards.twod', '/cards-2d', '2D payments', 'Review the unauthenticated card flow, risk controls, and operational trade-offs.'),
            card('payment-methods.cards.threeds', '/3ds', '3D Secure', 'Implement frictionless and challenge authentication, SCA, and exemptions.'),
          ],
          3
        ),

        heading(2, 'payment-methods.wallets.title', 'wallets', 'Wallets'),
        paragraph(
          'payment-methods.wallets.intro',
          'Wallets let customers approve payment with stored card or account details. The available hosted, redirect, or seamless flow depends on the wallet and your account configuration.'
        ),
        cards(
          'payment-methods.wallets.links',
          [
            card('payment-methods.wallets.googlepay', '/googlepay', 'Google Pay', 'Paysecure Cashier, redirect, and merchant-cashier integration paths.'),
            card('payment-methods.wallets.applepay', '/applepay', 'Apple Pay', 'Hosted and merchant-cashier paths, including certificates and merchant validation.'),
            card('payment-methods.wallets.paypal', '/paypal', 'PayPal', 'Hosted PayPal wallet PayIn flow.'),
            card('payment-methods.wallets.skrill', '/skrill', 'Skrill', 'Hosted wallet checkout using login or QR approval.'),
          ],
          2
        ),

        heading(2, 'payment-methods.bank.title', 'bank-transfers', 'Open banking & transfers'),
        paragraph(
          'payment-methods.bank.intro',
          'Use these rails when customers pay from a bank account or when you need a bank-based payout. Some return a redirect, while others return transfer instructions or collect beneficiary details.'
        ),
        cards(
          'payment-methods.bank.links',
          [
            card('payment-methods.bank.interac-etransfer', '/interac-etransfer', 'Interac e-Transfer', 'Canadian PayIn and PayOut with balance support.'),
            card('payment-methods.bank.interac-request', '/interac-request-money', 'Interac Request Money', 'Canadian request-to-pay and payout flows.'),
            card('payment-methods.bank.interac-express', '/interac-express', 'Interac Express', 'Canadian PayIn and PayOut flows.'),
            card('payment-methods.bank.transfer', '/bank-transfers', 'Bank Transfers', 'PayIn, PayOut, and balance flows for enabled bank-transfer connections.'),
            card('payment-methods.bank.openbanking', '/openbanking', 'Open Banking', 'Bank-redirect PayIn for enabled European and UK connections.'),
            card('payment-methods.bank.virtual', '/virtual-accounts', 'Virtual Accounts', 'South Korean PayIn using issued bank-account instructions.'),
            card('payment-methods.bank.ach', '/ach-payout', 'ACH Payout', 'US bank payout using beneficiary and routing details.'),
          ],
          2
        ),

        heading(2, 'payment-methods.instant.title', 'instant-payments', 'Instant payments'),
        paragraph(
          'payment-methods.instant.intro',
          'Instant-payment rails commonly use QR codes, mobile-app intents, or local bank instructions. Each guide documents its method code, required customer fields, asynchronous states, and available payout path.'
        ),
        cards(
          'payment-methods.instant.links',
          [
            card('payment-methods.instant.pix', '/pix', 'PIX', 'Brazilian QR-based PayIn with refund and PayOut support.'),
            card('payment-methods.instant.upi', '/upi', 'UPI', 'UPI QR and intent PayIn with PayOut support.'),
            card('payment-methods.instant.thirdparty', '/thirdparty-upi', 'ThirdParty UPI', 'Third-party cashier UPI PayIn and PayOut.'),
            card('payment-methods.instant.spei', '/spei', 'SPEI', 'Mexican bank-transfer PayIn and PayOut.'),
            card('payment-methods.instant.payid', '/payid', 'PayID', 'Australian hosted PayIn and PayOut.'),
          ],
          2
        ),

        heading(2, 'payment-methods.cash-mobile.title', 'cash-vouchers-mobile', 'Cash, vouchers & mobile money'),
        paragraph(
          'payment-methods.cash-mobile.intro',
          'These methods move the customer outside a conventional card or bank checkout. Your order flow must account for delayed completion, voucher validation, cash-agent payment, or mobile-wallet authorization.'
        ),
        cards(
          'payment-methods.cash-mobile.links',
          [
            card('payment-methods.cash-mobile.fawry', '/fawrypay', 'FawryPay', 'Cash-reference PayIn and configured payout flow.'),
            card('payment-methods.cash-mobile.neosurf', '/neosurf', 'Neosurf', 'Voucher and MyNeosurf payment flows.'),
            card('payment-methods.cash-mobile.mobilemoney', '/mobilemoney', 'MobileMoney', 'Mobile-wallet PayIn and PayOut across enabled African connections.'),
          ],
          3
        ),

        heading(2, 'payment-methods.crypto.title', 'crypto', 'Crypto & on-ramp'),
        paragraph(
          'payment-methods.crypto.intro',
          'Crypto rails are PayIn flows with different hosted and on-chain customer journeys. Use the method guide rather than assuming that wallet handling, destination-address requirements, refunds, or supported assets are shared.'
        ),
        cards(
          'payment-methods.crypto.links',
          [
            card('payment-methods.crypto.paymint', '/paymint', 'Paymint', 'Hosted crypto-wallet PayIn.'),
            card('payment-methods.crypto.bridge', '/cryptobridge', 'CryptoBridge', 'Hosted multi-asset PayIn with configured destination addresses.'),
            card('payment-methods.crypto.pay', '/pay-with-crypto', 'Pay with Crypto', 'Asynchronous crypto PayIn with partial and overpayment handling.'),
            card('payment-methods.crypto.onramp', '/onramp', 'On Ramp', 'Hosted fiat-to-crypto customer flow.'),
          ],
          2
        ),

        heading(2, 'payment-methods.virtual-cards.title', 'virtual-cards', 'Virtual card payouts'),
        paragraph(
          'payment-methods.virtual-cards.intro',
          'Virtual Cards Payout is a payout-specific flow. Create or retrieve the customer as required, then issue the payout to a generated virtual card.'
        ),
        cards(
          'payment-methods.virtual-cards.links',
          [
            card('payment-methods.virtual-cards.guide', '/virtual-cards-payout', 'Virtual Cards Payout', 'Review the customer and virtual-card payout lifecycle.', 'Read payout guide →'),
            card('payment-methods.virtual-cards.api', '/api-virtual-cards-payout', 'API reference', 'Use the confirmed customer and payout request contracts.', 'Open API reference →'),
          ],
          2
        ),

        heading(2, 'payment-methods.directory.title', 'all-methods', 'All methods A–Z'),
        paragraph(
          'payment-methods.directory.intro',
          'Use this directory to open the method guide. “Direction” reflects the PayIn and PayOut folders present in the current merchant-facing Postman collection; availability still depends on your account.'
        ),
        table('payment-methods.directory', ['Method', 'Family', 'Direction'], directoryRows),

        heading(2, 'payment-methods.before.title', 'before-you-integrate', 'Before you integrate'),
        element('ul', { className: 'list' }, [
          element('li', {}, [text('payment-methods.before.enablement', 'Ask your Account Manager to confirm method enablement, countries, currencies, limits, and PayIn or PayOut availability for your brand.')]),
          element('li', {}, [text('payment-methods.before.flow', 'Choose the customer experience: Paysecure Cashier, redirect, seamless or server-to-server, QR or intent, bank instruction, voucher, or payout.')]),
          element('li', {}, [text('payment-methods.before.statuses', 'Implement every documented pending and terminal state. Do not fulfill from a browser redirect alone; confirm the final API or webhook status.')]),
          element('li', {}, [text('payment-methods.before.testing', 'Follow the method-specific testing page. Card sandbox testing and APM validation do not use the same process.')]),
          element('li', {}, [text('payment-methods.before.refunds', 'Confirm refund and payout behavior per rail; do not assume that a card-style on-rail refund applies to an APM.')]),
        ]),
        element('div', { className: 'callout warn' }, [
          element('p', {}, [
            text('payment-methods.before.warning.prefix', 'Method capabilities can vary by connection and merchant setup. The individual guide and API reference describe the integration contract, but your enabled configuration is decisive. If a required combination is not listed, confirm it with your Account Manager before development.'),
          ]),
        ]),
      ]),
    },
    {
      id: 'feedback',
      type: 'helpful',
      updated: 'Last updated 23 Jul 2026 · API v1',
    },
    {
      id: 'page-navigation',
      type: 'navigation',
      items: [
        { id: 'previous', eyebrow: 'Previous', label: '← Payouts', href: '/product-payouts' },
        { id: 'next', eyebrow: 'Next', label: 'Cards →', href: '/cards', next: true },
      ],
    },
  ],
});
