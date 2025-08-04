import axios from 'axios';

const BACKEND_API_URL = 'https://api.datavortex.nl/cocktailz';

export const searchCocktailsByName = async (name, token) => {
    try {
        const response = await axios.get(`${BACKEND_API_URL}/cocktails/search?name=${name}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'X-Api-Key': import.meta.env.VITE_API_KEY
            }
        });
        return response.data;  // your backend should return cocktail list JSON here
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        return [];
    }
};


export const searchCocktailsByIngredient = async (ingredient) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        return response.data.drinks || [];
    } catch (error) {
        console.error("Error fetching cocktails by ingredient:", error);
        return [];
    }
};

export const getCocktailsByCategory = (category) =>
    axios.get(`${API_URL}/filter.php?c=${category}`);

export const getCocktailsByGlass = (glass) =>
    axios.get(`${API_URL}/filter.php?g=${glass}`);

export const getCocktailsByIngredient = (ingredient) =>
    axios.get(`${API_URL}/filter.php?i=${ingredient}`);