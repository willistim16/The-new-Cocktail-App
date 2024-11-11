import { useState, useEffect } from "react";
import '/src/Styles/globals.css'
import '/src/Components/RandomCocktails/RandomCocktails.css'
import '/src/Pages/HomePage/Home.css'

function RandomCocktails() {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchRandomCocktails = async () => {
        const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Update state with fetched data
            setCocktails(data.drinks);
        } catch (error) {
            console.error("Error fetching popular cocktails:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchRandomCocktails();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="MostPopularContainer">
                    <ul>
                        {cocktails.map((cocktail) => (
                            <li key={cocktail.idDrink}>
                                <div className="MostPopularTitle">
                                    {/*<a href="">*/}
                                    <h3>{cocktail.strDrink}</h3>
                                    {/*</a>*/}
                                </div>
                                <div className="MostPopularImage flame-wrapper">
                                    <img src={cocktail.strDrinkThumb} loading={"lazy"} alt={cocktail.strDrink} width="200" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default RandomCocktails;
