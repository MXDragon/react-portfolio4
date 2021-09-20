import React from 'react';

export default function Project(props) {
  return (
    <div className="project-card">
      <h3>{props.name}</h3>
      <img className="project-img" src={process.env.PUBLIC_URL + props.imageUrl} alt={props.name}></img>
      <p>{props.description}</p>
      <div className="project-links">
        <a href={props.github}>GitHub</a>
        <a href={props.livelink}>Live App</a>
      </div>
    </div>
  )
}