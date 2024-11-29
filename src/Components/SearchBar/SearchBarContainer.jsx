import {useEffect, useState} from 'react';
import { searchCocktailsByName } from '/src/services/cocktailService.jsx';
import CocktailList from '/src/Components/CocktailList/CocktailList.jsx';
import '/src/Pages/SearchPage/searchPage.css'

function SearchBarContainer() {
    const [searchTermName, setSearchTermName] = useState('');
    // const [searchTermIngredient, setSearchTermIngredient] = useState('');
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchCocktails = async () => {
            if (searchTermName.trim()) {
                const results = await searchCocktailsByName(searchTermName);
                setCocktails(results);
            } else {
                setCocktails([]);
            }
        };

        fetchCocktails();
    }, [searchTermName]);

    const handleSearchByName = async () => {
        if (searchTermName.trim()) {
            const results = await searchCocktailsByName(searchTermName);
            setCocktails(results);
        } else {
            setCocktails([]);
        }
    };

    return (

        <div className="search-container">
            <div className="searchBar-container">
                <div className="search-option">
                    <input
                        name="name"
                        type="text"
                        placeholder="Search by name"
                        value={searchTermName}
                        onChange={(e) => setSearchTermName(e.target.value)}
                    />
                    <button onClick={handleSearchByName}>Search</button>
                </div>
            </div>
            {cocktails.length > 0 && <CocktailList cocktails={cocktails}/>}
        </div>
    );
}

export default SearchBarContainer;