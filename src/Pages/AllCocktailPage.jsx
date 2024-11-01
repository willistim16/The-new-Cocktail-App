import AllCocktails from "../Components/AllCocktails.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

function AllCocktailPage() {

    return (
        <body>
        <div className="headerAllCocktailsPage">
            <Header
                title="Feel the range of Cocktails!"
            />
        </div>
        <main>
            <AllCocktails/>
        </main>
        <div>
            <Footer/>
        </div>
        </body>
    )
}

export default AllCocktailPage