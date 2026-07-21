import { defineDocument } from '../schema.js';

export const dashAddUserDocument = defineDocument({
  schemaVersion: 1,
  slug: 'dash-add-user',
  owner: 'dashboard-product',
  lastReviewed: '2026-07-07',
  blocks: [
    {
      id: 'breadcrumbs',
      type: 'breadcrumbs',
      items: [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
        { id: 'current', label: 'Add User' },
      ],
    },
    { id: 'title', type: 'heading', level: 1, text: 'Add User' },
    { id: 'lead', type: 'paragraph', className: 'lead', text: 'View, manage, and add users under a white-label account.' },
    { id: 'introduction', type: 'paragraph', text: 'This module allows white-label admins to view, manage, and add new users under their white-label account.' },
    {
      id: 'module-image',
      type: 'image',
      src: '/assets/images/Screenshot_2025-05-16_at_6.07.32_PM-7f9afae023ae311334f193b52fda818b.png',
      alt: 'Add User',
      caption: 'Figure 1 · Add User module',
    },
    { id: 'add-user-title', type: 'heading', level: 2, anchor: 'add-user', text: 'Adding a New User' },
    {
      id: 'add-user-steps',
      type: 'list',
      ordered: true,
      items: [
        { id: 'open', content: [{ id: 'prefix', text: 'Click ' }, { id: 'action', text: 'Add User', bold: true }, { id: 'suffix', text: '.' }] },
        { id: 'details', content: [{ id: 'prefix', text: 'Enter the ' }, { id: 'username', text: 'Username', bold: true }, { id: 'email-separator', text: ', ' }, { id: 'email', text: 'Email Address', bold: true }, { id: 'password-separator', text: ', and ' }, { id: 'password', text: 'Password', bold: true }, { id: 'suffix', text: '.' }] },
        { id: 'submit', content: [{ id: 'prefix', text: 'Click ' }, { id: 'action', text: 'Add User', bold: true }, { id: 'suffix', text: ' to complete the process.' }] },
      ],
    },
    { id: 'manage-users-title', type: 'heading', level: 2, anchor: 'manage-users', text: 'Managing Existing Users' },
    { id: 'manage-users-intro', type: 'paragraph', text: 'From the user management interface you can:' },
    {
      id: 'manage-users-actions',
      type: 'list',
      items: [
        { id: 'search', text: 'Search for a specific user.' },
        { id: 'delete', text: 'Delete a user from the system.' },
        { id: 'reset-2fa', text: 'Reset Two-Factor Authentication (2FA) for a user.' },
        { id: 'reset-password', text: 'Reset Password if a user is unable to log in.' },
      ],
    },
    { id: 'security-summary', type: 'paragraph', text: 'These tools help you manage access and maintain account security across your white-label platform.' },
    { id: 'feedback', type: 'helpful', updated: 'Last updated 07 Jul 2026 · API v1' },
    {
      id: 'page-navigation',
      type: 'navigation',
      items: [
        { id: 'previous', eyebrow: 'Previous', label: '← Banks', href: '/dash-banks' },
        { id: 'next', eyebrow: 'Next', label: 'Global Settings →', href: '/dash-global-settings', next: true },
      ],
    },
  ],
});
