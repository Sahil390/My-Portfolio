import React from 'react';
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
    image: "https://i.imgur.com/1NqZQ2p.png",
    category: "Productivity | Jan 2024",
    title: "Taskify – Smart To-Do App",
    desc: "Organize your daily tasks with smart reminders, categories, and a clean UI. Built with React and Firebase.",
    github: "https://github.com/Sahil390/taskify",
    live: "https://taskify-app.web.app/"
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
  return (
    <section className="projects-section" id="Projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-tile-grid">
        {projects.slice(0, 2).map((proj, idx) => (
          <div className="project-tile-card" key={idx}>
            <div className="project-tile-image">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="project-tile-content">
              <div className="project-tile-category">{proj.category}</div>
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
        ))}
      </div>
    </section>
  );
}

export default Projects;
