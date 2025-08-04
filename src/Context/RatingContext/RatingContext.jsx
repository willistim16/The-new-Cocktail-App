import { createContext, useContext, useState, useEffect } from 'react';
import apiClient from '/src/api/apiClient.js';  // Use centralized axios instance
import useAuth from '/server/useAuth.jsx';

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
                const response = await apiClient.get(`/users/${user.username}/info`);
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
            await apiClient.put(`/users/${user.username}/info`, { ratings: updatedRatings });
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
