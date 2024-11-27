import React, { useState } from 'react';
import Quiz from './quiz';
import './App.css';

function App() {
  const [score, setScore] = useState(0); // Manages the user's score.
  const [isQuizActive, setIsQuizActive] = useState(false); // Manages whether the quiz is active.

  const startQuiz = () => {
    setIsQuizActive(true);
    setScore(0);
  };

  const endQuiz = () => {
    setIsQuizActive(false);
  };

  const updateScore = (points) => {
    setScore(score + points);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {isQuizActive ? (
        <Quiz updateScore={updateScore} endQuiz={endQuiz} />
      ) : (
        <button onClick={startQuiz}>Start Quiz</button>
      )}
      <p>Score: {score}</p>
    </div>
  );
}

export default App;
