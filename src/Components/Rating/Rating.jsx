import { useRating } from "/src/Context/RatingContext/RatingContext.jsx";
import '/src/Components/Rating/Rating.css';
import { useState } from 'react';

const Rating = ({ cocktailId }) => {
    const { ratings, saveRating } = useRating();
    const currentRating = ratings[cocktailId] || 0;
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleRating = (value) => {
        if (value === currentRating) {
            saveRating(cocktailId, 0);
        } else {
            saveRating(cocktailId, value);
        }
    };

    return (
        <div className="rating-container">
            <h3>Rate this Cocktail</h3>
            <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        style={{ cursor: "pointer", color: star <= (hoveredRating || currentRating) ? "gold" : "grey" }}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Rating;