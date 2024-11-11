import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '/src/Components/CocktailDetails/cocktailDetails.css'
import '/src/Components/Header/Header.css'
import Rating from "../Rating/Rating.jsx";

const CocktailDetails = () => {
    const {id} = useParams();
    const [cocktail, setCocktail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCocktailDetails = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) {
                    return Error('Failed to fetch cocktail details');
                } else {
                    const data = await response.json();
                    data.drinks;
                    if (data.drinks && data.drinks.length > 0) {
                        setCocktail(data.drinks[0]);
                    } else {
                        setError('Cocktail not found');
                    }
                }
                console.log(response)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

            fetchCocktailDetails();
            }, [id]);

            if (loading) return <div>Loading...</div>;

            if (error) return <div>Error: {error}</div>;

            return (
                <>
                    <div>
                        <div className="SingleCocktailPageHeader-container">
                            <h1>{cocktail.strDrink}</h1>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                        </div>
                        <div className="cocktailDetails-container">
                            <div className="cocktailDetailTiles">
                                <h3>Category</h3>
                                <p>{cocktail.strCategory}</p>
                            </div>
                            <div className="cocktailDetailTiles">
                            <h3>Alcoholic</h3>
                                <p>{cocktail.strAlcoholic}</p>
                            </div>
                            <div className="cocktailDetailTiles">
                            <h3>Ingredients</h3>
                                <ul>
                                    {[...Array(15)].map((_, i) => {
                                        const ingredient = cocktail[`strIngredient${i + 1}`];
                                        const measure = cocktail[`strMeasure${i + 1}`];
                                        return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
                                    })}
                                </ul>
                            </div>
                            <div className="cocktailDetailIngredients">
                                <h3>Instructions</h3>
                                <p>{cocktail.strInstructions}</p>
                            </div>
                            <Rating/>
                        </div>
                    </div>
                </>
            );

}

export default CocktailDetails;

