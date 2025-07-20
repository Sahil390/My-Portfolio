import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <a href="/">
            <span className="logo-text">
              <span className="logo-s">S</span><span className="logo-ahil">ahil</span> <span className="logo-n">N</span><span className="logo-arang">arang</span>
            </span>
          </a>
        </div>
        <div className={`nav-buttons ${isScrolled ? 'scrolled' : ''}`}>
        <nav className={'nav-links'}>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href='#Experience'>Experience</a>
          <a href="#Contact">Contact</a>
        </nav>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </header>

      <div className={`side-panel ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>&times;</div>
        <nav className="side-panel-links">
          <a href="#Skills" onClick={toggleMenu}>Skills</a>
          <a href="#Projects" onClick={toggleMenu}>Projects</a>
          <a href="#Experience" onClick={toggleMenu}>Experience</a>
          <a href="#Contact" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Header;