import { createContext, useState, useEffect, useContext } from "react";

export const MediaContext = createContext()
export const TwitchContext = createContext()

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



export const TwitchProvider = ({children}) => {
    
    const [twitchData, setTwitchData] = useState()

    // Handle by change
    useEffect(()=>{
        
    }, [twitchData])

    return(
        <TwitchContext.Provider value={{twitchData, setTwitchData}} >
            {children}
        </TwitchContext.Provider>
    )
}

