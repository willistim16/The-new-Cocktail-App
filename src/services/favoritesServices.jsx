import axios from 'axios';

const API_URL = 'https://api.datavortex.nl/cocktailz'
const API_KEY = import.meta.env.VITE_API_KEY;

const token = localStorage.getItem('jwt');

export const getUserFavorites = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/users/{username}/info`, username, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                'X-Api-Key': API_KEY,
            }
        });

        return response.data;

        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        throw new Error('Failed to fetch favorites');
    }
};