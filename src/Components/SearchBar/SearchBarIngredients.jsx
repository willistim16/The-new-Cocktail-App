import { useState } from 'react';
import { searchCocktailsByIngredient } from '/src/services/cocktailService.jsx';
import CocktailList from '/src/Components/CocktailList/CocktailList.jsx';
import '/src/Pages/SearchPage/searchPage.css'

function SearchBarIngredients() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);

    const handleSearch = async () => {
        if (searchTerm.trim()) {
            const results = await searchCocktailsByIngredient(searchTerm);
            setCocktails(results);
        }
    };

    return (
        <div className="search-container">
            <div className="searchBar-container">
                <input
                    type="text"
                    placeholder="Search by ingredient"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <CocktailList cocktails={cocktails} />
        </div>
    );
}

export default SearchBarIngredients;