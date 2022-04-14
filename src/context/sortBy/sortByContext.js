import React, { createContext, useState } from 'react'


// -----------------------------------create SortVoetsContext----------------------------

export const SortVoetsContext = createContext()


export const SortByVoetsProvider = ({ children }) => {
    const [sortByVoets, setSortByVoets] = useState("default")
    return (
        <SortVoetsContext.Provider value={[sortByVoets, setSortByVoets]} >
            {children}
        </SortVoetsContext.Provider >
    )
}


// -----------------------------------create SortCategoryContext----------------------------

export const SortCategoryContext = createContext()


export const SortCategoryProvider = ({ children }) => {
    const [sortByCategory, setSortByCategory] = useState(0)
    return (
        <SortCategoryContext.Provider value={[sortByCategory, setSortByCategory]} >
            {children}
        </SortCategoryContext.Provider >
    )
}

