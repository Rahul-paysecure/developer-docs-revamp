import React from 'react';
import addenda from '../data/postman-addenda.json';
import { TryIt } from './PagePrimitives.jsx';
import { StructuredField } from './StructuredContent.jsx';

export default function PostmanAddenda({ slug }) {
  const examples = addenda.filter((example) => example.slug === slug);
  if (!examples.length) return null;

  return examples.map((example) => (
    <div className="api-section" id={example.id} key={example.source}>
      <div className="api-prose">
        <h2><StructuredField id={`addenda.${example.id}.title`}>{example.title}</StructuredField></h2>
        <div className="endpoint-sig">
          <span className={`method ${example.method.toLowerCase() === 'get' ? 'get' : 'post'}`}>
            <StructuredField id={`addenda.${example.id}.method`}>{example.method}</StructuredField>
          </span>
          <StructuredField id={`addenda.${example.id}.url`}>{example.url}</StructuredField>
        </div>
        <p><StructuredField id={`addenda.${example.id}.description`}>{example.description}</StructuredField></p>
        <p className="req-note">
          <StructuredField id={`addenda.${example.id}.source-note`}>
            Request and documented response are sourced from the merchant-facing live Postman collection.
          </StructuredField>
        </p>
      </div>
      <div className="api-code">
        <div className="sticky">
          <TryIt method={example.method} url={example.url} config={example.config} />
        </div>
      </div>
    </div>
  ));
}
