// src/context/DataContext.jsx

import React, { createContext, useState, useEffect } from "react";

// Création du contexte
export const DataContext = createContext();

// Création du fournisseur de contexte
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Chargement des données via fetch lors du montage du composant
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
        if (!response.ok) {
          throw new Error("Erreur de chargement des données");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };
    loadData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
