import React from 'react'

export default function Technology({ technologyInfo }) {

    const { icon, name } = technologyInfo;
    return (
        <div className="contaier">
          <li className="icon-container">
            <img className="tech-icon" src={icon} alt="technology icon"/>
            <label className="tech-name">{name}</label>
          </li>
        </div> 
        )
    }
