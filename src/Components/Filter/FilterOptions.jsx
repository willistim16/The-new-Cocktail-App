import { useState } from 'react';
import '/src/Components/Filter/FilterOptions.css'

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

    const handleFilterChange = () => {
        onFilterChange({selectedCategory, selectedGlass, selectedIngredient, isAlcoholic});
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
        setIsAlcoholic(prev => (prev === "Alcoholic" ? "Non_Alcoholic" : "Alcoholic"));
        handleFilterChange();
    };
    console.log(toggleAlcoholic)

    return (
        <div>
            <div className="filter-options">
                <div className="filter-option">
                    <button onClick={toggleCategory}>
                        Category {selectedCategory}
                    </button>
                    <select
                        name="selectedCategory"
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            handleFilterChange();
                        }}
                        onKeyDown={handleKeyDown}
                    >
                        <option value="">...</option>
                        <option value="Ordinary Drink">Ordinary Drink</option>
                        <option value="Cocktail">Cocktail</option>
                    </select>
                </div>
                <div className="filter-option">
                    <button onClick={toggleGlass}>
                        Glass type {selectedGlass}
                    </button>
                    <select
                        name="selectedGlass"
                        value={selectedGlass}
                        onChange={(e) => {
                            setSelectedGlass(e.target.value);
                            handleFilterChange();
                        }}
                        onKeyDown={handleKeyDown}
                    >
                        <option value="">...</option>
                        <option value="Cocktail glass">Cocktail glass</option>
                        <option value="Highball glass">Highball glass</option>
                    </select>
                </div>
            </div>
            <div className="filter-options">
                <div className="filter-option">
                    <button onClick={toggleAlcoholic}>
                        {isAlcoholic === "Alcoholic" ? 'Alcoholic' : 'Non-alcoholic'}
                    </button>
                </div>
                <div className="filter-option">
                    <button onClick={toggleIngredient}>
                        Ingredient {selectedIngredient}
                    </button>
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