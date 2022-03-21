import React from "react";
import closeIcon from "../Assets/xmark.svg";
import "../Styles/ModalCard.css"

export default function ModalCard({ setModal, projectInfo }) {
  const { id, screenshot, title, description, techUsed, webLink, gitLink } = projectInfo;

  return (
        <div className="modal-card">
          <div className="img-modal">
            <img className="screenshot" src={screenshot} alt="project screenshot"/>
            <img onClick={() => setModal(null)} className="modal-icon" src={closeIcon} alt="close icon" />
          </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="modal-tech">
              {techUsed.map((techUsed) => {
                return <span key={id}>{techUsed}</span>;
              })}
              </div>
              <a href={webLink}>
              <button className="button-primary">Visit website</button>
              </a>
              <a href={gitLink}>
              <button className="button-secondary">Git repository</button>
              </a>
        </div>
  );
}
