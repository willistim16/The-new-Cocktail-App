import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SearchBarContainer from "../../Components/SearchBar/SearchBarContainer.jsx";
import AllCocktails from "../../Components/AllCocktails/AllCocktails.jsx";
import '/src/Pages/HomePage/Home.css'
import { getCocktailsByCategory, getCocktailsByGlass, getCocktailsByIngredient } from '/src/services/cocktailService.jsx';
import axios from "axios";
import FilterOptions from "../../Components/Filter/FilterOptions.jsx";
import CocktailList from "../../Components/CocktailList/CocktailList.jsx";
import {useEffect, useState} from "react";


const SearchPage = () => {
    const [cocktails, setCocktails] = useState([]);
    const [filter, setFilter] = useState({
        selectedCategory: '',
        selectedGlass: '',
        selectedIngredient: '',
    });

useEffect(() => {
    const fetchFilteredCocktails = async () => {
        if (!filter.selectedCategory && !filter.selectedGlass && !filter.selectedIngredient) {
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
            } else {
                response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
            }
            setCocktails(response.data.drinks);
        } catch (error) {
            console.error("Error fetching cocktails:", error);
        }
    };

    fetchFilteredCocktails();
    }, [filter]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };


    return (
        <>
            <div className="headerAllCocktailsPage">
                <Header
                    title="Feel the range of Cocktails!"
                />
            </div>
            <main>
                <div className="search-your-cocktails">
                <h2>Search your cocktails</h2>
                </div>
                <div className="search-buttons-container">
                    <div>
                        <SearchBarContainer/>
                    </div>
                </div>
                <div className="bannerInbetween">
                    <img alt="banner inbetween" src="/src/assets/Images/Banner.jpg"/>
                </div>
                <div className="all-cocktails">
                    <h2>Filter your cocktails</h2>
                </div>
                <div>
                    <FilterOptions onFilterChange={handleFilterChange}/>
                    <CocktailList cocktails={cocktails}/>
                </div>
                <div className="all-cocktails">
                    <h2>All Cocktails</h2>
                </div>
                    <AllCocktails/>
            </main>
            <div>
            <Footer/>
            </div>
        </>
    )
}

    export default SearchPage