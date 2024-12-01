import { createContext, useContext, useState, useEffect } from 'react';
import useAuth from '/server/useAuth.jsx';

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
    const [ratings, setRatings] = useState({});
    const { token, user } = useAuth();

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
                setRatings(data);
            } catch (error) {
                console.error('Error fetching ratings:', error);
            }
        };

        fetchRatings();
    }, [token]);

    const saveRating = async (cocktailId, rating) => {
        const updatedRatings = { ...ratings, [cocktailId]: rating };
        setRatings(updatedRatings);

        if (!token) return;

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

// eslint-disable-next-line react-refresh/only-export-components
export const useRating = () => useContext(RatingContext);