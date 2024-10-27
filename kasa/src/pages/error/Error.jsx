import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h2 className="error-404">404</h2>
      <p className="page-error">Oups! La page que vous demandez n'existe pas</p>
      <Link to={`/`} className="back-home">
        <p className="back-content">Retourner à la page d'accueil</p>
      </Link>
    </div>
  );
};

export default Error;
