import React from 'react';

interface ScoreboardProps {
  tries: number;
  bananas: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ tries, bananas }) => {
  return (
    <div className="scoreboard">
      <p>Tries: {tries}</p>
      <p>Bananas: {bananas}</p>
    </div>
  );
};

export default Scoreboard;
