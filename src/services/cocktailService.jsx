import axios from 'axios';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const searchCocktailsByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/search.php?s=${name}`);
        const allCocktails = response.data.drinks;

        return Array.isArray(allCocktails)
            ? allCocktails.filter(cocktail =>
                cocktail.strDrink.toLowerCase().includes(name.toLowerCase())
            )
            : [];
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