import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()
export const SettingsContext = createContext()

//LOAD loginToken
const savedLoginToken = localStorage.getItem("loginToken")

export const UserProvider = ({children}) => {
    
    const [loginToken, setLoginToken] = useState(savedLoginToken || null)

    // Handle by change
    useEffect(()=>{
        //SAVE Token to LocalStorage
        console.log(loginToken)
        loginToken ? localStorage.setItem('loginToken', loginToken) : localStorage.removeItem("loginToken")
    }, [loginToken])

    return(
        <AppContext.Provider value={{loginToken, setLoginToken}} >
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