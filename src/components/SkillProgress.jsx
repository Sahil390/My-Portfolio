import React, { useEffect, useRef, useState } from 'react';
import './SkillProgress.css';

const skillsData = [
  {
    category: 'Web Development',
    color: '#fca311',
    skills: [
      { name: 'React', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 92 },
      { name: 'Vite', level: 80 },
      { name: 'Tailwind', level: 75 },
    ],
  },
  {
    category: 'Programming',
    color: '#b88a2b',
    skills: [
      { name: 'C++', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 70 },
      { name: 'DSA', level: 78 },
    ],
  },
  {
    category: 'Soft Skills',
    color: '#6c63ff',
    skills: [
      { name: 'Communication', level: 88 },
      { name: 'Teamwork', level: 90 },
      { name: 'Leadership', level: 80 },
      { name: 'Creativity', level: 85 },
    ],
  },
  {
    category: 'Database',
    color: '#2ec4b6',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'Firebase', level: 65 },
    ],
  },
  {
    category: 'Other',
    color: '#e63946',
    skills: [
      { name: 'Linux', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Figma', level: 70 },
    ],
  },
];

function SkillProgress() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="skill-progress-section" id="Skills" ref={ref}>
      <h2 className="skill-title">My Skills</h2>
      <div className="skill-boxes">
        {skillsData.map((cat, idx) => (
          <div className="skill-box" key={cat.category} style={{ background: '#242734' }}>
            <h3 style={{ color: cat.color }}>{cat.category}</h3>
            <div className="skill-list">
              {cat.skills.map(skill => (
                <div className="skill-bar-row" key={skill.name}>
                  <span className="skill-label">{skill.name}</span>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: inView ? skill.level + '%' : '0%',
                        background: cat.color,
                        boxShadow: `0 0 16px 2px ${cat.color}55`,
                        transition: `width 1.2s cubic-bezier(.77,0,.18,1) ${idx * 0.2 + 0.2}s`,
                      }}
                    ></div>
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillProgress;
