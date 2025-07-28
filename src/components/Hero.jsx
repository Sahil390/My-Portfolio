import React, { useEffect, useRef } from 'react';
import profileImg from '../assets/sahil1.jpg';
import "./Hero.css";
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
          <a href="#Projects" className="btn-primary">View Projects</a>
          <a href="https://upesstd-my.sharepoint.com/:b:/g/personal/sahil_119480_stu_upes_ac_in/Ef8IZ1C2zRVIswe-vSnAfNkBFjMZhFy3PyxkZQ3YbBGgqw?e=kwy48F" className="btn-secondary" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profileImg} alt="Profile" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;