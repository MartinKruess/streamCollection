import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()
export const SettingsContext = createContext()

//LOAD loginToken, userData and sideSettings
const savedLoginToken = localStorage.getItem("loginToken")
const savedUserData = localStorage.getItem("logedUserData")
const savedSideSettings = localStorage.getItem("sideSettings")

export const UserProvider = ({children}) => {
    
    const [loginToken, setLoginToken] = useState(savedLoginToken || null)
    const [logedUserData, setLogedUserData] = useState(JSON.parse(savedUserData) || null)

    // Handle by change
    useEffect(()=>{
        //SAVE Token to LocalStorage
        loginToken ? localStorage.setItem('loginToken', loginToken) : localStorage.removeItem("loginToken")
        logedUserData ? localStorage.setItem('logedUserData', JSON.stringify(logedUserData)) : localStorage.removeItem("logedUserData")
    }, [loginToken])

    return(
        <AppContext.Provider value={{loginToken, setLoginToken, logedUserData, setLogedUserData}} >
            {children}
        </AppContext.Provider>
    )
}


// ----------------- SETTINGS -----------------

export const SettingsProvider = ({children}) => {
    //savedSideSettings || 
    const [sideSettings, setSideSettings] = useState(JSON.parse(savedSideSettings) ||  {
        isLocked: false,
        mode: "Dark",
        lang: "DE",
        isSlide: false,
        twitch: {
            isConnected: false,
            botIsActive: false,
        },
        youtube: {
            isConnected: false,
            botIsActive: false,
        },
        obsIsConnected: false,
        chartIsActive: false,
        specialIsActive: false,
        newsFeedIsActive: false,
    })

    return(
        <SettingsContext.Provider value={{sideSettings, setSideSettings}}>
            {children}
        </SettingsContext.Provider>)
}