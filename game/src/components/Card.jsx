import React from 'react';

interface CardProps {
  id: number;
  image: string;
  onClick: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, image, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt="card" />
    </div>
  );
};

export default Card;