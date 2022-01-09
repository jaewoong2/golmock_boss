import React from "react";
import CardStyles from "./Card.styles";

interface CardProps {
  cards: { title: string; image: string }[];
}

const Card: React.FC<CardProps> = ({ cards }) => {
  return (
    <CardStyles.Container>
      <div className="card-wrapper">
        {cards.map(({ title, image }) => (
          <div className="card-title">
            <img src={image} alt={title} />
            <div className="title">{title}</div>
          </div>
        ))}
      </div>
    </CardStyles.Container>
  );
};

export default Card;
