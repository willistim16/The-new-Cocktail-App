import Header from "../Components/Header.jsx";
import '/src/Styles/globals.css'
import Footer from "../Components/Footer.jsx";
import CocktailDetails from "../Components/CocktailDetails.jsx";
import '/src/Styles/SingleCocktailPage.css'

function SingleCocktailPage() {

    return (
        <>
            <div className="SingleCocktailPageHeader">
                <Header title="Single cocktail Page" content="Get to know everything there is to know about your favorite cocktail!"/>
            </div>
            <main>
                <CocktailDetails />
            </main>
            <Footer/>
        </>
    )
}

export default SingleCocktailPage