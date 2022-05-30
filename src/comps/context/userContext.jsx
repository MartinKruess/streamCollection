import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()

//LOAD loginToken
const savedLoginToken = localStorage.getItem("loginToken")

export const UserProvider = ({children}) => {
    
    const [loginToken, setLoginToken] = useState(savedLoginToken || false)

    // Handle by change
    useEffect(()=>{
        //SAVE Token to LocalStorage
        localStorage.setItem('loginToken', loginToken)
    }, [loginToken])

    // LOGOUT - delete loginToken
    // clear localStorage by Logout
    //loginToken === false ? window.localStorage.clear()

    return(
        <AppContext.Provider value={{loginToken, setLoginToken}}>
            {children}
        </AppContext.Provider>
    )
}