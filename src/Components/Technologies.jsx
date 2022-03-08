import React from "react";
import tech from "../Data/technologies.json";
import "../Styles/Technologies.css";

export default function Technologies() {
  return (
    <div className="tech" id="Tech">
      <div className="heading">
        <h2>Technologies</h2>
      </div>
      <div className="paragraph">
        <p>
          Here is the technologies that I already know and also starting to
          learn.
        </p>
      </div>
      <div className="content">
        <ul className="icon-grid">
          {/* Nesting -1 */}
          {tech.map((techData) => {
            return (
              <div className="contaier" key={techData.id}>
                <li className="icon-container">
                  <img
                    className="tech-icon"
                    src={techData.icon}
                    alt="technology icon"
                  />
                  <label className="tech-name">{techData.name}</label>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
