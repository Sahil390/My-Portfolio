import React from 'react';
import '../App.css';

const projects = [
  {
    image: "https://i.imgur.com/6X8Q4Qp.png",
    category: "Entertainment Technology | June 2022",
    title: "Calc Quest – A Calculator game",
    desc: "Calc Quest – A Calculator Game where each puzzle transforms ordinary calculations into extraordinary challenges! Use your wits and the unique calculator functions to solve progressively harder levels.",
    github: "https://github.com/Sahil390/calc-quest",
    live: "https://play.google.com/store/apps/details?id=com.calcquest.app"
  },
  {
    image: "https://i.imgur.com/8Km9tLL.png",
    category: "Finance | 2023",
    title: "Dummy Share Market",
    desc: "Simulate stock trading without risking a dime. Learn the market's intricacies, in your own time.",
    github: "https://github.com/Sahil390/dummy-share-market",
    live: "https://dummy-share-market.web.app/"
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
        {projects.map((proj, idx) => (
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
