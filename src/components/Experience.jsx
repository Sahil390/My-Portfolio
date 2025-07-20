import React from 'react';
import '../App.css';

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Pvt. Ltd.",
    duration: "Jul 2024 - Present",
    desc: "Working on modern web applications using React.js, Redux, and Material-UI. Built and maintained scalable UI components and collaborated with cross-functional teams."
  },
  {
    role: "Core Member, Coding Club",
    company: "UPES ACM Student Chapter",
    duration: "2022 - 2024",
    desc: "Organized coding events, mentored juniors, and contributed to club projects and hackathons."
  },
  {
    role: "Volunteer, Tech Fest",
    company: "UPES",
    duration: "2023",
    desc: "Assisted in event management and technical support for university tech fest."
  }
];

function Experience() {
  return (
    <section className="experience-section" id="Experience">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experiences.map((exp, idx) => (
          <div
            className={`timeline-item ${idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
            key={idx}
            style={{ top: `${idx * 50}px` }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-duration">{exp.duration}</div>
              <div className="timeline-desc">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
