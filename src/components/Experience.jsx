import React from 'react';
import '../App.css';
import workExperienceVideo from '../assets/work_Experiance.mp4';

const internships = [
  {
    role: "Web Developer Intern",
    company: "VirtualEnvi",
    duration: "Jun 2025 - Present"
  }
];

const volunteers = [
  {
    role: "Member",
    company: "OPEN Community",
    duration: "Feb 2025 - July 2025"
  },
  {
    role: "Batch Representative",
    company: "UPES ACM Student Chapter",
    duration: "Sep 2023 - May 2024"
  }
];

function Experience() {
  const isMobile = window.innerWidth <= 900;

  return (
    <section className="experience-section" id="Experience">
      {isMobile && (
        <>
          <video
            className="experience-bg-video"
            src={workExperienceVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="experience-bg-overlay" />
        </>
      )}
      <div className="experience-flex">
        {/* Left: Video (desktop only) */}
        <div className="experience-right-placeholder">
          {!isMobile && (
            <video
              src={workExperienceVideo}
              autoPlay
              loop
              muted
              playsInline
              className="experience-video"
              style={{ width: '70%', maxWidth: 350, borderRadius: 18 }}
            />
          )}
        </div>
        {/* Right: Experience List */}
        <div className="experience-list-modern">
          <h2 className="experience-title">My Experience</h2>
          {/* Internship Section */}
          <h3 className="experience-subtitle">Internship</h3>
          {internships.map((exp, idx) => (
            <React.Fragment key={idx}>
              <div className="experience-modern-row-minimal">
                <div>
                  <div className="experience-modern-role-minimal">{exp.role}</div>
                  <div className="experience-modern-company-minimal">{exp.company}</div>
                </div>
                <div className="experience-modern-duration-minimal">{exp.duration}</div>
              </div>
              {idx !== internships.length - 1 && (
                <hr className="experience-divider-minimal" />
              )}
            </React.Fragment>
          ))}
          {/* Volunteer Section */}
          <h3 className="experience-subtitle experience-volunteer-subtitle">Volunteer</h3>
          {volunteers.map((exp, idx) => (
            <React.Fragment key={idx}>
              <div className="experience-modern-row-minimal">
                <div>
                  <div className="experience-modern-role-minimal">{exp.role}</div>
                  <div className="experience-modern-company-minimal">{exp.company}</div>
                </div>
                <div className="experience-modern-duration-minimal">{exp.duration}</div>
              </div>
              {idx !== volunteers.length - 1 && (
                <hr className="experience-divider-minimal" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
