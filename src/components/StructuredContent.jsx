import React from 'react';
import { DocLink, Helpful, TryIt } from './PagePrimitives.jsx';
import ApiConsoleTemplate from './ApiConsoleTemplate.jsx';
import { validateDocument } from '../content/schema.js';
import { useStructuredEditor } from '../content/StructuredEditorContext.js';

export function StructuredField({ id, as: Tag = 'span', children, ...props }) {
  const editor = useStructuredEditor();
  const original = String(children ?? '');
  editor?.registerOriginal(id, original);
  const content = editor ? editor.renderText(id, original) : children;
  return <Tag data-content-id={id} {...props}>{content}</Tag>;
}

const Field = StructuredField;

function RichText({ id, value }) {
  if (typeof value === 'string') return <Field id={id}>{value}</Field>;
  return value.map((run, index) => {
    const runId = `${id}.${run.id || index}`;
    if (run.bold) return <b key={runId}><Field id={runId}>{run.text}</Field></b>;
    if (run.italic) return <em key={runId}><Field id={runId}>{run.text}</Field></em>;
    if (run.code) return <code key={runId}><Field id={runId}>{run.text}</Field></code>;
    if (run.href) return <DocLink key={runId} className="inline" href={run.href}><Field id={runId}>{run.text}</Field></DocLink>;
    return <Field key={runId} id={runId}>{run.text}</Field>;
  });
}

function CalloutIcon({ kind }) {
  if (kind === 'warn') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    );
  }
  if (kind === 'tip') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
        <path d="M9 18h6M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function Breadcrumbs({ block }) {
  return (
    <div className="crumbs">
      {block.items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <span className="sep">/</span>}
          {item.href ? (
            <DocLink href={item.href}>
              <Field id={`${block.id}.${item.id}`}>{item.label}</Field>
            </DocLink>
          ) : (
            <Field id={`${block.id}.${item.id}`}>{item.label}</Field>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function List({ block }) {
  const Tag = block.ordered ? 'ol' : 'ul';
  return (
    <Tag className={block.className || 'list'}>
      {block.items.map((item) => (
        <li key={item.id}>
          <RichText id={`${block.id}.${item.id}`} value={item.content || item.text} />
        </li>
      ))}
    </Tag>
  );
}

function Navigation({ block }) {
  return (
    <div className="prevnext">
      {block.items.map((item) => (
        <DocLink
          key={item.id}
          className={`pn${item.next ? ' next' : ''}`}
          href={item.href}
        >
          <small><Field id={`${block.id}.${item.id}.eyebrow`}>{item.eyebrow}</Field></small>
          <b><Field id={`${block.id}.${item.id}.label`}>{item.label}</Field></b>
        </DocLink>
      ))}
    </div>
  );
}

const TREE_COMPONENTS = { ApiConsoleTemplate, DocLink, Helpful, TryIt };

function TreeText({ node }) {
  const editor = useStructuredEditor();
  if (!node.id || !editor) return node.value;
  editor.registerOriginal(node.id, node.value);
  return editor.renderText(node.id, node.value);
}

function renderTree(node, key = 'root') {
  if (node === null || node === undefined || node === false) return null;
  if (Array.isArray(node)) return node.map((child, index) => renderTree(child, `${key}.${index}`));
  if (node.type === 'text') {
    return <TreeText key={key} node={node} />;
  }
  if (node.type !== 'element') return null;
  const Tag = node.tag === 'fragment' ? React.Fragment : TREE_COMPONENTS[node.tag] || node.tag;
  return React.createElement(
    Tag,
    { ...(node.props || {}), key },
    ...(node.children || []).map((child, index) => renderTree(child, `${key}.${index}`))
  );
}

function renderBlock(block) {
  switch (block.type) {
    case 'breadcrumbs':
      return <Breadcrumbs key={block.id} block={block} />;
    case 'heading': {
      const Tag = `h${block.level || 2}`;
      return <Field key={block.id} id={block.id} as={Tag} {...(block.anchor ? { id: block.anchor } : {})}>{block.text}</Field>;
    }
    case 'paragraph':
      return <p key={block.id} className={block.className}><RichText id={block.id} value={block.content || block.text} /></p>;
    case 'list':
      return <List key={block.id} block={block} />;
    case 'image':
      return (
        <figure key={block.id} className="shot">
          <div className={`imgs${(block.images?.length || 0) > 1 ? ' multi' : ''}`}>
            {(block.images || [{ src: block.src, alt: block.alt }]).map((image) => (
              <img key={image.id || image.src} src={image.src} alt={image.alt} loading="lazy" />
            ))}
          </div>
          <Field id={`${block.id}.caption`} as="figcaption">{block.caption}</Field>
        </figure>
      );
    case 'callout':
      return (
        <div key={block.id} className={`callout ${block.variant || block.kind || 'info'}`}>
          <span className="ico"><CalloutIcon kind={block.kind} /></span>
          <p><RichText id={`${block.id}.text`} value={block.content || block.text} /></p>
        </div>
      );
    case 'helpful':
      return <Helpful key={block.id} updated={block.updated} />;
    case 'navigation':
      return <Navigation key={block.id} block={block} />;
    case 'tree':
      return <React.Fragment key={block.id}>{renderTree(block.root)}</React.Fragment>;
    default:
      return null;
  }
}

export default function StructuredContent({ document }) {
  validateDocument(document);
  const footerIndex = document.blocks.findIndex((block) => block.type === 'helpful');
  if (footerIndex < 0) return <>{document.blocks.map(renderBlock)}</>;

  const body = document.blocks.slice(0, footerIndex);
  const footer = document.blocks.slice(footerIndex);
  return (
    <>
      {body.map(renderBlock)}
      <div className="pg-foot">{footer.map(renderBlock)}</div>
    </>
  );
}
