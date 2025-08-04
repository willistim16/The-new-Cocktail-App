import { createContext, useContext, useEffect, useState } from 'react';
import useAuth from "/server/useAuth.jsx";
import apiClient from "/src/api/apiClient.js"; // use central axios instance

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(() => {
        const stored = localStorage.getItem('favourites');
        return stored ? JSON.parse(stored) : [];
    });

    const { token, user } = useAuth();

    useEffect(() => {
        const fetchFavourites = async () => {
            if (!token || !user?.username) return;

            try {
                const response = await apiClient.get(`/users/${user.username}/info`);
                const userInfo = response.data;

                if (userInfo?.favourites) {
                    setFavourites(userInfo.favourites);
                    localStorage.setItem('favourites', JSON.stringify(userInfo.favourites));
                } else {
                    setFavourites([]);
                }
            } catch (error) {
                console.error('Error fetching favourites:', error);
                alert('Could not fetch favourites. Please try again later.');
            }
        };

        fetchFavourites();
    }, [token, user?.username]);

    const saveFavouritesToServer = async (updatedFavourites) => {
        if (!token || !user?.username) return;

        try {
            await apiClient.put(`/users/${user.username}`, {
                info: { favourites: updatedFavourites }
            });
        } catch (error) {
            console.error('Error saving favourites to server:', error);
            alert('Could not save favourites. Please try again later.');
        }
    };

    const addFavourite = (cocktail) => {
        const updated = [...favourites, cocktail];
        setFavourites(updated);
        localStorage.setItem('favourites', JSON.stringify(updated));
        saveFavouritesToServer(updated);
    };

    const removeFavourite = (idDrink) => {
        const updated = favourites.filter((c) => c.idDrink !== idDrink);
        setFavourites(updated);
        localStorage.setItem('favourites', JSON.stringify(updated));
        saveFavouritesToServer(updated);
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};

export const useFavourites = () => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavourites must be used within a FavouritesProvider');
    }
    return context;
};
