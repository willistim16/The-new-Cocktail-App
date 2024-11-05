import { useState } from 'react';
import { searchCocktailsByName } from '/src/services/cocktailService.jsx';
import CocktailList from '/src/Components/CocktailList/CocktailList.jsx';

function CocktailSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);

    const handleSearch = async () => {
        if (searchTerm.trim()) {
            const results = await searchCocktailsByName(searchTerm);
            setCocktails(results);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for cocktails..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {/* Displaying the results */}
            <CocktailList cocktails={cocktails} />
        </div>
    );
}

export default CocktailSearch;