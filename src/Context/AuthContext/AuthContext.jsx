import { createContext, useState, useEffect } from 'react';
import { loginUser } from '/src/services/authServices';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (token && storedUser && storedUser !== 'undefined') {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
            console.log("User and token loaded from localStorage, authenticated");
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setIsAuthenticated(false);
            console.log("No valid token found, not authenticated");
        }
        // console.log(AuthProvider)
        setIsLoading(false);
    }, []);


    const login = async ({ username, password }) => {
        try {
            const { user: loggedInUser, token } = await loginUser({ username, password });

            localStorage.setItem('user', JSON.stringify(loggedInUser));
            localStorage.setItem('token', token);

            setUser(loggedInUser);
            setIsAuthenticated(true);

            return { success: true };


        } catch (error) {
            return { success: false, message: error.message || 'Login failed' };
        }
    };

    console.log(login)

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('favourites');
        setUser(null); // Clear user state on logout
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext