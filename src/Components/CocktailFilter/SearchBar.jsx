import { useState, useEffect } from 'react';
import '/src/Components/CocktailFilter/CocktailFilter.css'

const SearchBar = () => {
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCocktails, setFilteredCocktails] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch all cocktails from the database/API
        const fetchCocktails = async () => {
            try {
                const response = await fetch(`/api/cocktails`);
                const data = await response.json();
                setCocktails(data);  // Store all cocktails in state
            } catch (error) {
                console.log('Error fetching cocktails:', error);
            }
        };

        fetchCocktails();
    }, []);

    useEffect(() => {
        // Filter cocktails based on the search term
        const filterCocktails = () => {
            const results = cocktails.filter(cocktail =>
                cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCocktails(results);
            console.log(results)
        };

        filterCocktails();
    }, [searchTerm, cocktails]);

    return (
        <div>
            <div className="searchBar-container">
                    <input
                        type="text"
                        placeholder="Search cocktails"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
            </div>
            <div>
                {filteredCocktails.map((cocktail) => (
                    <div key={cocktail.id}>
                        <h2>{cocktail.name}</h2>
                        <img src={cocktail.imageUrl} alt={cocktail.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;