import React from "react";
import Photo from "../Assets/Me.jpg";
import "../Styles/About.css";

// good
export default function About() {
  return (
    <div className="about" id="About">
      <div className="heading">
        <h2>About me</h2>
      </div>
      <div className="paragraph">
        <p>
          <span>
            Hi! I'm Raya, a junior frontend developer and network and security
            engineer from Homs, Syria. This is my website, which I use to
            showcase everything I develope.
          </span>
          <span>
            I specialize in React development with a minimalist design and
            attention to detail. Why do I need minimalistic design and attention
            to detail, you might ask? Well, scroll down and let me convince you.
          </span>
        </p>
      </div>
      <div className="content">
        <div className="img-container">
          <img src={Photo} alt="me" />
        </div>
      </div>
    </div>
  );
}
