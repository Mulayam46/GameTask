import React from 'react';
import Card from './Card';

interface GameBoardProps {
  cards: { id: number; image: string }[];
  onCardClick: (id: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ cards, onCardClick }) => {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} image={card.image} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default GameBoard;