import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FilterOptions = ({ onFilterChange, setFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedGlass, setSelectedGlass] = useState("");
    const [isAlcoholic, setIsAlcoholic] = useState("Alcoholic");
    const [categories, setCategories] = useState([]);
    const [glassTypes, setGlassTypes] = useState([]);

    useEffect(() => {
        const fetchFilterOptions = async () => {
            try {
                // Fetch categories from your backend
                const categoryResponse = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
                const categoryData = await categoryResponse.json();
                setCategories(categoryData); // Assuming backend returns an array of strings or objects with category names

                // Fetch glass types from your backend
                const glassResponse = await fetch(`${import.meta.env.VITE_API_URL}/glasses`);
                const glassData = await glassResponse.json();
                setGlassTypes(glassData); // Assuming similar array

            } catch (error) {
                console.error("Error fetching filter options:", error);
            }
        };

        fetchFilterOptions();
    }, []);

    const fetchCocktails = async (
        category = selectedCategory,
        glass = selectedGlass,
        alcoholic = isAlcoholic
    ) => {
        try {
            // Construct your backend query params for filtering
            let queryParams = new URLSearchParams();

            if (category) queryParams.append("category", category);
            if (alcoholic) queryParams.append("alcoholic", alcoholic);
            if (glass) queryParams.append("glass", glass);

            const url = `${import.meta.env.VITE_API_URL}/cocktails/filter?${queryParams.toString()}`;

            const response = await fetch(url);
            const data = await response.json();

            onFilterChange(data); // Assuming backend returns an array of cocktail objects

            setFilter({
                selectedCategory: category,
                selectedGlass: glass,
                isAlcoholic: alcoholic,
            });
        } catch (error) {
            console.error("Error fetching filtered cocktails:", error);
        }
    };

    const handleFilterChange = (filterType, value) => {
        let updatedCategory = filterType === "category" ? value : selectedCategory;
        let updatedGlass = filterType === "glass" ? value : selectedGlass;
        let updatedIsAlcoholic = filterType === "alcoholic" ? value : isAlcoholic;

        setSelectedCategory(updatedCategory);
        setSelectedGlass(updatedGlass);
        setIsAlcoholic(updatedIsAlcoholic);

        fetchCocktails(updatedCategory, updatedGlass, updatedIsAlcoholic);
    };

    return (
        <div>
            <div className="alcoholic-buttons">
                <motion.button
                    onClick={() =>
                        handleFilterChange(
                            "alcoholic",
                            isAlcoholic === "Alcoholic" ? "Non_Alcoholic" : "Alcoholic"
                        )
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={isAlcoholic === "Alcoholic" ? "active" : ""}
                >
                    {isAlcoholic === "Alcoholic" ? "Alcoholic" : "Non-alcoholic"}
                </motion.button>
            </div>
            <div className="filter-options-container">
                <div className="filter-option">
                    <select
                        name="selectedCategory"
                        value={selectedCategory}
                        onChange={(e) => handleFilterChange("category", e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Kies een Categorie...</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter-option">
                    <select
                        name="selectedGlass"
                        value={selectedGlass}
                        onChange={(e) => handleFilterChange("glass", e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Kies type Glas...</option>
                        {glassTypes.map((glass) => (
                            <option key={glass} value={glass}>
                                {glass}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterOptions;
