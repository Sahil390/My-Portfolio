import React, { useEffect, useRef, useState } from 'react';
// import Projects from './Projects';


const skillsData = [
  {
    category: 'Web Development',
    color: '#fca311',
    skills: [
      { name: 'React', level: 80, description: 'Built multiple SPAs and portfolio projects using React, including hooks, context, and component-based architecture.' },
      { name: 'HTML/CSS', level: 90, description: 'Created responsive layouts and custom designs using modern HTML5 and CSS3, including Flexbox and Grid.' },
      { name: 'JavaScript', level: 85, description: 'Developed interactive features, handled API calls, and implemented logic using ES6+ JavaScript.' },
      { name: 'Node.js', level: 70, description: 'Built backend APIs and simple servers using Node.js and Express.' },
    ],
  },
  {
    category: 'Programming',
    color: '#b88a2b',
    skills: [
      { name: 'C', level: 75, description: 'Solved algorithmic problems and built small utilities using C.' },
      { name: 'Python', level: 80, description: 'Worked on automation scripts, data analysis, and solved coding challenges in Python.' },
      { name: 'Java', level: 60, description: 'Completed academic projects and assignments using Java.' },
      { name: 'DSA', level: 50, description: 'Practiced data structures and algorithms for coding interviews and problem-solving.' },
    ],
  },
  {
    category: 'Soft Skills',
    color: '#6c63ff',
    skills: [
      { name: 'Communication', level: 50, description: 'Presented projects and collaborated with teams effectively.' },
      { name: 'Teamwork', level: 80, description: 'Worked in group projects and contributed to shared goals.' },
      { name: 'Leadership', level: 85, description: 'Led small teams in academic and extracurricular activities.' },
      { name: 'Creativity', level: 50, description: 'Applied creative thinking to solve problems and design solutions.' },
    ],
  },
  {
    category: 'Other',
    color: '#e63946',
    skills: [
      { name: 'Linux', level: 90, description: 'Used Linux for development, scripting, and system management.' },
      { name: 'Git', level: 85, description: 'Version controlled all projects using Git and GitHub.' },
      { name: 'Figma', level: 50, description: 'Designed UI mockups and prototypes in Figma.' },
      { name: 'MySQL', level: 60, description: 'Created and managed databases, wrote queries for projects.' },
    ],
  },
];

function SkillProgress() {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  // Track which skill is open: {catIdx, skillIdx} or null
  const [openSkill, setOpenSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // Trigger animation when section is in view
      if (rect.top < window.innerHeight - 100) {
        setInView(true);
      }
      // Fullscreen effect when section is near top of viewport
      if (rect.top < 40 && rect.bottom > 200) {
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Unified close logic for fade-out
  const closeSkill = () => {
    setClosing(true);
  };

  const handleSkillClick = (catIdx, skillIdx) => {
    if (openSkill && openSkill.catIdx === catIdx && openSkill.skillIdx === skillIdx) {
      closeSkill();
    } else {
      setOpenSkill({ catIdx, skillIdx });
      setClosing(false);
    }
  };

  // Fade-out animation for closing description
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    if (!openSkill) return;
    setClosing(false);
    const handleClick = (e) => {
      if (e.target.closest('.skill-desc-vertical-content')) return;
      if (e.target.closest('.skill-label') || e.target.closest('.skill-bar-bg')) return;
      closeSkill();
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openSkill]);

  // After fade-out, actually close
  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(() => {
      setOpenSkill(null);
      setClosing(false);
    }, 350); // match fadeOutDesc duration
    return () => clearTimeout(timer);
  }, [closing]);

  return (
    <section
      className={`skill-progress-section${fullscreen ? ' fullscreen' : ''}`}
      id="Skills"
      ref={ref}
    >
      <h2 className="skill-title">My Skills</h2>
      <div className="skill-boxes">
        {skillsData.map((cat, catIdx) => {
          // If a skill in this box is selected, get its data
          const isBoxSelected = openSkill && openSkill.catIdx === catIdx;
          const selectedSkill = isBoxSelected ? cat.skills[openSkill.skillIdx] : null;
          // Determine if this is a right-column box (for 2-column layout)
          const isRightCol = (catIdx % 2 === 1);
          return (
            <div className="skill-box-with-desc" key={cat.category}>
              <div className="skill-box" style={{ background: '#242734', position: 'relative' }}>
                <h3 style={{ color: cat.color }}>{cat.category}</h3>
                <div className="skill-list">
                  {cat.skills.map((skill, skillIdx) => {
                    const isSelected = openSkill && openSkill.catIdx === catIdx && openSkill.skillIdx === skillIdx;
                    return (
                      <div
                        className={`skill-bar-row${isSelected ? ' selected' : ''}`}
                        key={skill.name}
                        style={{ position: 'relative', zIndex: isSelected ? 2 : 1 }}
                      >
                        <span
                          className="skill-label"
                          onClick={() => handleSkillClick(catIdx, skillIdx)}
                          style={{ cursor: 'pointer' }}
                        >
                          {skill.name}
                        </span>
                        <div
                          className="skill-bar-bg"
                          onClick={() => handleSkillClick(catIdx, skillIdx)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div
                            className="skill-bar-fill"
                            style={{
                              width: inView ? skill.level + '%' : '0%',
                              background: cat.color,
                              boxShadow: `0 0 16px 2px ${cat.color}55`,
                              transition: `width 1.2s cubic-bezier(.77,0,.18,1) ${catIdx * 0.2 + 0.2}s`,
                            }}
                          ></div>
                        </div>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Description panel to the right or left, separated by a vertical line */}
              {isBoxSelected && selectedSkill && (
                <div className={`skill-desc-vertical-panel${isRightCol ? ' flip-left' : ''}${closing ? ' closing' : ''}`}>
                  {isRightCol ? null : <div className="skill-desc-divider" />}
                  <div className="skill-desc-vertical-content" style={{ borderColor: cat.color }}>
                    <div className="skill-desc-content">{selectedSkill.description}</div>
                  </div>
                  {isRightCol ? <div className="skill-desc-divider" /> : null}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* <Projects /> */}
    </section>
  );
}

export default SkillProgress;
