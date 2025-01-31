import { createContext, useContext, useEffect, useState } from 'react';
import useAuth from "../../../server/useAuth.jsx";
import axios from "axios";

const API_URL = 'https://api.datavortex.nl/cocktailz';
const API_KEY = import.meta.env.VITE_API_KEY;
const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(() => {
        const storedFavourites = localStorage.getItem('favourites');
        return storedFavourites ? JSON.parse(storedFavourites) : [];
    });
    const { token, user } = useAuth();

    useEffect(() => {
        const fetchFavourites = async () => {
            if (!token || !user?.username) return;

            try {
                const response = await axios.get(`${API_URL}/users/${user.username}/info`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'X-Api-Key': API_KEY,
                    },
                });

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
            const response = await axios.put(
                `${API_URL}/users/${user.username}`,
                { info: { favourites: updatedFavourites } },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                        'X-Api-Key': API_KEY,
                    },
                }
            );
            if (response.status === 200) {

            }
        } catch (error) {
            console.error('Error saving favourites to server:', error);
            alert('Could not save favourites. Please try again later.');
        }
    };

    const addFavourite = (cocktail) => {
        const updatedFavourites = [...favourites, cocktail];
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        saveFavouritesToServer(updatedFavourites);
    };

    const removeFavourite = (idDrink) => {
        const updatedFavourites = favourites.filter((cocktail) => cocktail.idDrink !== idDrink);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        saveFavouritesToServer(updatedFavourites);
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