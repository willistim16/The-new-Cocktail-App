import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SearchBarContainer from "../../Components/SearchBar/SearchBarContainer.jsx";
import { getCocktailsByCategory, getCocktailsByGlass, getCocktailsByIngredient } from '/src/services/cocktailService.jsx';
import axios from "axios";
import FilterOptions from "../../Components/Filter/FilterOptions.jsx";
import CocktailList from "../../Components/CocktailList/CocktailList.jsx";
import {useEffect, useState} from "react";
import '/src/Pages/SearchPage/searchPage.css'
import '/src/Styles/globals.css'


const SearchPage = () => {
    const [cocktails, setCocktails] = useState([]);
    const [filter, setFilter] = useState({
        selectedCategory: '',
        selectedGlass: '',
        selectedIngredient: '',
        isAlcoholic: 'Alcoholic',
    });

useEffect(() => {
    const fetchFilteredCocktails = async () => {
        if (!filter.selectedCategory && !filter.selectedGlass && !filter.selectedIngredient && !filter.isAlcoholic) {
            setCocktails([]);
            return;
        }
        try {
            let response;
            if (filter.selectedCategory) {
                response = await getCocktailsByCategory(filter.selectedCategory);
            } else if (filter.selectedGlass) {
                response = await getCocktailsByGlass(filter.selectedGlass);
            } else if (filter.selectedIngredient) {
                response = await getCocktailsByIngredient(filter.selectedIngredient);
            } else if (filter.isAlcoholic) {
                const alcoholicFilter = filter.isAlcoholic === "Alcoholic" ? "Alcoholic" : "Non_Alcoholic";
                response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholicFilter}`);
            }
            setCocktails(response.data.drinks);
        } catch (error) {
            console.error("Error fetching cocktails:", error);
        }
    };

    fetchFilteredCocktails();
    }, [filter]);

    const handleFilterChange = (filteredCocktails) => {
        setCocktails(filteredCocktails);
    };


    return (
        <>
            <div className="header-search-page">
                <Header
                    title="Taste the range of Cocktails!"
                />
            </div>
            <main>
                <div className="search-your-cocktails">
                    <h2>Search your cocktails</h2>
                </div>
                    <SearchBarContainer/>
                <div>
                    <FilterOptions onFilterChange={handleFilterChange} setFilter={setFilter} />
                    <CocktailList cocktails={cocktails}/>
                </div>
            </main>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default SearchPage;