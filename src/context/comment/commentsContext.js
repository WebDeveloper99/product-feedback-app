



import React, { createContext, useState } from "react";
import { commentData } from '../../mock/mock';

export const CommentsContext = createContext()



export const CommentsContextProvider = ({ children }) => {

//     async function zapros() {


//         await fetch('https://feedback-app-1.herokuapp.com/comments')
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data,'api');
//             })
//             .catch((err) => console.log(err));

//     }

//    console.log(zapros()); 

    const [comment_mock, setComments_Mock] = useState(commentData)


    return (
        <CommentsContext.Provider value={[comment_mock, setComments_Mock]} >
            {children}
        </CommentsContext.Provider>
    )
}