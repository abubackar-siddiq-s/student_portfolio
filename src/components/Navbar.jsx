import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''} id="nav">
      <div className="nav-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        &lt;ABU /&gt;
      </div>
      <div className="nav-links">
        <a href="#about" data-num="01">
          About
        </a>
        <a href="#projects" data-num="02">
          Projects
        </a>
        <a href="#certs" data-num="03">
          Certs
        </a>
        <a href="#contact" data-num="04">
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1er5daZv-h8JshJReTT2mbwNjHozPT1rp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume"
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}
