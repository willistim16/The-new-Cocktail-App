import { useFavourites } from '/src/Context/FavouritesContext/FavouritesContext.jsx';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '/src/Components/CocktailCard/CocktailCard.css';

function CocktailCard({ cocktail }) {
    const { favourites, addFavourite, removeFavourite } = useFavourites();
    const navigate = useNavigate();
    const isFavourite = favourites.some(fav => fav.idDrink === cocktail.idDrink);

    const handleToggleFavourite = () => {
        if (isFavourite) {
            removeFavourite(cocktail.idDrink);
        } else {
            addFavourite(cocktail);
        }

    };

        const handleGoToFavorites = () => {
            navigate('/MijnFavorieten');
        }

        const buttonStyles = {
            backgroundColor: isFavourite ? 'orangered' : 'navajowhite',
            color: isFavourite ? 'navajowhite' : 'orangered',
            border: '2px solid orangered',
    };

    return (
        <div className="cocktail-card">
            {isFavourite ? (
                <button
                    className="bouncy-button favourited"
                    style={buttonStyles}
                    disabled
                >
                    In favorieten lijst
                </button>
            ) : (
                <motion.button
                    className="bouncy-button"
                    style={buttonStyles}
                    onClick={handleToggleFavourite}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    Voeg toe aan favorieten
                </motion.button>
            )}

            {isFavourite && (
                <motion.button
                    className="go-to-favorites-button"
                    onClick={handleGoToFavorites}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    Ga naar mijn favorieten
                </motion.button>
            )}
        </div>
    );
}

export default CocktailCard;


