import React from 'react'
import projects from '../Data/projects.json'

export default function Projects() {
  return (
    <div className="projects">
        <div className="heading">
            <h2>Projects</h2>
        </div>
        <div className="paragraph">
            <p>Here are the projects I will be making during the Frontend course at Novare Potential.</p>
        </div>
        <div className="content">
            <ul>
            {
                projects.map (projectData => {
                    return(
                        <div className="contaier" key={projectData.id}>
                            <li>
                                <button>
                                    <img src={projectData.picture} alt="what is the project about" />
                                    <h3>{projectData.title}</h3>
                                </button>
                            </li>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    </div>
  )
}
