import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '/server/useAuth.jsx';

const API_URL = 'https://api.datavortex.nl/cocktailz';
const API_KEY = import.meta.env.VITE_API_KEY;

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
    const [ratings, setRatings] = useState({});
    const { token, user } = useAuth();

    useEffect(() => {
        const fetchRatings = async () => {
            const localRatings = JSON.parse(localStorage.getItem('cocktailRatings')) || {};
            setRatings(localRatings);

            if (!token || !user?.username) return;

            try {
                const response = await axios.get(`${API_URL}/users/${user.username}/info`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'X-Api-Key': API_KEY,
                    },
                });

                const fetchedRatings = response.data.ratings || {};
                const mergedRatings = { ...localRatings, ...fetchedRatings };

                setRatings(mergedRatings);
                localStorage.setItem('cocktailRatings', JSON.stringify(mergedRatings));
            } catch (error) {
                console.error('Error fetching ratings from backend:', error);
            }
        };

        fetchRatings();
    }, [token, user?.username]);

    const saveRating = async (cocktailId, rating) => {
        const updatedRatings = { ...ratings, [cocktailId]: rating };
        setRatings(updatedRatings);
        localStorage.setItem('cocktailRatings', JSON.stringify(updatedRatings));

        if (!token || !user?.username) return;

        try {
            await axios.put(
                `${API_URL}/users/${user.username}/info`,
                { ratings: updatedRatings },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'X-Api-Key': API_KEY,
                    },
                }
            );
        } catch (error) {
            console.error('Error saving rating to backend:', error);
        }
    };

    return (
        <RatingContext.Provider value={{ ratings, saveRating }}>
            {children}
        </RatingContext.Provider>
    );
};

export const useRating = () => useContext(RatingContext);