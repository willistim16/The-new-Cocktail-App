// src/services/favoritesServices.js
import apiClient from '../api/apiClient';

export const getUserFavorites = async (username) => {
    try {
        const response = await apiClient.get(`/users/${username}/info`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch favorites:', error);
        throw new Error('Failed to fetch favorites');
    }
};
