import Header from "../../Components/Header/Header.jsx";
import '/src/Styles/globals.css'
import Footer from "../../Components/Footer/Footer.jsx";
import CocktailDetails from "../../Components/CocktailDetails/CocktailDetails.jsx";
import '/src/Pages/CocktailDetailsPage/CocktailDetailsPage.css'

function SingleCocktailPage() {

    return (
        <>
            <div className="single-cocktail-page-header">
                <Header
                    title="Single cocktail Page"
                    content="Get to know everything there is to know about your favorite cocktail!"
                />
            </div>
            <main>
                <CocktailDetails />
            </main>
            <Footer/>
        </>
    )
}

export default SingleCocktailPage