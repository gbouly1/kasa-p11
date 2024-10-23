import React from 'react'
import "./home.css"
import Banner from '../../components/banner/Banner'
import homeBannerImage from "../../assets/img/banner-home.png"
import data from "../../assets/data.json"
import Card from '../../components/card/Card'

const Home = () => {
  return (
    <div className="home-container">

    <div className="hero-banner">
          <Banner 
          image={homeBannerImage}
          text="Chez vous, partout et ailleurs"
          />
    </div>

    <div className="gallery-container">
      <div className="card-container">
        {data.map((logement) => (
          <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
          />
        ))}

      </div>
    </div>

    </div>
  )
}

export default Home