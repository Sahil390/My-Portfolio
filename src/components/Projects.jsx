import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import QuickNote from '../assets/Project/Quick_Note.png';
import WebGen from '../assets/Project/WebGenerator.png';

const projects = [
  {
    image: QuickNote,
    category: "Productivity | Work in Progress",
    title: "Quick Note – Note-taking App ",
    desc: "Quick Note – A sleek and modern note-taking application built with React, Redux, and Material-UI that helps you organize your thoughts, ideas, and tasks efficiently.",
    github: "https://github.com/Sahil390/quick-note",
    live: "https://sahilquicknotes.netlify.app/"
  },
  {
    image: WebGen,
    category: "Productivity | 2025",
    title: "WebGener – Website Generator",
    desc: "A modern, responsive web application that generates beautiful websites using AI. Built with React, TypeScript, and powered by Google's Gemini AI.",
    github: "https://github.com/Sahil390/WebGenerator",
    live: "https://websgenerator.netlify.app/"
  },
  {
    image: "https://private-user-images.githubusercontent.com/71542605/369766542-56794b76-3993-4079-9afa-1b4b96f873f9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMyNDUwMjgsIm5iZiI6MTc1MzI0NDcyOCwicGF0aCI6Ii83MTU0MjYwNS8zNjk3NjY1NDItNTY3OTRiNzYtMzk5My00MDc5LTlhZmEtMWI0Yjk2Zjg3M2Y5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzIzVDA0MjUyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI5MjM4ZjA4MDIxZWFiMjc5ZmJhZDVjNGEyMTQwN2Q1ZjFkYWIzMTMwY2Q2ZDY3MDJhZjgzNjUwZmZhY2ExNTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.sb4Vmvh3QClxC4mGx1Eg4pnS7_y2YnDhjWiRzGz-q_4",
    category: "Productivity | Jan 2024",
    title: "Text Summarizer – AI-Powered Text Summarization",
    desc: "A modern, responsive web application that summarizes text using the Gemini API.",
    github: "https://github.com/Sahil390/Text-summariser",
    live: "https://text-summariser-ae95.onrender.com/"
  },
  {
    image: "https://i.imgur.com/3XQZQ2p.png",
    category: "Education | Mar 2024",
    title: "QuizMaster – Online Quiz Platform",
    desc: "Create, share, and take quizzes with instant feedback and analytics. Designed for students and teachers.",
    github: "https://github.com/Sahil390/quizmaster",
    live: "https://quizmaster-app.web.app/"
  }
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef(null);

  // Animate section height
  useEffect(() => {
    if (showAll) {
      setExpanded(true);
    }
  }, [showAll]);

  return (
    <section className="projects-section" id="Projects">
      <h2 className="projects-title">Projects</h2>
      <div
        className={`projects-expand-wrapper${expanded ? ' expanded' : ''}`}
        ref={wrapperRef}
      >
        <div className="projects-tile-grid">
          {projects.map((proj, idx) => {
            const shouldReveal = showAll || idx < 2;
            return (
              <div
                className={
                  "project-tile-card" +
                  (!shouldReveal ? " project-tile-hidden" : "") +
                  (showAll && idx > 1 ? " project-tile-reveal" : "")
                }
                key={idx}
                style={{
                  transitionDelay: showAll && idx > 1 ? `${0.15 * (idx - 1)}s` : '0s'
                }}
              >
                <div className="project-tile-image">
                  <img src={proj.image} alt={proj.title} />
                  {proj.category.includes("Work in Progress") && (
                    <div className="work-progress-overlay">Working</div>
                  )}
                </div>
                <div className="project-tile-content">
                  <div className={
                    "project-tile-category" +
                    (proj.category.includes("Work in Progress") ? " work-in-progress-label" : "")
                  }>
                    {proj.category}
                  </div>
                  <div className="project-tile-title">{proj.title}</div>
                  <div className="project-tile-desc">{proj.desc}</div>
                  <div className="project-tile-links">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-tile-link">
                      GitHub ↗
                    </a>
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-tile-link">
                      Live ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem", gap: "1rem" }}>
        {!showAll && (
          <button
            className="explore-more-btn"
            onClick={() => setShowAll(true)}
          >
            See More Projects
          </button>
        )}
        {showAll && (
          <a
            href="https://github.com/Sahil390?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="explore-more-btn"
          >
            Explore More on GitHub ↗
          </a>
        )}
      </div>
    </section>
  );
}

export default Projects;
