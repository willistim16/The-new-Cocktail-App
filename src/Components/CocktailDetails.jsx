import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import '/src/Styles/cocktailDetails.css'

const CocktailDetails = () => {
    const {id} = useParams();
    const [cocktail, setCocktail] = useState('');
    cocktail.strAlcoholic;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCocktailDetails = async () => {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
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
                console.log(fetchCocktailDetails())
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
                <div>
                    <div className="SingleCocktailPageHeader-container">
                        <h1>{cocktail.strDrink}</h1>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                    </div>
                    <div className="cocktailDetails-container">
                        <h3>Category: {cocktail.strCategory}</h3>
                        <h3>Alcoholic: {cocktail.strAlcoholic}</h3>
                        <div className="cocktailIngredients">
                            <h3>Ingredients:</h3>
                            <ul>
                                {[...Array(15)].map((_, i) => {
                                    const ingredient = cocktail[`strIngredient${i + 1}`];
                                    const measure = cocktail[`strMeasure${i + 1}`];
                                    return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
                                })}
                            </ul>
                        </div>
                        <div className="PrepInstructions">
                            <h3>Instructions:</h3>
                            <p>{cocktail.strInstructions}</p>
                        </div>

                    </div>
                </div>
            );
}

export default CocktailDetails;

