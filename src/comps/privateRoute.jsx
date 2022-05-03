import { Navigate } from "react-router-dom";

export const PrivateRoute = ({logedIn, children}) => {
    return logedIn ? children : <Navigate to="/login" replace/>
}