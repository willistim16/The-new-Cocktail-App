import '/src/Pages/SearchPage/SearchPage.css'
import '/src/Styles/globals.css'
import '/src/Components/SearchTile/SearchTile.css'
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SearchTile from "../../Components/SearchTile/SearchTile.jsx";
import FromAToZ from "/src/assets/Images/FromAToZ.jpg";
import AllCocktails from "/src/assets/Images/All-cocktails.jpg"
import Categorie from "/src/assets/Images/Categorie.png"
import Mocktails from "/src/assets/Images/Mocktails.jpg"
import Ingredienten from "/src/assets/Images/Ingredienten.jpg"

function SearchPage() {
    return (
        <>
                <div className="headerSearchPage">
                    <Header title="Zoek, filter en vindt jouw favoriete cocktails!" content="Zoek op naam, alfabet, ingredient of categorie. Of filter op alcoholisch, soort of glas." />
                </div>
            <main>
                <div className="SearchOptionsSection">
                    <SearchTile
                        link={"/AllCocktailPage"}
                        title={"Zoeken in alle cocktails"}
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