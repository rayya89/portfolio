import React from 'react'
import Logo from '../Assets/logo-full.png'
import '../Styles/NavigationBar.css'
import {Link} from 'react-scroll'

export default function NavigationBar() {
  return (
    <nav className="nav-container">
        <div className="grid-container">
        <Link to="Hero"><img src={Logo} alt="a logo"/></Link>
            <div className="nav-bar">
                <Link to="About">About</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Tech">Tech</Link>
                <Link to="Contact">Contant</Link>          
            </div>
        </div>
    </nav>
  )
}
