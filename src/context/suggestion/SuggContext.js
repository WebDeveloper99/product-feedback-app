



import React, { createContext, useState } from "react";
import { suggData } from '../../mock/mock';

export const SuggestionsContext = createContext()



export const SuggestionsContextProvider = ({ children }) => {


    const [sugg_mock, setSugg_Mock] = useState(suggData)



    return (
        <SuggestionsContext.Provider value={[sugg_mock, setSugg_Mock]} >
            {children}
        </SuggestionsContext.Provider>
    )
}