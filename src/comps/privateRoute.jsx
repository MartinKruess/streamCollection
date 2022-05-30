import { Navigate } from "react-router-dom";

export const PrivateRoute = ({loginToken, children}) => {
    console.log("loginToken", loginToken)
    return loginToken ? children : <Navigate to="/login" replace/>
}