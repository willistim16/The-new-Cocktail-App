import { createContext, useContext, useState, useEffect } from 'react';
import useAuth from '/server/useAuth.jsx';

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
    const [ratings, setRatings] = useState({});
    const { token, user } = useAuth(); // Assuming token and user info are in AuthContext

    useEffect(() => {
        const fetchRatings = async () => {
            if (!token) return; // Only fetch if user is logged in

            try {
                const response = await fetch('/api/ratings', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) throw new Error('Failed to fetch ratings');

                const data = await response.json();
                setRatings(data); // Assuming data is { cocktailId: rating } format
            } catch (error) {
                console.error('Error fetching ratings:', error);
            }
        };

        fetchRatings();
    }, [token]);

    const saveRating = async (cocktailId, rating) => {
        const updatedRatings = { ...ratings, [cocktailId]: rating };
        setRatings(updatedRatings);

        if (!token) return; // Only save if user is logged in

        try {
            await fetch('/api/ratings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ cocktailId, rating, userId: user.id }),
            });
        } catch (error) {
            console.error('Error saving rating:', error);
        }
    };

    return (
        <RatingContext.Provider value={{ ratings, saveRating }}>
            {children}
        </RatingContext.Provider>
    );
};

export const useRating = () => useContext(RatingContext);