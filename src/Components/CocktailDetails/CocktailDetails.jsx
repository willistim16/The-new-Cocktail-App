import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '/src/Components/CocktailDetails/CocktailDetails.css';
import '/src/Components/Header/Header.css';
import Rating from "../Rating/Rating.jsx";
import useAuth from '/server/useAuth.jsx';
import {motion} from "framer-motion";
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";
import CocktailCard from "../CocktailCard/CocktailCard.jsx";
import {useFavourites} from "../../Context/FavouritesContext/FavouritesContext.jsx";

const CocktailDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [cocktail, setCocktail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { theme } = useTheme();
    const { favourites, addFavourite, removeFavourite } = useFavourites();

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('cocktailNotes');
        const parsedNotes = savedNotes ? JSON.parse(savedNotes) : {};
        return parsedNotes;
    });

    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchCocktailDetails = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cocktail details');
                }
                const data = await response.json();
                if (data.drinks && data.drinks.length > 0) {
                    setCocktail(data.drinks[0]);
                } else {
                    setError('Cocktail not found');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCocktailDetails();
    }, [id]);

    useEffect(() => {
        localStorage.setItem('cocktailNotes', JSON.stringify(notes));
    }, [notes]);

    const handleAddComment = () => {
        if (!newComment.trim()) return;

        const commentData = {
            username: user?.username || 'Anonymous',
            date: new Date().toLocaleString(),
            comment: newComment,
        };

        setNotes((prevNotes) => ({
            ...prevNotes,
            [id]: [...(prevNotes[id] || []), commentData],
        }));

        setNewComment('');
    };

    const toggleFavourite = (cocktail) => {
        if (favourites.some((fav) => fav.idDrink === cocktail.idDrink)) {
            removeFavourite(cocktail.idDrink);
        } else {
            addFavourite(cocktail);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const currentCocktailNotes = Array.isArray(notes[id]) ? notes[id] : [];

    return (
        <>
            <div>
                <div className="cocktail-page-header-container">
                    <h1>{cocktail.strDrink}</h1>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                </div>

                <div className="cocktail-details-container">
                    <div className="cocktail-detail-tiles">
                        <h3>Category</h3>
                        <p>{cocktail.strCategory}</p>
                    </div>

                    <div className="cocktail-detail-tiles">
                        <h3>Alcoholic</h3>
                        <p>{cocktail.strAlcoholic}</p>
                    </div>

                    <div className="cocktail-detail-tiles">
                        <h3>Ingredients</h3>
                        <ul>
                            {[...Array(15)].map((_, i) => {
                                const ingredient = cocktail[`strIngredient${i + 1}`];
                                const measure = cocktail[`strMeasure${i + 1}`];
                                return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
                            })}
                        </ul>
                    </div>
                </div>

                <div className="cocktail-detail-instructions">
                    <h3>Instructions</h3>
                    <p>{cocktail.strInstructions}</p>
                </div>

                <CocktailCard
                    key={cocktail.idDrink}
                    cocktail={cocktail}
                    isFavourite={favourites.includes(cocktail.idDrink)}
                    onFavouriteToggle={() => toggleFavourite(cocktail.idDrink)}
                />

                <div className="rating-details-page">
                    <Rating cocktailId={id}/>
                    <div className="comment-container">
                        <textarea
                            placeholder="Laat een reactie achter..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            transition={{type: "spring", stiffness: 300}}
                            onClick={handleAddComment}
                        >
                            Add Comment
                        </motion.button>
                    </div>
                </div>

                <div className="notes-list"
                     style={{
                         backgroundColor: theme.background,
                         transition: "background-color 0.3s",
                     }}
                >
                    <h3>Comments:</h3>
                    {currentCocktailNotes.length > 0 ? (
                        currentCocktailNotes.map((note, index) => (
                            <div key={index} className="note-item">
                                <div className="comment-user-and-date">
                                    <p><strong>{note.username}</strong> <em>({note.date})</em></p>
                                </div>
                                <p>{note.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p>No comments yet. Add your first comment!</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default CocktailDetails;

