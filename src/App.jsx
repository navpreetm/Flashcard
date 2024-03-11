import React, { useState } from 'react';
import './App.css';

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="flashcard" onClick={handleShowAnswer}>
      {!showAnswer ? <p className="question">Question: {question}</p> : <p className="answer">Answer: {answer}</p>}
    </div>
  );
}

function Flashcards() {
  const [cards, setCards] = useState([
    { question: 'Who was the first President of the United States', answer: 'George Washington' },
    { question: 'What is the term length for a member of the United States Senate?', answer: 'Six years' },
    { question: 'Who is the current Chancellor of Germany?', answer: 'Angela Merkel' }

    // Add more card pairs as needed
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const newIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(newIndex);
  };

  return (
    <div className="flashcards-container">
      <h1>Politics Quiz</h1>
      <p>Test your knowledge about various political topics!</p>
      <p>Total cards: {cards.length}</p>

      {cards.map((card, index) => (
        <Flashcard
          key={index}
          question={card.question}
          answer={card.answer}
        />
      ))}

      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

export default App;



