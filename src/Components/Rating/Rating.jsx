import { useState, useEffect } from 'react';

const Rating = () => {
    const [userRating, setUserRating] = useState(0);
    const [ratings, setRatings] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    // Laad beoordelingen uit localStorage bij het laden van de component
    useEffect(() => {
        const storedRatings = JSON.parse(localStorage.getItem('ratings')) || [];
        setRatings(storedRatings);
        calculateAverage(storedRatings);
    }, []);

    const calculateAverage = (ratingsArray) => {
        const total = ratingsArray.reduce((acc, rating) => acc + rating, 0);
        const average = ratingsArray.length > 0 ? total / ratingsArray.length : 0;
        setAverageRating(average.toFixed(1));
    };

    // Handle klikt op een ster en voeg de beoordeling toe aan de lijst
    const handleRating = (rate) => {
        const newRatings = [...ratings, rate];
        setRatings(newRatings);
        setUserRating(rate);
        calculateAverage(newRatings);
        localStorage.setItem('ratings', JSON.stringify(newRatings));
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Geef een beoordeling:</h3>
            <div style={{ fontSize: '2rem' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => handleRating(star)}
                        style={{
                            cursor: 'pointer',
                            color: star <= userRating ? 'gold' : 'gray'
                        }}
                    >
                        ★
                    </span>
                ))}
            </div>
            {/*<p>Gemiddelde beoordeling: {averageRating} / 5</p>*/}
            {/*<p>Totale beoordelingen: {ratings.length}</p>*/}
        </div>
    );
};

export default Rating;