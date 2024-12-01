import { useState } from "react";
import "./CocktailQuiz.css";

const quizQuestions = [
    {
        question: "1. What is the main ingredient in a Margarita?",
        options: ["Tequila", "Vodka", "Gin", "Rum"],
        correctAnswer: "Tequila",
    },
    {
        question: "2. Which cocktail is made with vodka and coffee liqueur?",
        options: ["Mojito", "White Russian", "Cosmopolitan", "Daiquiri"],
        correctAnswer: "White Russian",
    },
    {
        question: "3. Which fruit is typically used in a Mojito?",
        options: ["Lime", "Orange", "Lemon", "Grapefruit"],
        correctAnswer: "Lime",
    },
    {
        question: "4. What is the main ingredient in a Bloody Mary?",
        options: ["Tomato Juice", "Cranberry Juice", "Lime Juice", "Orange Juice"],
        correctAnswer: "Tomato Juice",
    },
    {
        question: "5. Which cocktail is famously associated with James Bond?",
        options: ["Martini", "Mojito", "Old Fashioned", "Whiskey Sour"],
        correctAnswer: "Martini",
    },
    {
        question: "6. What is the garnish typically used in a Pina Colada?",
        options: ["Lime Slice", "Cherry", "Pineapple Wedge", "Orange Peel"],
        correctAnswer: "Pineapple Wedge",
    },
    {
        question: "7. Which cocktail contains mint, lime juice, sugar, soda water, and rum?",
        options: ["Margarita", "Caipirinha", "Daiquiri", "Mojito"],
        correctAnswer: "Mojito",
    },
    {
        question: "8. What type of alcohol is used in a Moscow Mule?",
        options: ["Rum", "Whiskey", "Tequila", "Vodka"],
        correctAnswer: "Vodka",
    },
    {
        question: "9. Which cocktail is made with gin, Campari, and sweet vermouth?",
        options: ["Cosmopolitan", "Manhattan", "Negroni", "Martini"],
        correctAnswer: "Negroni",
    },
    {
        question: "10. Which cocktail is known for being served “on the rocks”?",
        options: ["Old Fashioned", "Martini", "Pina Colada", "Cosmopolitan"],
        correctAnswer: "Old Fashioned",
    },
];

const CocktailQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);

        if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        setTimeout(() => {
            setSelectedAnswer(null);

            if (currentQuestionIndex + 1 < quizQuestions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setShowScore(true);
            }
        }, 1000);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    <h2>Your Score: {score}/{quizQuestions.length}</h2>
                    <button onClick={handleRestart} className="restart-button">
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div className="question-section">
                    <h2>{quizQuestions[currentQuestionIndex].question}</h2>
                    <div className="options">
                        {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                className={`option-button ${
                                    selectedAnswer === option
                                        ? option === quizQuestions[currentQuestionIndex].correctAnswer
                                            ? "correct"
                                            : "wrong"
                                        : ""
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
    );
};

export default CocktailQuiz;