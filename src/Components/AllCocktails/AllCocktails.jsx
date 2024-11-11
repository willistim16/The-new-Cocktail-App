import {useEffect, useState} from "react";
import '/src/Components/AllCocktails/AllCocktails.css'
import Rating from "../Rating/Rating.jsx";

const AllCocktails = () => {
    const [allCocktails, setAllCocktails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllCocktails = async () => {
            try {
                const alcoholicResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
                const nonAlcoholicResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`);

                if (!alcoholicResponse.ok || !nonAlcoholicResponse.ok) {
                    return new Error('Failed to fetch cocktail details');
                }

                const alcoholicData = await alcoholicResponse.json();
                const nonAlcoholicData = await nonAlcoholicResponse.json();

                setAllCocktails([...alcoholicData.drinks, ...nonAlcoholicData.drinks]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAllCocktails();
        console.log(fetchAllCocktails)
    }, []);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="AllCocktailsContainer">
                {
                    allCocktails.map(
                        function (cocktail) {
                            return (
                                <div className="AllCocktailsTile" key={cocktail.idDrink}>
                                    <h2>{cocktail.strDrink}</h2>
                                    <img alt="AllCocktails" src={cocktail.strDrinkThumb}/>
                                    <a href={`/CocktailDetailsPage/${cocktail.idDrink}`}>Details...</a>
                                    <div>
                                        <Rating/>
                                    </div>
                                </div>
                                )
                        }
                    )
                }
            </div>
        </>
    )
}

export default AllCocktails