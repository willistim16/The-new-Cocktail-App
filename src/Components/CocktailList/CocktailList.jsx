
import '/src/Components/CocktailList/CocktailList.css'
import Rating from "../Rating/Rating.jsx";
import CocktailCard from "../CocktailCard/CocktailCard.jsx";
import {useFavourites} from "../../FavouritesContext/FavouritesContext.jsx";

function CocktailList({cocktails}) {
    const { favourites, addFavourite, removeFavourite } = useFavourites();

    const toggleFavourite = (cocktail) => {
        if (favourites.some((fav) => fav.idDrink === cocktail.idDrink)) {
            removeFavourite(cocktail.idDrink);
        } else {
            addFavourite(cocktail);
            console.log("Current favourites:", favourites);
        }
    };

        const safeCocktails = Array.isArray(cocktails) ? cocktails : [];

        return (
            <>
                <div className="cocktail-list-container">
                    {safeCocktails.map((cocktail) => (
                        <div className="found-cocktail-list" key={cocktail.idDrink}>
                            <h2>{cocktail.strDrink}</h2>
                            <img src={cocktail.strDrinkThumb} loading={"lazy"} alt={cocktail.strDrink}/>
                            <div className="linkAndReview">
                                <a href={`/CocktailDetailsPage/${cocktail.idDrink}`}>Bekijk details</a>
                                <Rating/>
                                <CocktailCard
                                    key={cocktail.idDrink}
                                    cocktail={cocktail}
                                    isFavourite={favourites.includes(cocktail.idDrink)}
                                    onFavouriteToggle={() => toggleFavourite(cocktail.idDrink)} // Pass toggle function
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }

export default CocktailList;