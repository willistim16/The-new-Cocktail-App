import { useState } from 'react';
import '/src/Pages/SearchPage/searchPage.css'
import { motion } from "framer-motion";

const FilterOptions = ({ onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedGlass, setSelectedGlass] = useState('');
    const [selectedIngredient, setSelectedIngredient] = useState('');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isGlassOpen, setIsGlassOpen] = useState(false);
    const [isIngredientOpen, setIsIngredientOpen] = useState(false);
    const [isAlcoholic, setIsAlcoholic] = useState("Alcoholic");


    const resetFilters = () => {
        setSelectedCategory('');
        setSelectedGlass('');
        setSelectedIngredient('');
        setIsAlcoholic("Alcoholic");
        onFilterChange({ selectedCategory: '', selectedGlass: '', selectedIngredient: '', isAlcoholic: "Alcoholic" });
    };

    const handleFilterChange = (newAlcoholicState = isAlcoholic) => {
        onFilterChange({
            selectedCategory,
            selectedGlass,
            selectedIngredient,
            isAlcoholic: newAlcoholicState,
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onFilterChange({selectedCategory, selectedGlass, selectedIngredient});
        }
    };

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
        setIsGlassOpen(false);
        resetFilters()
    };

    const toggleGlass = () => {
        setIsGlassOpen(!isGlassOpen);
        setIsCategoryOpen(false);
        resetFilters()
    };

    const toggleIngredient = () => {
        setIsIngredientOpen(!isIngredientOpen);
        resetFilters()
    };

    const toggleAlcoholic = () => {
        setIsAlcoholic((prev) => {
            const newAlcoholicState = prev === "Alcoholic" ? "Non_Alcoholic" : "Alcoholic";
            handleFilterChange(newAlcoholicState);
            return newAlcoholicState;
        });
    };



    return (
        <div>
            <div className="filter-options">
                <div className="filter-option">
                    <motion.button
                        onClick={toggleAlcoholic}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 300}}
                    >
                        {isAlcoholic === "Alcoholic" ? 'Alcoholic' : 'Non-alcoholic'}
                    </motion.button>
                </div>
            </div>
            <div className="filter-options">
                <div className="filter-option">
                    <motion.button
                        onClick={toggleCategory}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 300}}
                    >
                        Category {selectedCategory}
                    </motion.button>
                    <select
                        name="selectedCategory"
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            handleFilterChange();
                        }}
                        onKeyDown={handleKeyDown}
                    >
                        <option value="">Find your best cocktail category</option>
                        <option value="Ordinary Drink">Ordinary Drink</option>
                        <option value="Cocktail">Cocktail</option>
                    </select>
                </div>
                <div className="filter-option">
                    <motion.button
                        onClick={toggleGlass}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 300}}
                    >
                        Glass type {selectedGlass}
                    </motion.button>
                    <select
                        name="selectedGlass"
                        value={selectedGlass}
                        onChange={(e) => {
                            setSelectedGlass(e.target.value);
                            handleFilterChange();
                        }}
                        onKeyDown={handleKeyDown}
                    >
                        <option value="">Find your type of cocktail glass</option>
                        <option value="Cocktail glass">Cocktail glass</option>
                        <option value="Highball glass">Highball glass</option>
                    </select>
                </div>
                <div className="filter-option">
                    <motion.button
                        onClick={toggleIngredient}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 300}}
                    >
                        Ingredient {selectedIngredient}
                    </motion.button>
                    <input
                        placeholder="Type ingredient here..."
                        name="selectedIngredient"
                        type="text"
                        value={selectedIngredient}
                        onChange={(e) => {
                            setSelectedIngredient(e.target.value);
                            handleFilterChange();
                        }}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </div>
    )
}
export default FilterOptions;