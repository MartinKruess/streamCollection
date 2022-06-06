import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()

//LOAD loginToken
const savedLoginToken = localStorage.getItem("loginToken")

export const UserProvider = ({children}) => {
    
    const [loginToken, setLoginToken] = useState(savedLoginToken || null)

    // Handle by change
    useEffect(()=>{
        //SAVE Token to LocalStorage
        loginToken ? localStorage.setItem('loginToken', loginToken) : localStorage.removeItem("loginToken")
    }, [loginToken])

    // LOGOUT - delete loginToken
    // clear localStorage by Logout
    //loginToken === false ? window.localStorage.clear()
 

    return(
        <AppContext.Provider value={{loginToken, setLoginToken}} >
            {children}
        </AppContext.Provider>
    )
}


// ----------------- SETTINGS -----------------

export const savedSettings = ({children}) => {
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
        <AppContext.Provider sideSettings={{sideSettings, setSideSettings}}>
            {children}
        </AppContext.Provider>
    )
}