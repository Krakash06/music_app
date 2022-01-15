import React, { createContext,useState } from 'react'

export const DetailContext=createContext();
export const  ContextProvider=({children})=> {
    const [songList, setsongList] = useState([])

    return (
        <DetailContext.Provider value={{songList,setsongList}}>
            {children}
        </DetailContext.Provider>
    )
}

