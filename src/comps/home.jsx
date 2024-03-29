import { Startpanel } from "./startpanel"
import { About } from "./about"
import { Membership } from "./membership"
import { Navigate } from "react-router-dom"
import { AppContext } from "./context/userContext";
import { useContext } from "react";
import { Donation } from "./logedIn/paypal/donation";


export const Home = () => {
    const { loginToken } = useContext(AppContext)

    return (
        <section>
       {loginToken
            ? (<Navigate to="/dashboard" />)
            : (
            <>
                <Startpanel />
                <About />
                <Membership />
                <Donation />
            </>
            )
        }   
        </section>
    )
}