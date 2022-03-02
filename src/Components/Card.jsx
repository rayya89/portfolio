import React from 'react'
import projects from '../Data/projects.json'

export default function Card({ project }) {
  return (
    <div className='card'>
        <img width={100} height={100} src={projects.at(project).picture} alt="what is the project about" />
        <h3>{projects.at(project).title}</h3>
    </div>
  )
}
