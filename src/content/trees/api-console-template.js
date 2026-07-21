import { defineDocument } from '../schema.js';

export const ApiConsoleTemplateDocument = defineDocument({
  schemaVersion: 1,
  slug: 'api-console-template',
  blocks: [
    {
      id: 'document-tree',
      type: 'tree',
      root: {
        type: 'element',
        tag: 'div',
        props: { className: 'api-template-preview' },
        children: [
          {
            type: 'element',
            tag: 'div',
            props: { className: 'crumbs' },
            children: [
              {
                type: 'element',
                tag: 'DocLink',
                props: { href: '/' },
                children: [{ type: 'text', id: 'api-console-template.crumb.home', value: 'Home' }],
              },
              { type: 'element', tag: 'span', props: { className: 'sep' }, children: [{ type: 'text', value: '/' }] },
              {
                type: 'element',
                tag: 'DocLink',
                props: { href: '/api-reference' },
                children: [{ type: 'text', id: 'api-console-template.crumb.api', value: 'API Reference' }],
              },
              { type: 'element', tag: 'span', props: { className: 'sep' }, children: [{ type: 'text', value: '/' }] },
              { type: 'text', id: 'api-console-template.crumb.current', value: 'Design preview' },
            ],
          },
          {
            type: 'element',
            tag: 'h1',
            props: {},
            children: [{ type: 'text', id: 'api-console-template.title', value: 'Request and response template' }],
          },
          {
            type: 'element',
            tag: 'p',
            props: { className: 'lead' },
            children: [
              {
                type: 'text',
                id: 'api-console-template.intro',
                value: 'A focused preview of the proposed API console design. This page is isolated from the shared component, so the current API Reference pages remain unchanged until approval.',
              },
            ],
          },
          {
            type: 'element',
            tag: 'div',
            props: { className: 'api-template-note' },
            children: [{ type: 'text', id: 'api-console-template.note', value: 'Interactive design prototype' }],
          },
          { type: 'element', tag: 'ApiConsoleTemplate', props: {}, children: [] },
        ],
      },
    },
  ],
});
