import React from "react"; // unnecesary import -1
// import projects from "../Data/projects.json"; // unnecesary import -5
import "../Styles/Card.css";

// Here you are passing an index instead of a project, this leads to huge coding bugs
export default function Card({ project }) {
  console.log("project", project);

  return (
    <div className="card">
      <img src={project.picture} alt="what is the project about" />
      <h3>{project.title}</h3>
    </div>
  );
}
