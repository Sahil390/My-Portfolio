import React from 'react';
import '../App.css';

function Projects() {
  return (
    <section
      className="projects-section"
      id="Projectes"
    >
      <h2 className="projects-title" style={{
        fontSize: '2.8rem',
        color: '#fffbe6',
        marginBottom: '2.5rem',
        letterSpacing: '2px',
        fontWeight: 700,
        textShadow: '0 2px 16px #000a',
      }}>Projects</h2>
      {/* Project cards will go here */}
      <div style={{ color: '#fffbe6', opacity: 0.7, fontSize: '1.2rem' }}>
        Project showcase coming soon...
      </div>
    </section>
  );
}

export default Projects;
