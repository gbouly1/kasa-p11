import React from 'react';
import "./navigation.css"
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav-bar">
            <ul className="nav-link">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" :  "")}>
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" :  "")}>
                <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;