import React from 'react';

interface FinalScreenProps {
  bananas: number;
  onReset: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ bananas, onReset }) => {
  return (
    <div className="final-screen">
      <h2>Congratulations!</h2>
      <p>Total Bananas Collected: {bananas}</p>
      <button onClick={onReset}>Play Again</button>
    </div>
  );
};

export default FinalScreen;
