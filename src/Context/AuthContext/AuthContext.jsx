import { createContext, useState, useEffect } from 'react';
import { loginUser } from '/src/services/authServices';
import { getUserFavorites } from '/src/services/favoritesServices';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('jwt');

        if (token && storedUser && storedUser !== 'undefined') {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('jwt');
            setIsAuthenticated(false);
        }
        setIsLoading(false);
    }, []);

    const fetchFavorites = async (username) => {
        try {
            const favoritesData = await getUserFavorites(username);
            setFavorites(favoritesData);
        } catch (error) {
            console.error('Failed to fetch favorites:', error);
        }
    };

    const login = async ({ username, password }) => {
        try {
            const { user: loggedInUser, token } = await loginUser({ username, password });

            localStorage.setItem('user', JSON.stringify(loggedInUser));
            localStorage.setItem('jwt', token);

            setUser(loggedInUser);
            setIsAuthenticated(true);

            await fetchFavorites(loggedInUser.username);
            return { success: true };
        } catch (error) {
            return { success: false, message: error.message || 'Login failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        // localStorage.removeItem('favourites');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, favorites, login, logout, isAuthenticated, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;