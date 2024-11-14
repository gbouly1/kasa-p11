import React from "react";
import filledStar from "../../assets/img/full-star.png";
import emptyStar from "../../assets/img/empty-star.png";
import "./rating.css";

const Rating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src={i < rating ? filledStar : emptyStar}
          alt={i < rating ? "Étoile pleine" : "Étoile vide"}
          className="star"
        />
      );
    }
    return stars;
  };

  return <div className="rating-container">{renderStars()}</div>;
};

export default Rating;
