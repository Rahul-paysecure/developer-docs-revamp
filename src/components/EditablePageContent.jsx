import React, { useCallback, useEffect, useRef, useState } from 'react';
import PostmanAddenda from './PostmanAddenda.jsx';
import { PageAddendaProvider } from './PageAddendaContext.jsx';
import {
  CONTENT_SAVED_EVENT,
  contentRepository,
} from '../content/contentRepository.js';
import { getPublishedOverrides } from '../content/publishedOverrides.js';
import { StructuredEditorContext } from '../content/StructuredEditorContext.js';

function comparable(changes = {}) {
  return Object.fromEntries(Object.entries(changes).sort(([left], [right]) => left.localeCompare(right)));
}

function changesDiffer(left, right) {
  return JSON.stringify(comparable(left)) !== JSON.stringify(comparable(right));
}

function insertPlainText(text) {
  const selection = window.getSelection();
  if (!selection?.rangeCount) return;
  selection.deleteFromDocument();
  const range = selection.getRangeAt(0);
  const node = document.createTextNode(text);
  range.insertNode(node);
  range.setStartAfter(node);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
}

function EditableText({ editKey, editing, value, resetToken, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.textContent !== value) ref.current.textContent = value;
  }, [resetToken, value]);

  if (!editing) return value;

  return (
    <span
      ref={ref}
      className="doc-editable-text"
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-label="Editable documentation text"
      data-doc-edit-key={editKey}
      spellCheck
      onInput={(event) => onChange(editKey, event.currentTarget.textContent || '')}
      onKeyDown={(event) => {
        if (event.key === 'Escape') event.currentTarget.blur();
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          event.currentTarget.blur();
        }
      }}
      onPaste={(event) => {
        event.preventDefault();
        insertPlainText(event.clipboardData.getData('text/plain'));
      }}
    >
      {value}
    </span>
  );
}

function notifyContentSaved(slug) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CONTENT_SAVED_EVENT, { detail: { slug } }));
}

function savedLabel(record) {
  if (!record?.updatedAt) return '';
  return new Date(record.updatedAt).toLocaleString();
}

export default function EditablePageContent({ slug, Page }) {
  const [savedRecord, setSavedRecord] = useState(null);
  const [session, setSession] = useState(null);
  const [editing, setEditing] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [resetToken, setResetToken] = useState(0);
  const [message, setMessage] = useState(`Update ${slug} documentation`);
  const [status, setStatus] = useState('');
  const [submission, setSubmission] = useState(null);
  const [saving, setSaving] = useState(false);
  const draftRef = useRef({});
  const originalsRef = useRef({});
  const publishedOverrides = getPublishedOverrides(slug);
  const isGitEditor = contentRepository.kind === 'git-pull-request';

  const editorAvailable =
    import.meta.env.DEV ||
    (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('admin'));

  useEffect(() => {
    let active = true;
    if (!editorAvailable) return undefined;
    setStatus('');
    setSubmission(null);
    const returnTo =
      typeof window === 'undefined'
        ? `/${slug}?admin=1`
        : `${window.location.pathname}${window.location.search}`;
    contentRepository
      .getSession(returnTo)
      .then(async (nextSession) => {
        if (!active) return;
        setSession(nextSession);
        if (!nextSession.authenticated) {
          setSavedRecord(null);
          draftRef.current = {};
          setStatus(nextSession.message || '');
          return;
        }
        const record = await contentRepository.getPage(slug);
        if (!active) return;
        setSavedRecord(record);
        draftRef.current = { ...(record?.changes || {}) };
        setMessage(record?.message || `Update ${slug} documentation`);
        setResetToken((value) => value + 1);
      })
      .catch((error) => active && setStatus(error.message));
    return () => {
      active = false;
    };
  }, [editorAvailable, slug]);

  const handleChange = useCallback(
    (editKey, value) => {
      const original = originalsRef.current[editKey];
      if (value === original) delete draftRef.current[editKey];
      else draftRef.current[editKey] = value;
      setDirty(changesDiffer(draftRef.current, savedRecord?.changes || {}));
    },
    [savedRecord]
  );

  const startEditing = () => {
    draftRef.current = { ...(savedRecord?.changes || {}) };
    setDirty(false);
    setStatus('');
    setSubmission(null);
    setResetToken((value) => value + 1);
    setEditing(true);
  };

  const cancelEditing = () => {
    draftRef.current = { ...(savedRecord?.changes || {}) };
    setDirty(false);
    setEditing(false);
    setStatus('Changes discarded.');
    setResetToken((value) => value + 1);
  };

  const saveChanges = async () => {
    setSaving(true);
    setStatus('');
    try {
      const currentKeys = new Set(Object.keys(originalsRef.current));
      const changes = Object.fromEntries(
        Object.entries(draftRef.current).filter(
          ([key, value]) => currentKeys.has(key) && value !== originalsRef.current[key]
        )
      );
      const record = await contentRepository.savePage({
        slug,
        changes,
        message,
        baseRevision: savedRecord?.baseRevision,
        pageRevision: savedRecord?.pageRevision,
      });
      draftRef.current = { ...(record?.changes || {}) };
      setSavedRecord(record);
      setDirty(false);
      setEditing(false);
      setSubmission(record?.pullRequest ? record : null);
      setStatus(
        isGitEditor
          ? 'Pull request created. Review the Deploy Preview before requesting approval.'
          : record
            ? 'Saved locally in this browser.'
            : 'Local override removed.'
      );
      setResetToken((value) => value + 1);
      notifyContentSaved(slug);
    } catch (error) {
      setStatus(error.message);
      if (isGitEditor && error.status === 401) {
        const returnTo =
          typeof window === 'undefined'
            ? `/${slug}?admin=1`
            : `${window.location.pathname}${window.location.search}`;
        try {
          setSession(await contentRepository.getSession(returnTo));
          setEditing(false);
        } catch {
          // Keep the original authentication error visible.
        }
      }
    } finally {
      setSaving(false);
    }
  };

  const resetSavedPage = async () => {
    if (
      typeof window !== 'undefined' &&
      !window.confirm('Remove every locally saved edit for this page?')
    ) return;
    setSaving(true);
    try {
      await contentRepository.deletePage(slug);
      draftRef.current = {};
      setSavedRecord(null);
      setDirty(false);
      setEditing(false);
      setStatus('Restored the structured source content.');
      setResetToken((value) => value + 1);
      notifyContentSaved(slug);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setSaving(false);
    }
  };

  const exportEdits = async () => {
    try {
      const snapshot = await contentRepository.exportSnapshot();
      const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `paysecure-docs-local-edits-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      URL.revokeObjectURL(url);
      setStatus('Exported all locally saved documentation edits.');
    } catch (error) {
      setStatus(error.message);
    }
  };

  const logout = async () => {
    setSaving(true);
    try {
      await contentRepository.logout();
      const returnTo =
        typeof window === 'undefined'
          ? `/${slug}?admin=1`
          : `${window.location.pathname}${window.location.search}`;
      setSession(await contentRepository.getSession(returnTo));
      setSavedRecord(null);
      setEditing(false);
      setDirty(false);
      setStatus('Signed out of the content editor.');
    } catch (error) {
      setStatus(error.message);
    } finally {
      setSaving(false);
    }
  };

  const pageTree = Page({});
  const addendaTree = PostmanAddenda({ slug });
  originalsRef.current = {};

  const structuredEditor = {
    registerOriginal(id, original) {
      const editKey = `field/${id}`;
      originalsRef.current[editKey] = Object.prototype.hasOwnProperty.call(publishedOverrides, editKey)
        ? publishedOverrides[editKey]
        : original;
    },
    renderText(id, original) {
      const editKey = `field/${id}`;
      const value = Object.prototype.hasOwnProperty.call(draftRef.current, editKey)
        ? draftRef.current[editKey]
        : Object.prototype.hasOwnProperty.call(publishedOverrides, editKey)
          ? publishedOverrides[editKey]
          : original;
      return (
        <EditableText
          editKey={editKey}
          editing={editing}
          value={value}
          resetToken={resetToken}
          onChange={handleChange}
        />
      );
    },
  };

  return (
    <>
      {editorAvailable && (
        <section className={`doc-editor${editing ? ' editing' : ''}`} aria-label="Admin content editor">
          <div className="doc-editor-main">
            <div className="doc-editor-title">
              <span className="doc-editor-icon" aria-hidden="true">✎</span>
              <span>
                <strong>{isGitEditor ? 'Git-backed content editor' : 'Admin content editor'}</strong>
                <small>
                  {isGitEditor
                    ? session?.authenticated
                      ? `Signed in as ${session.user?.email || session.user?.name}`
                      : 'Company SSO and reviewed pull requests'
                    : 'Local browser preview - not access controlled'}
                </small>
              </span>
            </div>
            <div className="doc-editor-badges">
              {!isGitEditor && savedRecord && <span className="doc-editor-badge saved">Local override</span>}
              {isGitEditor && savedRecord?.baseRevision && (
                <span className="doc-editor-badge revision">
                  main {savedRecord.baseRevision.slice(0, 7)}
                </span>
              )}
              {dirty && <span className="doc-editor-badge dirty">Unsaved changes</span>}
            </div>
            <div className="doc-editor-actions">
              {isGitEditor && !session?.authenticated ? (
                <button
                  type="button"
                  className="primary"
                  disabled={!session?.configured}
                  onClick={() => contentRepository.login(session?.loginUrl)}
                >
                  Sign in with company SSO
                </button>
              ) : !editing ? (
                <button
                  type="button"
                  className="primary"
                  disabled={Boolean(submission)}
                  onClick={startEditing}
                >
                  {submission ? 'Pull request created' : 'Edit this page'}
                </button>
              ) : (
                <>
                  <button type="button" className="primary" disabled={saving || !dirty} onClick={saveChanges}>
                    {saving ? 'Submitting…' : isGitEditor ? 'Create pull request' : 'Save locally'}
                  </button>
                  <button type="button" disabled={saving} onClick={cancelEditing}>Cancel</button>
                </>
              )}
              {!isGitEditor && savedRecord && !editing && (
                <button type="button" disabled={saving} onClick={resetSavedPage}>Reset page</button>
              )}
              {!isGitEditor && !editing && <button type="button" onClick={exportEdits}>Export edits</button>}
              {isGitEditor && session?.authenticated && !editing && (
                <button type="button" disabled={saving} onClick={logout}>Sign out</button>
              )}
            </div>
          </div>
          {editing && (
            <label className="doc-editor-message">
              <span>Change summary</span>
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={`Update ${slug} documentation`}
              />
              <small>
                {isGitEditor
                  ? 'This becomes the Git commit and pull-request title.'
                  : 'This becomes the Git commit message when the Git adapter is connected.'}
              </small>
            </label>
          )}
          <div className="doc-editor-status" aria-live="polite">
            {editing
              ? 'Click highlighted text to edit it. Press Enter to finish a field; use Shift+Enter for a line break.'
              : isGitEditor
                ? status || (
                  session?.authenticated
                    ? 'Edits create a branch and pull request; they are published only after review and merge.'
                    : session?.configured === false
                      ? 'The editor must be configured in Netlify before contributors can sign in.'
                      : 'Sign in to create a reviewed documentation change.'
                )
                : savedRecord
                  ? `Saved locally ${savedLabel(savedRecord)}${status ? ` · ${status}` : ''}`
                  : status || 'No local edits are saved for this page.'}
          </div>
          {submission && (
            <div className="doc-editor-submission">
              <strong>Ready for review</strong>
              <span>Pull request #{submission.pullRequest.number} was created from {submission.branch}.</span>
              <div>
                <a href={submission.pullRequest.url} target="_blank" rel="noreferrer">Open pull request</a>
                {submission.previewUrl && (
                  <a href={submission.previewUrl} target="_blank" rel="noreferrer">Open Deploy Preview</a>
                )}
              </div>
            </div>
          )}
        </section>
      )}
      <StructuredEditorContext.Provider value={structuredEditor}>
        <PageAddendaProvider value={addendaTree}>
          {pageTree}
        </PageAddendaProvider>
      </StructuredEditorContext.Provider>
    </>
  );
}
