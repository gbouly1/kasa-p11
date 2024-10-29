import React from "react";
import "./logo.css";
import logoImage from "../../assets/img/logoImg.png";

const Logo = () => {
  return (
    <div className="Logo">
      <img className="logo-header" src={logoImage} alt="Logo Kasa" />
    </div>
  );
};

export default Logo;
