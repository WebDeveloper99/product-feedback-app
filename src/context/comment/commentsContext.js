



import React, { createContext, useState } from "react";
import { commentData } from '../../mock/mock';

export const CommentsContext = createContext()



export const CommentsContextProvider = ({ children }) => {


    const [comment_mock, setComments_Mock] = useState(commentData)



    return (
        <CommentsContext.Provider value={[comment_mock, setComments_Mock]} >
            {children}
        </CommentsContext.Provider>
    )
}