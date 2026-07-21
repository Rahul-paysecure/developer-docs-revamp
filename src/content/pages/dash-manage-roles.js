import { createDashboardDocument } from '../schema.js';
import { labeledItem, rich } from './dashboard-content-helpers.js';

export const dashManageRolesDocument = createDashboardDocument({
  slug: 'dash-manage-roles', current: 'Manage Roles',
  previous: { label: 'Dashboard', href: '/dash-dashboard' }, next: { label: 'Merchant Profile', href: '/dash-merchant-profile' },
  blocks: [
    { id: 'title', type: 'heading', level: 1, text: 'Manage Roles' },
    { id: 'lead', type: 'paragraph', className: 'lead', text: 'View, manage, and add new merchants under a white-label account, roles, permissions, and account actions.' },
    { id: 'introduction', type: 'paragraph', content: rich(['prefix', 'This module allows white-label admins to '], ['view', 'view', 'bold'], ['separator-1', ', '], ['manage', 'manage', 'bold'], ['separator-2', ', and '], ['add', 'add new merchants', 'bold'], ['suffix', ' under their account.']) },
    { id: 'manage-roles-image', type: 'image', src: '/assets/images/Screenshot_2025-05-16_at_5.52.41_PM-382fd56d08aecfaaa19e088d6e7ff6dc.png', alt: 'Manage Roles', caption: 'Figure 1 · Manage Roles module' },
    { id: 'add-merchant-title', type: 'heading', level: 2, anchor: 'add-merchant', text: 'Adding a New Merchant' },
    { id: 'add-merchant-steps', type: 'list', ordered: true, items: [
      { id: 'open', content: rich(['prefix', 'Click the '], ['action', 'Add Role', 'bold'], ['suffix', ' button.']) },
      { id: 'credentials', content: rich(['prefix', 'Enter the '], ['username', 'Merchant Username', 'bold'], ['separator-1', ', '], ['password', 'Password', 'bold'], ['separator-2', ', and '], ['email', 'Email', 'bold'], ['suffix', '.']) },
      { id: 'role', content: rich(['prefix', 'Select the appropriate '], ['role', 'Merchant Role', 'bold'], ['suffix', ' (Standard Merchant, Admin, or MIDADMIN).']) },
      { id: 'submit', content: rich(['prefix', 'Click '], ['action', 'Add Role', 'bold'], ['suffix', ' to complete the process.']) },
    ] },
    { id: 'add-role-image', type: 'image', src: '/assets/images/Screenshot_2025-05-16_at_5.56.28_PM-d41f5653034eaf48cc66f3e43500e962.png', alt: 'Add Role form', caption: 'Figure 2 · Adding a new merchant: Add Role' },
    { id: 'roles-title', type: 'heading', level: 2, anchor: 'roles', text: 'Merchant Roles and Permissions' },
    { id: 'standard-title', type: 'heading', level: 3, text: '1. Standard Merchant' },
    { id: 'standard', type: 'list', items: [labeledItem('access', 'Access level:', ' basic merchant-level access.'), labeledItem('privileges', 'Privileges:', ' limited to transaction and dashboard access as per business setup.'), labeledItem('use-case', 'Use case:', ' designed for end merchants using the platform to process payments.')] },
    { id: 'admin-title', type: 'heading', level: 3, text: '2. Admin' },
    { id: 'admin', type: 'list', items: [labeledItem('access', 'Access level:', ' full administrative control for day-to-day operations.'), labeledItem('privileges', 'Privileges:', ' manage merchant settings, basic configurations and reports; perform operational tasks such as user management and profile updates.'), labeledItem('limitations', 'Limitations:', ' cannot modify global or sensitive system-level settings.'), labeledItem('use-case', 'Use case:', ' ideal for operational teams managing daily activities.')] },
    { id: 'midadmin-title', type: 'heading', level: 3, text: '3. MIDADMIN' },
    { id: 'midadmin', type: 'list', items: [labeledItem('access', 'Access level:', ' view-only access for transaction monitoring.'), labeledItem('privileges', 'Privileges:', ' view transaction reports (pay-ins and pay-outs).'), labeledItem('limitations', 'Limitations:', ' no access to edit settings or manage users.'), labeledItem('use-case', 'Use case:', ' suitable for compliance or finance teams focused on monitoring transaction flows.')] },
    { id: 'manage-existing-title', type: 'heading', level: 2, anchor: 'manage-existing', text: 'Managing Existing Merchants' },
    { id: 'actions', type: 'paragraph', content: rich(['prefix', 'Search merchants by username to view or manage their profile. Available actions: '], ['delete', 'Delete User', 'bold'], ['separator-1', ', '], ['reset-2fa', 'Reset 2FA', 'bold'], ['separator-2', ', '], ['reset-login', 'Reset Login Credentials', 'bold'], ['suffix', '.']) },
    { id: 'switch-account', type: 'paragraph', content: rich(['prefix', 'White-label admins can also '], ['switch', 'switch into any merchant account', 'bold'], ['suffix', ' by clicking the login icon, enabling them to troubleshoot or assist with account setup directly.']) },
    { id: 'merchant-actions-image', type: 'image', src: '/assets/images/Screenshot_2025-05-16_at_5.57.11_PM-3e372b8e3c724a3e2b39a13d1cc997e6.png', alt: 'Merchant management actions', caption: 'Figure 3 · Managing existing merchants' },
  ],
});
