import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext()

export const AppProvider=({children})=>{
 const [course,setCourse]=useState('')
return (
    <AppContext.Provider value={{course,setCourse}}>
        {children}
    </AppContext.Provider>
)
}