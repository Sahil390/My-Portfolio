import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import QuickNote from '../assets/Project/Quick_Note.png';
import WebGen from '../assets/Project/WebGenerator.png';
import textedit from '../assets/Project/TextEditer.png';
import textsummer from '../assets/Project/textsummerizer.png';
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
    image: textsummer,
    category: "Productivity | Sep 2024",
    title: "Text Summarizer – AI-Powered Text Summarization",
    desc: "A modern, responsive web application that summarizes text using the Gemini API.",
    github: "https://github.com/Sahil390/Text-summariser",
    live: "https://text-summariser-ae95.onrender.com/"
  },
  {
    image: textedit,
    category: "Education | Jul 2022",
    title: "SuperPad-Text-Editor – Collaborative Text Editing",
    desc: "This is a simple Python project where I build a basic text editor named SuperPad with a few additional features like a todo list and calculator.",
    github: "https://github.com/Sahil390/SuperPad-Text-Editor",
    live: "https://www.youtube.com/watch?v=uCH11M75p8w"
  }
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Animate section height
  useEffect(() => {
    if (showAll) {
      setExpanded(true);
    } else {
      // Wait for tile animation to finish before collapsing height
      const timeout = setTimeout(() => setExpanded(false), 0);
      return () => clearTimeout(timeout);
    }
  }, [showAll]);

  return (
    <section className="projects-section" id="Projects">
      <h2 className="projects-title">Projects</h2>
      <div
        className={`projects-expand-wrapper${expanded ? ' expanded' : ''}`}
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
          <>
            <button
              className="explore-more-btn"
              onClick={() => setShowAll(false)}
              title="Show Less"
              style={{ fontSize: "1.5rem", padding: "0.5em 1em" }}
            >
              ▲
            </button>
            <a
              href="https://github.com/Sahil390?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-more-btn"
            >
              Explore More on GitHub ↗
            </a>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
