import '/src/Components/MijnFavorieten/MyFavourites.css'


function MyFavourites({ favourites, removeFavourite }) {
    return (
        <div>
            <h1>My Favourites</h1>
            {favourites.length > 0 ? (
                favourites.map((cocktail) => (
                    <div key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <button onClick={() => removeFavourite(cocktail.idDrink)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>No favourites added yet.</p>
            )}
        </div>
    );
}

export default MyFavourites;