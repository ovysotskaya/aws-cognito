import { Navigate } from "react-router-dom";

import routes from "../../constants/routes";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <>{children}</> : <Navigate to={routes.signIn} />;
};

export default PrivateRoute;