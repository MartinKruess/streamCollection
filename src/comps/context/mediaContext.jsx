import { createContext, useState, useEffect, useContext } from "react";

export const MediaContext = createContext()

//LOAD loginToken
const savedLoginToken = localStorage.getItem("loginToken")
const savedUserData = localStorage.getItem("logedUserData")

export const MediaProvider = ({children}) => {
    
    const [mediaData, setMediaData] = useState({
        images: [],
        videos: [],
        sounds: [],
    })

    // Handle by change
    useEffect(()=>{
        
    }, [mediaData])

    return(
        <MediaContext.Provider value={{mediaData, setMediaData}} >
            {children}
        </MediaContext.Provider>
    )
}

