import React from 'react'
import "./header.css"
import Logo from '../logo/Logo'
import Navigation from '../navigation/Navigation'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header