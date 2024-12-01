import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import '/src/Pages/MijnFavorieten/MijnFavorieten.css'
import { useFavourites } from "/src/Context/FavouritesContext/FavouritesContext.jsx";
import Rating from "../../Components/Rating/Rating.jsx";
import { useState, useEffect } from "react";
import { usePreferences } from "/src/Context/PreferencesContext/PreferencesContext.jsx";


function MijnFavorieten() {

    const { favourites, removeFavourite } = useFavourites();
    const { preferences } = usePreferences();

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('cocktailNotes');
        return savedNotes ? JSON.parse(savedNotes) : {};
    });

    useEffect(() => {
        localStorage.setItem('cocktailNotes', JSON.stringify(notes));
    }, [notes]);

    const handleNoteChange = (cocktailId, note) => {
        setNotes(prevNotes => ({...prevNotes, [cocktailId]: note}));
    };

            return (
            <>
                <div className={`favorieten-page-header ${preferences.theme === 'dark' ? 'dark-theme' : ''}`}>
                    <Header title="Favorieten"
                            content="Al jouw favoriete cocktails op een rij. Click op de foto voor meer informatie over het bereiden, de ingredienten en meer!"/>
                </div>
                <main>
                    {favourites.length === 0 ? (
                        <div className="nog-geen-favorieten">
                            <div>Nog geen favorieten!</div>
                        </div>
                    ) : (
                        <div>
                            <div className="favo-h1">
                                <h1>Jouw favorieten</h1>
                            </div>
                            <div className="favourite-item-container">
                                {favourites.map((cocktail) => (
                                    <div key={cocktail.idDrink} className="favourite-item">
                                        <h2>{cocktail.strDrink}</h2>
                                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                                        <Rating cocktailId={cocktail.idDrink}/>
                                        <div className="notes-area">
                                            <textarea
                                                placeholder="Voeg een notitie toe..."
                                                value={notes[cocktail.idDrink] || ""}
                                                onChange={(e) => handleNoteChange(cocktail.idDrink, e.target.value)}
                                            />
                                            <button onClick={() => removeFavourite(cocktail.idDrink)}>
                                                Verwijderen uit favorieten
                                            </button>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    )}
                </main>
                <Footer/>
            </>
            )

}


export default MijnFavorieten