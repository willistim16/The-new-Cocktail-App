import {useEffect, useState} from 'react';
import { searchCocktailsByName } from '/src/services/cocktailService.jsx';
import CocktailList from '/src/Components/CocktailList/CocktailList.jsx';
import '/src/Components/SearchBar/SearchBar.css'


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
                setCocktails([]);  // Clear the list if the search term is empty
            }
        };

        fetchCocktails();
    }, [searchTermName]);

    const handleSearchByName = async () => {
        if (searchTermName.trim()) {
            const results = await searchCocktailsByName(searchTermName);
            setCocktails(results);
        } else {
            setCocktails([]);  // Clear the list if the search term is empty
        }
    };

    return (

        <div className="search-container">
            <div className="searchBar-container">
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="Search by name"
                        value={searchTermName}
                        onChange={(e) => setSearchTermName(e.target.value)}
                        // onKeyDown={(e) => handleKeyPress(e, 'name')}
                    />
                    <button onClick={handleSearchByName}>Search</button>
                </div>
                {/*<div>*/}
                {/*    <input*/}
                {/*        name="ingredient"*/}
                {/*        type="text"*/}
                {/*        placeholder="Search by ingredient"*/}
                {/*        value={searchTermIngredient}*/}
                {/*        onChange={(e) => setSearchTermIngredient(e.target.value)}*/}
                {/*        onKeyDown={(e) => handleKeyPress(e, 'ingredient')}*/}
                {/*    />*/}
                {/*    <button onClick={handleSearchByIngredient}>Search</button>*/}
                {/*</div>*/}
            </div>
            {cocktails.length > 0 && <CocktailList cocktails={cocktails}/>}
        </div>
    );
}

export default SearchBarContainer;