
import React from 'react';
import '../App.css';

function Projects() {
  return (
    <section className="projects-section" id="Projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list-modern">
        {/* Project 1 */}
        <div className="project-modern-row">
          <div className="project-modern-image">
            <img src="https://i.imgur.com/6X8Q4Qp.png" alt="Calc Quest Screenshot" />
          </div>
          <div className="project-modern-info">
            <div className="project-modern-title">Calc Quest – A Calculator game</div>
            <div className="project-modern-desc">
              Calc Quest – A Calculator Game where each puzzle transforms ordinary calculations into extraordinary challenges! Use your wits and the unique calculator functions to solve progressively harder levels. Now Available on playstore
            </div>
            <div className="project-modern-label">Techstack:</div>
            <div className="project-modern-badges">
              <span className="badge badge-blue">Flutter</span>
              <span className="badge badge-blue">Dart</span>
              <span className="badge badge-blue">UI/UX</span>
            </div>
          </div>
        </div>
        <hr className="project-modern-divider" />
        {/* Project 2 */}
        <div className="project-modern-row">
          <div className="project-modern-image">
            <img src="https://i.imgur.com/8Km9tLL.png" alt="Share Market App Screenshot" />
          </div>
          <div className="project-modern-info">
            <div className="project-modern-title">Dummy Share Market</div>
            <div className="project-modern-desc">
              The dummy share market, a fantastic tool to understand, Investing and trading, with guidance so grand. Simulate stock trading without risking a dime, Learn the market's intricacies, in your own time.
            </div>
            <div className="project-modern-label">Techstack:</div>
            <div className="project-modern-badges">
              <span className="badge badge-blue">Flutter</span>
              <span className="badge badge-blue">Dart</span>
              <span className="badge badge-blue">Firebase</span>
              <span className="badge badge-blue">Firestore</span>
              <span className="badge badge-blue">Analytics</span>
              <span className="badge badge-blue">Authentication</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
