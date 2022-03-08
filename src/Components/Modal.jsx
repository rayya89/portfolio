import React from "react";
import ReactDom from "react-dom";
import closeIcon from "../Assets/xmark.svg";
import projects from "../Data/projects.json";
// import '../Styles/Modal.css'

const MODAL_STYLES = {
  backgroundColor: "#FFF",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

// Component is too long
export default function Modal({ setOpenModal, project }) {
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <button onClick={() => setOpenModal(false)}>
            <img src={closeIcon} width={16} height={16} alt="close icon" />
          </button>
          <div className="modal-image">
            <img
              src={projects.at(project).screenshot}
              width={300}
              height={150}
              alt="project screenshot"
            />
          </div>
          <div className="modal-title">
            {/* Same problem with the card, you pass an index instead of the item */}
            {/* Forcing you to import the data in multiple parts of the app */}
            <h2>{projects.at(project).title}</h2>
          </div>

          <div className="modal-description">
            <p>{projects.at(project).description}</p>
          </div>
          <div className="modal-tech">
            {projects.at(project).techUsed.map((techUsed) => {
              return <span key={projects.at(project).id}>{techUsed}</span>;
            })}
          </div>
          <button className="button-primary">
            <a href={projects.at(project).webLink}>Visit website/app</a>
          </button>
          <button className="button-secondary">
            <a href={projects.at(project).gitLink}>Git repository</a>
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
