import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "../../components/api/Api";
import "./slider.css";
import arrowLeft from "../../assets/img/arrow-left.png";
import arrowRight from "../../assets/img/arrow-right.png";

const Slider = ({ logementId }) => {
  const data = useContext(DataContext); // Récupère les données depuis le contexte
  const logement = data.find((item) => item.id === logementId);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === logement.pictures.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? logement.pictures.length - 1 : slide - 1);
  };

  const hasMultipleImages = logement.pictures.length > 1; // vérifie qu'il ya plus d'une slide

  return (
    // affiche les flèches de nav si + d'1 slide
    <div className="slider">
      {hasMultipleImages && (
        <img
          src={arrowLeft}
          alt="Fleche image précédente"
          className="arrow arrow-left"
          onClick={prevSlide}
        />
      )}
      {logement.pictures.map((picture, index) => (
        <img
          src={picture}
          alt={`Image ${index + 1} du logement`}
          key={index}
          className={
            slide === index ? "slider-image" : "slider-image slider-hidden"
          }
        />
      ))}
      {hasMultipleImages && (
        <img
          src={arrowRight}
          alt="Fleche image suivante"
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      )}
      <div className="slider-indicator">
        {hasMultipleImages && (
          <p>
            {slide + 1} / {logement.pictures.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Slider;
