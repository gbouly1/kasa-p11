import React from 'react'
import "./footer.css"
import footerLogo from "../../assets/img/logo-footer.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={footerLogo} alt="Logo footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer