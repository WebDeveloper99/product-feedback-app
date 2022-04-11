import React, { createContext, useState } from 'react'

const Sort = createContext()
export default Sort


export const SortBy = ({ children }) => {
    const [sortBy, setSortBy] = useState("mostUpvotes")
    return (
        <Sort.Provider value={[sortBy, setSortBy]} >
            {children}
        </Sort.Provider >
    )
}
