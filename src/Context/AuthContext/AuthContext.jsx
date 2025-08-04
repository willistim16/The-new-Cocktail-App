import { createContext, useState, useEffect } from 'react';
import { loginUser } from '/src/services/authServices';
import { getUserFavorites } from '/src/services/favoritesServices';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('jwt');

        if (storedToken && storedUser && storedUser !== 'undefined') {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('jwt');
            setIsAuthenticated(false);
        }
        setIsLoading(false);
    }, []);

    const fetchFavorites = async (username, jwt) => {
        try {
            const favoritesData = await getUserFavorites(username, jwt);
            setFavorites(favoritesData);
        } catch (error) {
            console.error('Failed to fetch favorites:', error);
        }
    };

    const login = async ({ username, password }) => {
        try {
            const { user: loggedInUser, token: jwt } = await loginUser({ username, password });

            localStorage.setItem('user', JSON.stringify(loggedInUser));
            localStorage.setItem('jwt', jwt);

            setUser(loggedInUser);
            setToken(jwt);
            setIsAuthenticated(true);

            await fetchFavorites(loggedInUser.username, jwt);
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message || 'Login failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, token, favorites, login, logout, isAuthenticated, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
