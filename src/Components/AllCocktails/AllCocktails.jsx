import {useEffect, useState} from "react";
import '/src/Components/AllCocktails/AllCocktails.css'

const AllCocktails = () => {
    // const {id} = useParams();
    const [allCocktails, setAllCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchAllCocktails = async () => {
    //         try {
    //             const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
    //             if (!response.ok) {
    //                 return Error('Failed to fetch cocktail details');
    //             } else {
    //                 const data = await response.json();
    //                 data.drinks;
    //                 if (data.drinks && data.drinks.length > 0) {
    //                     setAllCocktails(data.drinks);
    //                 } else {
    //                     setError('Cocktail not found');
    //                 }
    //             }
    //             console.log(response)
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchAllCocktails();
    // }, []);

    useEffect(() => {
        const fetchAllCocktails = async () => {
            try {
                const alcoholicResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
                const nonAlcoholicResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`);

                if (!alcoholicResponse.ok || !nonAlcoholicResponse.ok) {
                    throw new Error('Failed to fetch cocktail details');
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