import React, { useEffect, useRef } from 'react';
import profileImg from '../assets/sahil1.jpg';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;
    
    const initVanta = () => {
      if (window.VANTA && heroRef.current) {
        vantaEffect = window.VANTA.WAVES({
          el: heroRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x323647,
          waveHeight: 25.00,
          waveSpeed: 1.30,
          zoom: 0.65
        });
      }
    };

    // Wait for Vanta to load
    const timer = setTimeout(initVanta, 100);

    return () => {
      clearTimeout(timer);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section className="hero-container" ref={heroRef}>
      <div className="hero-text-container">
        <div className="hero-text">
          <h3>Hi! I am </h3><h2>Sahil Narang.</h2>
          <h3>Pre-Final Year B.Tech. CS student at UPES</h3>
        </div>
        <div className="hero-description">
          <p>
            Aspiring Front-End Engineer passionate about building modern, responsive, and scalable web applications. Skilled in
            React, TypeScript, and advanced UI libraries with experience in creating seamless user experiences and solving complex
            front-end challenges.
          </p>
        </div>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profileImg} alt="Sahil Narnag" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;