import { useContext } from 'react';
import AuthContext from '../src/Context/AuthContext/AuthContext.jsx';

const useAuth = () => {
    const { user, isAuthenticated, login, logout } = useContext(AuthContext);

    return { user, isAuthenticated, login, logout };
};

export default useAuth;