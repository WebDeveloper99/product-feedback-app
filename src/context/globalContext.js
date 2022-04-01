



import React, { createContext } from "react";
import { SuggestionsContextProvider } from "./suggestion/SuggContext";
import { CommentsContextProvider } from "./comment/commentsContext";

export const GlobalContext = createContext()



export const GlobalContextProvider = ({ children }) => {





    return (
        <GlobalContext.Provider value={""} >
            <SuggestionsContextProvider>
                <CommentsContextProvider>
                    {children}
                </CommentsContextProvider>
            </SuggestionsContextProvider>
        </GlobalContext.Provider>
    )
}