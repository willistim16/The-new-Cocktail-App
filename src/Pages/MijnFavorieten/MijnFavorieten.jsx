import { useFavourites } from '/src/Context/FavouritesContext/FavouritesContext.jsx';
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Rating from "../../Components/Rating/Rating.jsx";
import { useState, useEffect } from "react";
import '/src/Pages/MijnFavorieten/MijnFavorieten.css';
import '/src/Styles/globals.css'
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";
import {motion} from "framer-motion";
import Layout from "../../Components/Layout/Layout.jsx";

function MijnFavorieten() {
    const { favourites, removeFavourite } = useFavourites();

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('cocktailNotes');
        return savedNotes ? JSON.parse(savedNotes) : {};
    });

    useEffect(() => {
        localStorage.setItem('cocktailNotes', JSON.stringify(notes));
    }, [notes]);

    const handleNoteChange = (cocktailId, note) => {
        setNotes((prevNotes) => ({ ...prevNotes, [cocktailId]: note }));
    };

    const { theme } = useTheme();

    return (
        <>
            <Layout>
            <div className="favorieten-page-header">
                <Header/>
            </div>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
            >
                {favourites.length === 0 ? (
                    <div className="nog-geen-favorieten">
                        <div>Nog geen favorieten!</div>
                    </div>
                ) : (
                    <div>
                        <div className="favourite-item-container">
                            {favourites.map((cocktail) => (
                                <div key={cocktail.idDrink} className="favourite-item">
                                    <h2 style={{color: theme.h2}}>{cocktail.strDrink}</h2>
                                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                                    <Rating cocktailId={cocktail.idDrink}/>
                                    <textarea
                                        id={`note-${cocktail.idDrink}`}
                                        name={`note-${cocktail.idDrink}`}
                                        placeholder="Voeg een notitie toe..."
                                        value={notes[cocktail.idDrink] || ''}
                                        onChange={(e) => handleNoteChange(cocktail.idDrink, e.target.value)}
                                    />

                                    <a href={`/CocktailDetailsPage/${cocktail.idDrink}`}>Bekijk details</a>

                                    <motion.button
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}
                                        transition={{type: 'spring', stiffness: 300}}
                                        onClick={() => removeFavourite(cocktail.idDrink)}
                                    >
                                        Verwijderen uit favorieten
                                    </motion.button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
            </Layout>
            <Footer />
        </>
    );
}

export default MijnFavorieten;