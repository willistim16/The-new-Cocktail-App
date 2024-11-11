import axios from 'axios';
// import allCocktails from "../Components/AllCocktails/AllCocktails.jsx";

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const searchCocktailsByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/search.php?s=${name}`);
        const allCocktails = response.data.drinks;

        // Return the filtered cocktails directly
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
        const allCocktails = response.data.drinks || [];
        return allCocktails.filter(cocktail =>
                cocktail.strIngredient?.toLowerCase().includes(ingredient.toLowerCase())  ||
                cocktail.strIngredient2?.toLowerCase().includes(ingredient.toLowerCase()) ||
                cocktail.strIngredient3?.toLowerCase().includes(ingredient.toLowerCase())
        );
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