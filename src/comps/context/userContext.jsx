import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()
export const SettingsContext = createContext()

//LOAD loginToken
const savedLoginToken = localStorage.getItem("loginToken")
const savedUserData = localStorage.getItem("logedUserData")

export const UserProvider = ({children}) => {
    
    const [loginToken, setLoginToken] = useState(savedLoginToken || null)
    const [logedUserData, setLogedUserData] = useState(savedUserData || null)

    // Handle by change
    useEffect(()=>{
        //SAVE Token to LocalStorage
        console.log("Token", loginToken, "UserData", logedUserData)
        loginToken ? localStorage.setItem('loginToken', loginToken) : localStorage.removeItem("loginToken")
        logedUserData ? localStorage.setItem('logedUserData', logedUserData) : localStorage.removeItem("logedUserData")
    }, [loginToken])

    return(
        <AppContext.Provider value={{loginToken, setLoginToken, logedUserData, setLogedUserData}} >
            {children}
        </AppContext.Provider>
    )
}


// ----------------- SETTINGS -----------------

export const SettingsProvider = ({children}) => {
    const [sideSettings, setSideSettings] = useState({
        isLocked: false,
        mode: "Dark",
        lang: "DE",
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