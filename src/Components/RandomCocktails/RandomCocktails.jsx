import { useState, useEffect } from "react";
import '/src/Styles/globals.css'
import '/src/Components/RandomCocktails/RandomCocktails.css'
import '/src/Pages/HomePage/Home.css'
import ProtectedLink from "../ProtectedLink/ProtectedLink.jsx";
import { Link } from 'react-router-dom';
import useAuth from "../../helpers/useAuth.js";
import {motion} from "framer-motion";

function RandomCocktails() {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated } = useAuth();

    const fetchRandomCocktails = async () => {
        const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        setLoading(true);
        try {
            const responses = await Promise.all([
                fetch(apiUrl),
                fetch(apiUrl),
                fetch(apiUrl),
            ]);
            const data = await Promise.all(responses.map(response => response.json()));

            const allCocktails = data.flatMap(response => response.drinks);
            setCocktails(allCocktails);
        } catch (error) {
            console.error("Error fetching random cocktails:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomCocktails();
    }, []);

    return (
        <>
        <div className="random-cocktails-container">
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                transition={{type: "spring", stiffness: 300}}
                onClick={fetchRandomCocktails} className="refresh-button"
            >
                Laadt nieuwe Cocktails
            </motion.button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {cocktails.map((cocktail) => (
                        <li key={cocktail.idDrink}>
                            <div className="random-cocktail-title">
                                <h3>{cocktail.strDrink}</h3>
                            </div>
                            <div className="random-cocktail-image flame-wrapper">
                                <img src={cocktail.strDrinkThumb} loading="lazy" alt={cocktail.strDrink} width="200"/>
                            </div>

                            <div className="details-random-container">
                                <>
                                {isAuthenticated ? (
                                <ProtectedLink>
                                    <Link to={`/CocktailDetailsPage/${cocktail.idDrink}`}>Details</Link>
                                </ProtectedLink>
                                ) : (
                                    <Link to="/LogInRegisterPage">Log in om details te zien</Link>
                                    )}
                                    </>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );
}

export default RandomCocktails;
