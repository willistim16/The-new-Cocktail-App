import { useEffect, useState } from "react";
import { searchCocktailsByName, searchCocktailsByIngredient } from "/src/services/cocktailService.jsx";
import CocktailList from "/src/Components/CocktailList/CocktailList.jsx";
import "/src/Pages/SearchPage/searchPage.css";

function SearchBarContainer() {
    const [searchTermName, setSearchTermName] = useState("");
    const [searchTermIngredient, setSearchTermIngredient] = useState("");
    const [cocktails, setCocktails] = useState([]);
    const [isSearchingByName, setIsSearchingByName] = useState(true);

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                if (isSearchingByName && searchTermName.trim()) {
                    const results = await searchCocktailsByName(searchTermName);
                    setCocktails(results);
                } else if (!isSearchingByName && searchTermIngredient.trim()) {
                    const results = await searchCocktailsByIngredient(searchTermIngredient);
                    setCocktails(results);
                } else {
                    setCocktails([]);
                }
            } catch (error) {
                console.error("Error fetching cocktails:", error);
                setCocktails([]);
            }
        };

        fetchCocktails();
    }, [searchTermName, searchTermIngredient, isSearchingByName]);

    const handleNameChange = (e) => {
        setSearchTermName(e.target.value);
        setIsSearchingByName(true);
        setSearchTermIngredient("");
    };

    const handleIngredientChange = (e) => {
        setSearchTermIngredient(e.target.value);
        setIsSearchingByName(false);
        setSearchTermName("");
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
                        onChange={handleNameChange}
                    />
                </div>
                <div className="search-option">
                    <input
                        name="ingredient"
                        type="text"
                        placeholder="Search by ingredient"
                        value={searchTermIngredient}
                        onChange={handleIngredientChange}
                    />
                </div>
            </div>
            {cocktails.length > 0 && <CocktailList cocktails={cocktails} />}
        </div>
    );
}

export default SearchBarContainer;