import { createContext, useContext } from 'react';

const PageAddendaContext = createContext(null);

export const PageAddendaProvider = PageAddendaContext.Provider;

export function usePageAddenda() {
  return useContext(PageAddendaContext);
}
