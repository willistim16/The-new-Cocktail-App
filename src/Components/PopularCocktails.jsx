import { useState, useEffect } from "react";
import '/src/Styles/globals.css'
import '/src/Styles/PopularCocktails.css'
import '/src/Styles/Home.css'

function PopularCocktails() {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch popular cocktails
    const fetchPopularCocktails = async () => {
        const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Update state with fetched data
            setCocktails(data.drinks.slice(10, 13));
        } catch (error) {
            console.error("Error fetching popular cocktails:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchPopularCocktails();
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
                                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="200" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PopularCocktails;
