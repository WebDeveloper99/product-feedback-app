import React, { createContext } from 'react'
import { SuggestionsContextProvider } from './suggestion/SuggContext'
import { CommentsContextProvider } from './comment/commentsContext'
import { SortByVoetsProvider, SortCategoryProvider } from './sortBy/sortByContext'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={''}>
      <SortByVoetsProvider>
        <SortCategoryProvider>
          <SuggestionsContextProvider>
            <CommentsContextProvider>
              {children}
            </CommentsContextProvider>
          </SuggestionsContextProvider>
        </SortCategoryProvider>
      </SortByVoetsProvider>
    </GlobalContext.Provider>
  )
}
