import React from 'react'
import projects from '../Data/projects.json'
import '../Styles/Card.css'

export default function Card({ project }) {
  return (
    <div className='card'>
        <img src={projects.at(project).picture} alt="what is the project about" />
        <h3>{projects.at(project).title}</h3>
    </div>
  )
}
