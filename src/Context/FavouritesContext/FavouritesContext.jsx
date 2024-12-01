import {createContext, useContext, useEffect, useState} from 'react';
import useAuth from "../../../server/useAuth.jsx";
import axios from "axios";

const API_URL = 'https://api.datavortex.nl/cocktailz'
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
                        'Authorization': `Bearer ${token}`,
                        'X-Api-Key': `${API_KEY}`,
                    },
                });
                setFavourites(response.data.favourites || []);
            } catch (error) {
                console.error('Error fetching favourites:', error);
                alert('Could not load favourites. Please try again later.');
            }
        };

        fetchFavourites();
    }, [token, user?.username]);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = async (cocktail) => {
        const updatedFavourites = [...favourites, cocktail];
        setFavourites(updatedFavourites);

        if (token && user?.username) {
            try {
                await axios.get(`${API_URL}/users/${user.username}/favourites`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'X-Api-Key': API_KEY,
                    },
                });
            } catch (error) {
                console.error('Error saving favourite:', error);
                alert('Could not save favourite. Please try again later.');

            }
        }
    };

    const removeFavourite = async (idDrink) => {
        const updatedFavourites = favourites.filter((cocktail) => cocktail.idDrink !== idDrink);
        setFavourites(updatedFavourites);

        if (token && user?.username) {
            try {
                await axios.get(`${API_URL}/users/${user.username}/favourites/${idDrink}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'X-Api-Key': API_KEY,
                    },
                });
            } catch (error) {
                console.error('Error removing favourite:', error);
                alert('Could not remove favourite. Please try again later.');
            }
        }
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavourites = () => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavourites must be used within a FavouritesProvider');
    }
    return context;
};