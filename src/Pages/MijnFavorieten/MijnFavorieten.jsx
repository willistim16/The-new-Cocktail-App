import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import '/src/Pages/MijnFavorieten/MijnFavorieten.css'
import { useFavourites } from "/src/FavouritesContext/FavouritesContext.jsx";

function MijnFavorieten() {

    const { favourites, removeFavourite } = useFavourites();
    console.log("Current favourites:", favourites);// Access the favourites list from context
    {
        return (
            <>
                <div className="favorietenPageHeader">
                    <Header title="Favorieten"
                            content="Al jouw favoriete cocktails op een rij. Click op de foto voor meer informatie over het bereiden, de ingredienten en meer!"/>
                </div>
                <main>
                    {favourites.length === 0 ? (
                        <div className="nogGeenFavorieten">
                            <div>Nog geen favorieten!</div>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <h1>Jouw favorieten</h1>
                                {favourites.map((cocktail) => (
                                    <div key={cocktail.idDrink} className="favourite-item">
                                        <h2>{cocktail.strDrink}</h2>
                                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                                        <button onClick={() => removeFavourite(cocktail.idDrink)}>
                                            Verwijderen uit favorieten
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
                <Footer/>
            </>
        )
    }
}


export default MijnFavorieten