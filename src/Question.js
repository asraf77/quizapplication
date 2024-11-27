import React from 'react';

function Question({ data, handleAnswer }) {
  return (
    <div>
      <h2>{data.question}</h2>
      {data.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option === data.answer)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
