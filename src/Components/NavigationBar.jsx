import React from "react";
import Logo from "../Assets/Logo.png";
import "../Styles/NavigationBar.css";
import { Link } from "react-scroll";

export default function NavigationBar() {
  return (
    <nav className="nav-container">
      <Link to="Hero"><img className="logo-image" src={Logo} alt="a logo" /></Link>
      <ul className="nav-bar">
        <li><Link className="nav-item" to="About"> About </Link></li>
        <li><Link className="nav-item" to="Projects"> Projects </Link></li>
        <li><Link className="nav-item" to="Tech"> Tech </Link></li>
        <li><Link className="nav-item" to="Contact"> Contant </Link></li>
      </ul>
    </nav>
  );
}
