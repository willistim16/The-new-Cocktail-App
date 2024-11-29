import { useFavourites } from '/src/Context/FavouritesContext/FavouritesContext.jsx';
import { motion } from 'framer-motion';
import '/src/Components/CocktailCard/CocktailCard.css'

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



    const BouncyButton = () => (
        <motion.button
            className="bouncy-button"
            onClick={handleToggleFavourite}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            Voeg toe aan favorieten
        </motion.button>
    );

    return (
        <>
        <div className="cocktail-card">
                <BouncyButton/>
        </div>
</>
    );
}

export default CocktailCard;


