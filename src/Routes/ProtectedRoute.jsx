import { Navigate, Outlet } from "react-router-dom";
import useAuth from '/src/helpers/useAuth.js';

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>; // or a custom loading spinner
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/LogInRegisterPage" />;
};

export default ProtectedRoute;