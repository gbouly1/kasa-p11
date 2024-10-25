import React, { useState } from "react";
import "./collapse.css";

const Collapse = ({ title, description }) => {
  const [collapsed, setCollpased] = useState(false);

  return (
    <div className="collapse-wrapper">
      <div className="collapse-title" onClick={() => setCollpased(!collapsed)}>
        <h2>{title}</h2>
        <img
          src="./arrow.png"
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
        {!collapsed && <p className="collapse-description">{description}</p>}
      </div>
    </div>
  );
};

export default Collapse;
