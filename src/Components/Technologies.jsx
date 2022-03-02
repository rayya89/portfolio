import React from 'react'
import tech from '../Data/technologies.json'

export default function Technologies() {
  return (
    <div className="tech" id="Tech">
        <div className="heading">
            <h2>Technologies</h2>
        </div>
        <div className="paragraph">
            <p>Here is the technologies that I already know and also starting to learn.</p>
        </div>
        <div className="content">
            <ul>
            {
                tech.map (techData => {
                    return(
                        <div className="contaier" key={techData.id}>
                            <li>
                                    <img src={techData.icon} alt="technology icon" />
                                    <label>{techData.item}</label>
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
