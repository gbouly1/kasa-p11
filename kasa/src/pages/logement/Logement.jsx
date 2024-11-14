import React from "react";
import "./logement.css";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "../../components/api/Api";
import Collapse from "../../components/collapse/Collapse";
import Slider from "../../components/slider/Slider";
import filledStar from "../../assets/img/full-star.png";
import emptyStar from "../../assets/img/empty-star.png";
import Error from "../error/Error";
import Rating from "../../components/rating/Rating";

const Logement = () => {
  const { id } = useParams();
  const data = useContext(DataContext);
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="logement-container">
      <Slider logementId={id} />
      <div className="info-container">
        <div className="description-content">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="name-rating-content">
          <div className="name-content">
            <h3>{logement.host.name}</h3>
            <img src={logement.host.picture} alt="Portrait de l'host" />
          </div>
          <div className="rating-content">
            <Rating rating={parseInt(logement.rating)} />
          </div>
        </div>
      </div>
      <div className="collapse-logement">
        <Collapse
          key="description"
          title="Description"
          description={logement.description}
        />
        <Collapse
          key="équipement"
          title="Équipement"
          description={logement.equipments.map((equipments, index) => (
            <span key={index} className="equipments">
              {equipments}
            </span>
          ))}
        />
      </div>
    </div>
  );
};

export default Logement;
