import axios from 'axios';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const searchCocktailsByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/search.php?s=${name}`);
        return response.data.drinks || []; // Returns empty array if no drinks are found
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        return []; // Returns empty array in case of error
    }
};