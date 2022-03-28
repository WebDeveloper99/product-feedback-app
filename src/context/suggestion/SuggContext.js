



import React, { createContext, useState } from "react";
import { suggData } from '../../mock/mock';

export const SuggestionsContext = createContext()



export const SuggestionsContextProvider = ({ children }) => {


    const [mock, setMock] = useState(suggData)



    return (
        <SuggestionsContext.Provider value={[mock, setMock]} >
            {children}
        </SuggestionsContext.Provider>
    )
}