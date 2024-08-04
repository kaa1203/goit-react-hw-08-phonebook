import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo="/"}) => {
   const { isLoggedIn } = useAuth();
   
   return !isLoggedIn ? <Navigate to={redirectTo}/> : <Component/>
}