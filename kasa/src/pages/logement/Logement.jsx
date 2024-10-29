import React from "react";
import "./logement.css";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "../../components/api/Api";
import Collapse from "../../components/collapse/Collapse";

const Logement = () => {
  const { id } = useParams();
  const data = useContext(DataContext);
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <h2>Logement non trouvé</h2>;
  }

  return (
    <div className="logement-container">
      <div className="slider">
        <p className="slider-test">SLIDER</p>
      </div>
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
          <div className="rating-content"></div>
        </div>
      </div>
      <div className="collapse-logement">
        <Collapse title="Description" description={logement.description} />
        <Collapse
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
