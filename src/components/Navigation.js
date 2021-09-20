import React from 'react';

export default function Navigation(props) {
  const { content, setContent } = props;
  return (
    <nav>
      <ul className="nav-list">
        <li className={"nav-item " + (content === "about" ? "disabled" : "")} onClick={() => setContent('about')}>About Me</li>
        <li className={"nav-item " + (content === "portfolio" ? "disabled" : "")} onClick={() => setContent('portfolio')}>Portfolio</li>
        <li className={"nav-item " + (content === "contact" ? "disabled" : "")} onClick={() => setContent('contact')}>Contact</li>
        <li className={"nav-item " + (content === "resume" ? "disabled" : "")} onClick={() => setContent('resume')}>Resume</li>
      </ul>
    </nav>
  )
}