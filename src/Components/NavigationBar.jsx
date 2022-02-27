import React from 'react'
import Logo from '../Assets/logo-full.png'
import '../Styles/NavigationBar.css'

export default function NavigationBar() {
  return (
    <nav className="nav-container">
        <div className="grid-container">
        <a href="#Home"><img src={Logo} alt="a logo"/></a>
            <div className="nav-bar">
                <a href="#About">About</a>
                <a href="#Projects">Projects</a>
                <a href="#Tech">Tech</a>
                <a href="#Contact">Contant</a>          
            </div>
        </div>
    </nav>
  )
}
