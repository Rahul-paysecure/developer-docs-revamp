import { useEffect } from 'react';

// A small compatibility layer for legacy code-tab, copy-chip and the single
// cards explorer interaction. Page structure and complex request builders are
// React components; these handlers only enhance static React-rendered nodes.
function wireCodeBlocks(root) {
  root.querySelectorAll('.code').forEach((block) => {
    if (block.dataset.reactWired) return;
    block.dataset.reactWired = '1';
    const tabs = block.querySelectorAll('.code-tabs button');
    const samples = block.querySelectorAll('pre');
    tabs.forEach((button, index) => {
      button.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('on'));
        samples.forEach((sample) => (sample.hidden = true));
        button.classList.add('on');
        if (samples[index]) samples[index].hidden = false;
      });
    });
    const copy = block.querySelector('.code-copy');
    if (copy) copy.addEventListener('click', () => {
      const visible = block.querySelector('pre:not([hidden])');
      if (visible && navigator.clipboard) navigator.clipboard.writeText(visible.textContent);
      copy.textContent = 'Copied ✓';
      window.setTimeout(() => (copy.textContent = 'Copy'), 1600);
    });
  });
}

function wireChips(root) {
  root.querySelectorAll('.chip').forEach((chip) => {
    if (chip.dataset.reactWired) return;
    chip.dataset.reactWired = '1';
    chip.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(chip.getAttribute('data-copy') || chip.textContent.trim());
      }
      chip.classList.add('copied');
      window.setTimeout(() => chip.classList.remove('copied'), 1400);
    });
  });
}

function wireLegacyExplorer(root) {
  const send = root.querySelector('#btnSend');
  if (!send || send.dataset.reactWired) return;
  send.dataset.reactWired = '1';
  send.addEventListener('click', () => {
    const response = root.querySelector('#explorerRes');
    if (response) {
      response.style.opacity = 0;
      window.setTimeout(() => (response.style.opacity = 1), 250);
    }
    send.textContent = '✓ 202 Accepted';
    window.setTimeout(() => (send.textContent = 'Send request'), 2000);
  });
}

export function useEnhancers(ref, dependency) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    wireCodeBlocks(root);
    wireChips(root);
    wireLegacyExplorer(root);
  }, [dependency, ref]);
}
