// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function CocktailList({ cocktails }) {
    // eslint-disable-next-line react/prop-types
    if (cocktails.length === 0) {
        return <div>No cocktails found.</div>;
    }

    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {cocktails.map((cocktail) => (
                <div key={cocktail.idDrink} style={{ margin: '20px 0' }}>
                    <h2>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100px', height: '100px' }} />
                </div>
            ))}
        </div>
    );
}

export default CocktailList;