import {createContext, useContext, useState} from 'react';

const FavouritesContext = createContext();


export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (cocktail) => {
        setFavourites((prevFavourites) => {
            return prevFavourites.some((fav) => fav.idDrink === cocktail.idDrink)
                ? prevFavourites
                : [...prevFavourites, cocktail];
        });
    };

    const removeFavourite = (idDrink) => {
        setFavourites((prevFavourites) =>
            prevFavourites.filter((cocktail) => cocktail.idDrink !== idDrink)
        );
    };

    return (
        <FavouritesContext.Provider value={{favourites, addFavourite, removeFavourite}}>
            {children}
        </FavouritesContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFavourites = () => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavourites must be used within a FavouritesProvider');
    }
    return context;
};
