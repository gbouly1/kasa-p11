import React from 'react'
import "./logement.css"
import data from "../../assets/data.json"
import { useParams } from 'react-router-dom';

const Logement = () => {
  const { id } = useParams()
  const logement = data.find((logement) => logement.id === id)

  if (!logement) {
    return <h2>Logement non trouvé</h2>
  }

  return (
    <h1>{logement.title}</h1>

  )
}

export default Logement