import { useContext } from "react";
import { AuthContext } from "../provider/AuthPovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname);
    
    if (loading) {
        return <div className="h-screen flex items-center justify-center">
             <span className="loading loading-ring loading-lg"></span>
        </div>

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;