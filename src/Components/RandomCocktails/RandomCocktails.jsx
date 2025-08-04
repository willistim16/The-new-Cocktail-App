import { useState, useEffect } from "react";
import "/src/Styles/globals.css";
import "/src/Components/RandomCocktails/RandomCocktails.css";
import "/src/Pages/HomePage/Home.css";
import ProtectedLink from "../ProtectedLink/ProtectedLink.jsx";
import { Link } from "react-router-dom";
import useAuth from "../../helpers/useAuth.js";
import { motion } from "framer-motion";
import CocktailCard from "../CocktailCard/CocktailCard.jsx";

function RandomCocktails() {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated } = useAuth();

    const fetchRandomCocktails = async () => {
        setLoading(true);
        try {
            console.log("Fetching from:", `${import.meta.env.VITE_API_URL}/cocktails/random?count=3`);

            const response = await fetch(`${import.meta.env.VITE_API_URL}/cocktails/random?count=3`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (Array.isArray(data)) {
                setCocktails(data);
            } else {
                console.error("Unexpected response format:", data);
                setCocktails([]);
            }
        } catch (error) {
            console.error("Error fetching random cocktails:", error);
            setCocktails([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomCocktails();
    }, []);

    // Functie om cocktails netjes te renderen
    const renderCocktails = () => {
        if (cocktails.length === 0) {
            return <p>Geen cocktails gevonden.</p>;
        }
        return cocktails.map((cocktail) => (
            <li key={cocktail.id}>
                <div className="random-cocktail-title">
                    <h3>{cocktail.name}</h3>
                </div>
                <div className="random-cocktail-image flame-wrapper">
                    <img
                        src={cocktail.imageUrl}
                        loading="lazy"
                        alt={cocktail.name}
                        width="200"
                    />
                </div>

                <div className="details-random-container">
                    {isAuthenticated ? (
                        <>
                            <ProtectedLink>
                                <Link to={`/CocktailDetailsPage/${cocktail.id}`}>Details</Link>
                            </ProtectedLink>
                            {/* Hier renderen we CocktailCard alleen voor de favorieten-buttons */}
                            <CocktailCard cocktail={cocktail} />
                        </>
                    ) : (
                        <Link to="/LogInRegisterPage">Log in om details te zien</Link>
                    )}
                </div>
            </li>
        ));
    };

    return (
        <div className="random-cocktails-container">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={fetchRandomCocktails}
                className="refresh-button"
            >
                Laadt nieuwe Cocktails
            </motion.button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {renderCocktails()}
                </ul>
            )}
        </div>
    );
}

export default RandomCocktails;
