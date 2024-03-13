import React, { useState } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';
import Scoreboard from './Scoreboard';
import FinalScreen from './FinalScreen';
import data from '../data.json';
import './Game.css';

const Game: React.FC = () => {
  const [cards, setCards] = useState(data);
  const [tries, setTries] = useState(10); // Number of tries allowed
  const [bananas, setBananas] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  // Function to handle card click
  const handleCardClick = (id: number) => {
   
  };

  // Reset game function
  const resetGame = () => {
    setCards(data);
    setTries(10);
    setBananas(0);
    setGameOver(false);
  };

  return (
    <div className="game">
      <Header />
      <div className="game-container">
        <GameBoard cards={cards} onCardClick={handleCardClick} />
        <Scoreboard tries={tries} bananas={bananas} />
      </div>
      {gameOver && <FinalScreen bananas={bananas} onReset={resetGame} />}
    </div>
  );
};

export default Game;