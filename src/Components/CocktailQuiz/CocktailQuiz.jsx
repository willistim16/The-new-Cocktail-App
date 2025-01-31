import { useState, useEffect } from "react";
import "./CocktailQuiz.css";
import {motion} from "framer-motion";

const quizQuestions = [
    { question: "Wat is het hoofdingrediënt in een Margarita?", options: ["Tequila", "Wodka", "Gin", "Rum"], correctAnswer: "Tequila" },
    { question: "Welke cocktail wordt gemaakt met wodka en koffielikeur?", options: ["Mojito", "White Russian", "Cosmopolitan", "Daiquiri"], correctAnswer: "White Russian" },
    { question: "Welke vrucht wordt meestal gebruikt in een Mojito?", options: ["Limoen", "Sinaasappel", "Citroen", "Grapefruit"], correctAnswer: "Limoen" },
    { question: "Wat is het hoofdingrediënt in een Bloody Mary?", options: ["Tomatensap", "Cranberrysap", "Limoensap", "Sinaasappelsap"], correctAnswer: "Tomatensap" },
    { question: "Welke cocktail wordt beroemd geassocieerd met James Bond?", options: ["Martini", "Mojito", "Old Fashioned", "Whiskey Sour"], correctAnswer: "Martini" },
    { question: "Wat is de typische garnering voor een Pina Colada?", options: ["Limoenschijf", "Kers", "Ananasschijf", "Sinaasappelschil"], correctAnswer: "Ananasschijf" },
    { question: "Welke cocktail bevat munt, limoensap, suiker, sodawater en rum?", options: ["Margarita", "Caipirinha", "Daiquiri", "Mojito"], correctAnswer: "Mojito" },
    { question: "Welke alcohol wordt gebruikt in een Moscow Mule?", options: ["Rum", "Whiskey", "Tequila", "Wodka"], correctAnswer: "Wodka" },
    { question: "Welke cocktail wordt gemaakt met gin, Campari en zoete vermout?", options: ["Cosmopolitan", "Manhattan", "Negroni", "Martini"], correctAnswer: "Negroni" },
    { question: "Welke cocktail staat bekend om geserveerd te worden 'on the rocks'?", options: ["Old Fashioned", "Martini", "Pina Colada", "Cosmopolitan"], correctAnswer: "Old Fashioned" },
    { question: "Wat zit er in een Long Island Iced Tea?", options: ["Thee", "Een mix van verschillende spirits", "Koffie", "Sinaasappelsap"], correctAnswer: "Een mix van verschillende spirits" },
    { question: "Welke cocktail bevat zowel munt als bourbon?", options: ["Mint Julep", "Old Fashioned", "Mojito", "Caipirinha"], correctAnswer: "Mint Julep" },
    { question: "Welke cocktail bevat perziklikeur en sinaasappelsap?", options: ["Tequila Sunrise", "Bellini", "Sex on the Beach", "Daiquiri"], correctAnswer: "Sex on the Beach" },
    { question: "Wat wordt vaak gebruikt om een Martini te garneren?", options: ["Citroenschil", "Olijf", "Kers", "Limoen"], correctAnswer: "Olijf" },
    { question: "Welke cocktail bevat crème de menthe en room?", options: ["Grasshopper", "Pina Colada", "Cosmopolitan", "Margarita"], correctAnswer: "Grasshopper" },
    { question: "Wat is de hoofdingrediënt in een Daiquiri?", options: ["Rum", "Wodka", "Tequila", "Gin"], correctAnswer: "Rum" },
    { question: "Welke cocktail bevat Kahlúa, Baileys en Grand Marnier?", options: ["B-52", "Espresso Martini", "Irish Coffee", "Black Russian"], correctAnswer: "B-52" },
    { question: "Wat is het hoofdingrediënt van een Cosmopolitan?", options: ["Wodka", "Gin", "Rum", "Tequila"], correctAnswer: "Wodka" },
    { question: "Welke cocktail bevat zowel ananassap als kokosmelk?", options: ["Mai Tai", "Zombie", "Pina Colada", "Blue Lagoon"], correctAnswer: "Pina Colada" },
];

const CocktailQuiz = () => {
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

    useEffect(() => {
        const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffleArray(quizQuestions).slice(0, 5));
    }, []);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);

        if (answer === shuffledQuestions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        setShowCorrectAnswer(true);
        setTimeout(() => {
            setShowCorrectAnswer(false);
            setSelectedAnswer(null);

            if (currentQuestionIndex + 1 < shuffledQuestions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setShowScore(true);
            }
        }, 1400);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
        setShowCorrectAnswer(false);
        const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffleArray(quizQuestions).slice(0, 5));
    };

    if (!shuffledQuestions.length) {
        return <div>Loading quiz...</div>;
    }

    return (
        <>
        <div className="quiz-explination-container">
            <h2>Hoe werkt de Cocktailquiz?</h2>
            <ul>
                <li>Beantwoord 5 willekeurige cocktailvragen.</li>
                <li>Bij een fout antwoord wordt het juiste antwoord kort weergegeven.</li>
                <li>Houd je voortgang bij met de vragenteller.</li>
                <li>Bekijk je score aan het einde.</li>
                <li>Start een nieuwe ronde om je score te verbeteren. </li>
            </ul>
            <br/>
            <span className="veel-plezier">Veel plezier! 🍹
            </span>
        </div>
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    <h2>Jouw score: {score}/{shuffledQuestions.length}</h2>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 300}}
                        onClick={handleRestart}
                        className="restart-button"
                    >
                        Nieuwe ronde, nieuwe vragen...!?
                    </motion.button>
                </div>
            ) : (
                <div className="question-section">
                    <p>Vraag {currentQuestionIndex + 1} van {shuffledQuestions.length}</p>
                    <h2>{shuffledQuestions[currentQuestionIndex].question}</h2>
                    <div className="options">
                        {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                className={`option-button ${
                                    showCorrectAnswer && option === shuffledQuestions[currentQuestionIndex].correctAnswer
                                        ? "correct"
                                        : selectedAnswer === option && "wrong"
                                }`}
                                onClick={() => handleAnswerClick(option)}
                                disabled={!!selectedAnswer}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </>
    );
};


export default CocktailQuiz;