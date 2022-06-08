import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./context/userContext";

export const PrivateRoute = ({ children }) => {
    const {loginToken} = useContext(AppContext)
    return loginToken ? children : <Navigate to="/login" replace/>
}