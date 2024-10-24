import React from 'react'
import "./about.css"
import Banner from '../../components/banner/Banner'
import homeBannerImage from "../../assets/img/banner-about.png"

const About = () => {
  return (
    <div className="about-container">

    <div className="about-hero-banner">
      <Banner 
      image={homeBannerImage} />
    </div>


    </div>
  )
}

export default About