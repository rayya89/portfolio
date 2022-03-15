import React from "react";
import Logo from "../Assets/Logo.png";
import "../Styles/NavigationBar.css";
import { Link } from "react-scroll";

export default function NavigationBar() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="Hero">
          <img className="logo-image" src={Logo} alt="a logo" />
        </Link>
      </div>
      <div className="nav-bar">
        <Link className="nav-item" to="About">
          About
        </Link>
        <Link className="nav-item" to="Projects">
          Projects
        </Link>
        <Link className="nav-item" to="Tech">
          Tech
        </Link>
        <Link className="nav-item" to="Contact">
          Contant
        </Link>
      </div>
    </nav>
  );
}
