import React, { useState, useEffect } from 'react';
import Question from './Question';
import Timer from './Timer';

const questions = [
    { question: "What is the capital of Tamil Nadu?", options: ["Chennai", "Madurai", "Coimbatore"], answer: "Chennai" },

    { question: "Which festival is known as the 'Festival of Lights' in Tamil Nadu?", options: ["Pongal", "Diwali", "Navaratri"], answer: "Diwali" },
    
    { question: "Which temple in Tamil Nadu is famous for its Dravidian architecture and is one of the largest temple complexes in India?", options: ["Meenakshi Temple", "Brihadeeswara Temple", "Ramanathaswamy Temple"], answer: "Brihadeeswara Temple" },
    
    { question: "Which Tamil Nadu city is known as the 'Manchester of South India' due to its extensive textile industry?", options: ["Chennai", "Coimbatore", "Salem"], answer: "Coimbatore" },
    
    { question: "Who was the famous Tamil poet and freedom fighter known for his work in the Indian independence movement?", options: ["Subramania Bharati", "Thiruvalluvar", "Avvaiyar"], answer: "Subramania Bharati" },
    
    { question: "Which is the official language of Tamil Nadu?", options: ["Telugu", "Kannada", "Tamil"], answer: "Tamil" },
    
    { question: "Which place in Tamil Nadu is known for the UNESCO World Heritage Site, the Group of Monuments?", options: ["Mamallapuram", "Kanchipuram", "Tiruchirappalli"], answer: "Mamallapuram" },
    
    { question: "What is the name of the famous classical dance form that originated in Tamil Nadu?", options: ["Kathak", "Bharatanatyam", "Odissi"], answer: "Bharatanatyam" },
    
    { question: "Which national park in Tamil Nadu is home to a large population of endangered Bengal tigers?", options: ["Mudumalai National Park", "Guindy National Park", "Indira Gandhi Wildlife Sanctuary"], answer: "Mudumalai National Park" },
    
    { question: "Which town in Tamil Nadu is renowned for its Chola Bronze statues?", options: ["Thanjavur", "Madurai", "Kumbakonam"], answer: "Thanjavur" },
];

function Quiz({ updateScore, endQuiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); 

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      updateScore(1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    } else {
      endQuiz();
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(false);
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
      <Question 
        data={questions[currentQuestionIndex]} 
        handleAnswer={handleAnswer} 
      />
      <Timer timeLeft={timeLeft} />
    </div>
  );
}

export default Quiz;
