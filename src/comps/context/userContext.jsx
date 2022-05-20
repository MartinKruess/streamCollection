import { createContext, useRef, useState } from "react";
import { registerStates } from "../register/registerStates"

const AppContext = createContext()

export const UserProvider = ({children}) => {
    
    const [userID, setUserID] = useState("")
    const getUserId = async ()  => {
        const res = await fetch("http://localhost:3232/register",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            }
        )
        console.log(registerRefs().registerUserNameRef.current.value)
        setUserID(await res.JSON())
    }

    return(
        <AppContext.Provider value={{userID, setUserID}}>
            {children}
        </AppContext.Provider>
    )
}