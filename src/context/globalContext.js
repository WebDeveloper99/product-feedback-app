import React, { createContext } from 'react'
import { SuggestionsContextProvider } from './suggestion/SuggContext'
import { CommentsContextProvider } from './comment/commentsContext'
import { SortBy } from './SortBy'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={''}>
      <SortBy>
        <SuggestionsContextProvider>
          <CommentsContextProvider>
            {children}
          </CommentsContextProvider>
        </SuggestionsContextProvider>
      </SortBy>
    </GlobalContext.Provider>
  )
}
