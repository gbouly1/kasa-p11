import React, { useState } from "react";
import "./collapse.css";

// component collapse pour la page about et logement
const Collapse = ({ title, description }) => {
  const [collapsed, setCollpased] = useState(true);

  return (
    <div className="collapse-wrapper">
      <div className="collapse-title" onClick={() => setCollpased(!collapsed)}>
        <h2>{title}</h2>
        <img
          src="/arrow.png"
          alt="fleche de déroulement"
          className={`collapse-arrow" ${
            collapsed ? "arrow-inactive" : "arrow-active"
          }   `}
        />
      </div>
      <div
        className={`collapse-content ${
          collapsed ? "content-inactive" : "content-active"
        }`}
      >
        {!collapsed && (
          <div className="collapse-description">{description}</div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
