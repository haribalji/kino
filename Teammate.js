import React from 'react'
import '../Teamsection.css'
export default function Teammate({ name, role, initialImg, hoverImg, linkedIn }) {
  return (
    <div className="team-member">
      <div className="img-container" style={{ width: "337px", height: "322px" }}>
        <img src={initialImg} alt="Initial" className="initial-img" />
        <img src={hoverImg} alt="Hover" className="hover-img" />
      </div>
      <div className="memberdetails">
        <h2 className="name">{name}</h2>
        <p className="role">{role}</p>
      </div>
      <a href={linkedIn} className="neon-button" target="_blank" rel="noopener noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Connect on LinkedIn
      </a>
    </div>
  )
}
