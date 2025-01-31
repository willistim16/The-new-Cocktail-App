import { useEffect, useState, useRef } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SearchBarContainer from "../../Components/SearchBarContainer/SearchBarContainer.jsx";
import { getCocktailsByCategory, getCocktailsByGlass, getCocktailsByIngredient } from "/src/services/cocktailService.jsx";
import axios from "axios";
import FilterOptions from "../../Components/FilterOptions/FilterOptions.jsx";
import CocktailList from "../../Components/CocktailList/CocktailList.jsx";
import "/src/Pages/SearchPage/searchPage.css";
import "/src/Styles/globals.css";
import { useTheme } from "../../Context/ThemeContext/ThemeContext.jsx";
import { motion } from "framer-motion";
import Layout from "../../Components/Layout/Layout.jsx";

const SearchPage = () => {
    const [cocktails, setCocktails] = useState([]);
    const [filter, setFilter] = useState({
        selectedCategory: "",
        selectedGlass: "",
        selectedIngredient: "",
        isAlcoholic: "Alcoholic",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCocktails = cocktails.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(cocktails.length / itemsPerPage);

    const cocktailListRef = useRef(null);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        cocktailListRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleFirstPage = () => {
        handlePageChange(1);
    };

    const handleLastPage = () => {
        handlePageChange(totalPages);
    };


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

    const resetFilters = () => {
        setFilter({
            selectedCategory: "",
            selectedGlass: "",
            selectedIngredient: "",
            isAlcoholic: "Alcoholic",
        });
        setCocktails([]);
    };

    const { theme } = useTheme();

    return (
        <>
            <Layout>
            <div className="search-page-header">
                <Header />
            </div>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
            >

                <div className="search-page-explination-h1">
                    <h1 style={{color: theme.h1}}>Welkom op de zoeken & filteren pagina!</h1>
                </div>

                <div className="search-page-explination-container">
                    <h2 style={{color: theme.h2}}>Uitleg zoeken en filteren</h2>
                    <ul>
                        <li>Zoekpagina: Vind eenvoudig jouw favoriete cocktails.</li>
                        <li>Zoeken: Typ een trefwoord om te zoeken op naam of ingrediënten.</li>
                        <li>Filters: Verfijn je zoekopdracht met categorie, glas, ingrediënt of alcoholische opties.</li>
                        <li>Resultaten: Gevonden cocktails verschijnen direct, met paginering om door de lijst te bladeren.</li>
                        <li>Reset: Klik op "Reset Filters" om opnieuw te beginnen.</li>
                    </ul>

                    <h3 style={{color: theme.h3}}> Veel zoekplezier! 🎉</h3>
                </div>

                <div className="reset-bouncy-button-search-page">
                    <motion.button
                        onClick={resetFilters}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 300}}
                        className="reset-button"
                    >
                        Reset Filters
                    </motion.button>
                </div>

                <FilterOptions
                    onFilterChange={handleFilterChange}
                    setFilter={setFilter}/>
                <div ref={cocktailListRef}></div>
                    <SearchBarContainer/>



                <div className="pagination-controls">
                    <button onClick={handleFirstPage} disabled={currentPage === 1}>
                        &laquo;
                    </button>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        &lsaquo;
                    </button>
                    {Array.from({length: totalPages}, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        &rsaquo;
                    </button>
                    <button onClick={handleLastPage} disabled={currentPage === totalPages}>
                        &raquo;
                    </button>
                </div>

                <p className="results-count">
                    <span>Resultaten: </span>
                    {startIndex + 1}–{Math.min(startIndex + itemsPerPage, cocktails.length)} van {cocktails.length}
                </p>

                <CocktailList cocktails={paginatedCocktails}/>

                <div className="pagination-controls">
                <button onClick={handleFirstPage} disabled={currentPage === 1}>
                        &laquo;
                    </button>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        &lsaquo;
                    </button>
                    {Array.from({length: totalPages}, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        &rsaquo;
                    </button>
                    <button onClick={handleLastPage} disabled={currentPage === totalPages}>
                        &raquo;
                    </button>
                </div>
            </main>
            </Layout>
            <Footer/>
        </>
    );
};

export default SearchPage;