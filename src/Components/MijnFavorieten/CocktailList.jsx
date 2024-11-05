
function CocktailList({ addFavourite }) {
    // Assume cocktails is a list of cocktail objects from an API

    return (
        <div>
            {cocktails.map((cocktail) => (
                <div key={cocktail.idDrink}>
                    <h2>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    <button onClick={() => addFavourite(cocktail)}>Add to Favourites</button>
                </div>
            ))}
        </div>
    );
}

export default CocktailList;