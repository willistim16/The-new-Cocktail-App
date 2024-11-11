import { FaHeart } from 'react-icons/fa';
import { useFavourites } from '/src/FavouritesContext/FavouritesContext.jsx';


function CocktailCard({ cocktail }) {
    const { favourites, addFavourite, removeFavourite } = useFavourites();
    const isFavourite = favourites.some(fav => fav.idDrink === cocktail.idDrink);

    const handleToggleFavourite = () => {
        if (isFavourite) {
            removeFavourite(cocktail.idDrink);
        } else {
            addFavourite(cocktail);
        }
    };

    return (
        <div className="cocktail-card">
            <h3>{cocktail.strDrink}</h3>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <div onClick={handleToggleFavourite} className="favourite-icon">
                <FaHeart color={isFavourite ? 'red' : 'grey'} />
            </div>
        </div>
    );
}

export default CocktailCard;


