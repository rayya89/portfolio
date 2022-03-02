import React from 'react'
import ReactDom from 'react-dom'
import closeIcon from '../Assets/xmark.svg'
import projects from '../Data/projects.json'


const MODAL_STYLES = {
    backgroundColor: "#FFF",
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '50px',
    zIndex: 1000 
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor : 'rgba(0,0,0,.7)',
    zIndex: 1000
}

export default function Modal({ setOpenModal, project }) {
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                <button onClick={() => setOpenModal(false)}><img src={closeIcon} width={16} height={16} alt="close icon" /></button>
                <div className="modal-image">
                    <img src={projects.at(project).screenshot} width={327} height={184} alt="project screenshot"/>
                </div>
                <div className="modal-title">
                    <h2>{projects.at(project).title}</h2>
                </div>

                <div className="modal-description">
                    <p>{projects.at(project).description}</p>
                </div>
                <div className="modal-tech">
                {projects.at(project).techUsed.map (techUsed => {
                    return(
                        <span>{techUsed}</span>
                    )
                })}
                </div>
                <button className="button-primary"><a href={projects.at(project).webLink}>Visit website/app</a></button>
                <button className="button-secondary"><a href={projects.at(project).gitLink}>Git repository</a></button>
            </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}
