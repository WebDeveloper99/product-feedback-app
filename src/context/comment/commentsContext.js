



import React, { createContext, useEffect, useState } from "react";
// import { commentData } from '../../mock/mock';

export const CommentsContext = createContext()



export const CommentsContextProvider = ({ children }) => {

    const [comment_mock, setComments_Mock] = useState([])


    useEffect(()=>{
        fetch('https://feedback-app-1.herokuapp.com/comments')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setComments_Mock(data)
        })
        .catch((err) => console.log(err))
    },[])
    return (
        <CommentsContext.Provider value={[comment_mock, setComments_Mock]} >
            {children}
        </CommentsContext.Provider>
    )
}