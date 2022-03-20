import React from "react";
import Photo from "../Assets/Me.jpg";
import ColoredPhoto from "../Assets/Me-colored.jpg";
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
          Hi! my name is Raya and I enjoy creating things that live on the internet. My passion for programming started back in 2008 when I started my study in computer engineering.
            Fast-forward to our time, I had an interest in front-end development so I sow a seed of my career in this field. I created this website so you can showcase everything I develop.
          </p>
          <p>
            My main focus these days is to build applications in React js with minimalist design and
            attention to detail. Why do I need minimalistic design and attention
            to detail, you might ask? Well, scroll down and let me convince you.
        </p>
      </div>
      <div className="content">
        <div className="img-container">
          <img src={Photo} className="main-img" alt="me" />
          <img src={ColoredPhoto} className="colored-img" alt="me" />
        </div>
      </div>
    </div>
  );
}
