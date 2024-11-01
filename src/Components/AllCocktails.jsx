import {useEffect, useState} from "react";
import '/src/Styles/AllCocktails.css'

const AllCocktails = () => {
    // const {id} = useParams();
    const [allCocktails, setAllCocktails] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllCocktails = async () => {
            try {
                const outcome = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
                if (!outcome.ok) {
                    return error('Failed to fetch cocktail details');
                } else {
                    const data = await outcome.json();
                    data.drinks;
                    if (data.drinks && data.drinks.length > 0) {
                        setAllCocktails(data.drinks);
                    } else {
                        setError('Cocktail not found');
                    }
                }
                console.log(outcome)
            } catch (err) {
                console.log("hello")
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAllCocktails();
    }, []);

    if (loading) return <div>Loading...</div>;

    // if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="AllCocktailsContainer">
                {
                    allCocktails.map(
                        function (cocktail) {
                            return (
                                <div className="AllCocktailsTile" key={cocktail.idDrink}>
                                    <h2>{cocktail.strDrink}</h2>
                                    <img src={cocktail.strDrinkThumb}/>
                                    <a href={`/SingleCocktailPage/${cocktail.idDrink}`}>Details...</a>
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