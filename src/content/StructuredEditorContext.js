import { createContext, useContext } from 'react';

export const StructuredEditorContext = createContext(null);

export function useStructuredEditor() {
  return useContext(StructuredEditorContext);
}
