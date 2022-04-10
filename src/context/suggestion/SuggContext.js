



import React, { createContext, useEffect, useState } from "react";
// import { suggData } from '../../mock/mock';

export const SuggestionsContext = createContext()


export const SuggestionsContextProvider = ({ children }) => {

    const [sugg_mock, setSugg_Mock] = useState([])

    useEffect(() => {
        fetch('https://feedback-app-1.herokuapp.com/feedbacks')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setSugg_Mock(data)
            })
            .catch((err) => console.log(err))

    }, [])




    return (
        <SuggestionsContext.Provider value={[sugg_mock, setSugg_Mock]} >
            {children}
        </SuggestionsContext.Provider>
    )
}