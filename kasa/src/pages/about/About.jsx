import React from "react";
import "./about.css";
import Banner from "../../components/banner/Banner";
import aboutBannerImage from "../../assets/img/banner-about.png";
import Collapse from "../../components/collapse/Collapse";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero-banner">
        <Banner image={aboutBannerImage} />
        <div className="collapse-container">
          <Collapse
            key="fiabilité"
            title="Fiabilité"
            description={
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrrement vérifiées par nos équipes
              </p>
            }
          />
          <Collapse
            key="respect"
            title="Respect"
            description={
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de pertubation du voisinage
                entrêinera une exclusion de notre platforme{" "}
              </p>
            }
          />
          <Collapse
            key="service"
            title="Service"
            description={
              <p>
                La qualité du service est au coeur de notre engagement chez
                Kasa. Nous veillons à ce que chaque interaction, que ce soit
                avec nos hôtes ou nos locataires, soit empreinte de respect et
                de bienveillance.{" "}
              </p>
            }
          />
          <Collapse
            key="sécurité"
            title="Sécurité"
            description={
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.{" "}
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
