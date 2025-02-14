import '/src/Components/CocktailList/CocktailList.css'
import Rating from "../Rating/Rating.jsx";
import CocktailCard from "../CocktailCard/CocktailCard.jsx";
import {useFavourites} from "../../Context/FavouritesContext/FavouritesContext.jsx";
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons.jsx";
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";

function CocktailList({cocktails}) {
    const { favourites, addFavourite, removeFavourite } = useFavourites();

    const toggleFavourite = (cocktail) => {
        if (favourites.some((fav) => fav.idDrink === cocktail.idDrink)) {
            removeFavourite(cocktail.idDrink);
        } else {
            addFavourite(cocktail);
        }
    };

    const { theme } = useTheme();

        const saveCocktails = Array.isArray(cocktails) ? cocktails : [];

        return (
            <>
                <div className="cocktail-list-container">
                    {saveCocktails.map((cocktail) => (
                        <div className="found-cocktail-list" key={cocktail.idDrink}>
                            <h2 style={{ color: theme.h2 }}>{cocktail.strDrink}</h2>
                            <img src={cocktail.strDrinkThumb} loading={"lazy"} alt={cocktail.strDrink}/>
                            <div className="link-and-review">
                                <a href={`/CocktailDetailsPage/${cocktail.idDrink}`}>Bekijk details</a>
                                <Rating cocktailId={cocktail.idDrink} />
                                <CocktailCard
                                    key={cocktail.idDrink}
                                    cocktail={cocktail}
                                    isFavourite={favourites.includes(cocktail.idDrink)}
                                    onFavouriteToggle={() => toggleFavourite(cocktail.idDrink)}
                                />
                                <p>Deel je cocktail</p>
                                <SocialMediaButtons
                                    cocktailName={cocktail.name}
                                    cocktailLink={`https://mijncocktailapp.nl/cocktails/${cocktail.id}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
}

export default CocktailList;