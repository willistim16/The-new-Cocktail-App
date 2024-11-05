import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import CocktailSearch from "../../Components/AllCocktails/CocktailSearch/CocktailSearch.jsx";
import AllCocktails from "../../Components/AllCocktails/AllCocktails.jsx";
// import SearchBar from "../../Components/CocktailFilter/SearchBar.jsx";

function AllCocktailPage() {

        return (
        <>
            <div className="headerAllCocktailsPage">
                <Header
                    title="Feel the range of Cocktails!"
                />
            </div>
            <main>
                <div className="searchBar-container">
                    <CocktailSearch/>
                </div>
                <AllCocktails/>
            </main>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default AllCocktailPage