import '/src/Styles/SearchPage.css'
import '/src/Styles/globals.css'
import '/src/Styles/SearchTile.css'
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import SearchTile from "../Components/SearchTile.jsx";
import FromAToZ from "/src/assets/Images/FromAToZ.jpg";
import AllCocktails from "/src/assets/Images/All-cocktails.jpg"
import Categorie from "/src/assets/Images/Categorie.png"
import Mocktails from "/src/assets/Images/Mocktails.jpg"
import Ingredienten from "/src/assets/Images/Ingredienten.jpg"

function SearchPage() {
    return (
        <>
                <div className="headerSearchPage">
                    <Header title="Search, Filter & Find!" content="Search and/or filter to find your favorite cocktail!" />
                </div>
            <main>
                <div className="SearchOptionsSection">
                    <SearchTile
                        link={"/AllCocktailPage"}
                        title={"All Cocktails"}
                        imageUrl={AllCocktails}
                    />
                    <SearchTile
                        link={"/AllCocktailPage"}
                        title={"Filter A-Z"}
                        imageUrl={FromAToZ}
                        content={"a t/m z"}
                    />

                    <SearchTile
                        link={"/AllCocktailPage"}
                        title={"Categorie"}
                        imageUrl={Categorie}
                        content={""}
                    />
                    <SearchTile
                        link={"/AllCocktailPage"}
                        title={"Mocktails"}
                        imageUrl={Mocktails}
                    />
                    <SearchTile
                        link={"/AllCocktailPage"}
                        title={"Ingredienten"}
                        imageUrl={Ingredienten}
                    />
                </div>
            </main>
            <Footer/>
        </>
)
}

export default SearchPage