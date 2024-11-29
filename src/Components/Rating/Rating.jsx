import { useState } from 'react';
import { useRating } from "/src/Context/RatingContext/RatingContext.jsx";
import '/src/Components/Rating/Rating.css'

const Rating = ({ cocktailId }) => {
    const { ratings, saveRating } = useRating();
    const [rating, setRating] = useState(ratings[cocktailId] || 0);

    const handleRating = (value) => {
        setRating(value);
        saveRating(cocktailId, value);
    };

    return (
        <div className="rating-container">
            <h3>Rate this Cocktail</h3>
            <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    style={{ cursor: "pointer", color: star <= rating ? "gold" : "grey" }}
                >
          ★
        </span>
            ))}
            </div>
        </div>
    );
};

export default Rating;