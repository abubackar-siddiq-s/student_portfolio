import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tag">
            Available for Internships &amp; Opportunities
          </div>
          <h1 className="hero-name">
            <span className="line1">Abubackar</span>
            <span className="line2">Siddiq</span>
          </h1>
          <div className="hero-role">
            <span>Full Stack Developer | GenAI Developer</span> — MERN · GEN AI · DSA
          </div>
          <p className="hero-desc">
            Full Stack Developer building scalable web applications using the MERN stack, integrating LLM APIs, RAG, and developing real-time, data-driven systems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <i className="fa-solid fa-folder-open" /> See my work
            </a>
            <a href="#contact" className="btn-secondary">
              <i className="fa-solid fa-paper-plane" /> Let's talk
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">
                16<span>+</span>
              </div>
              <div className="stat-label">Projects built</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                20<span>+</span>
              </div>
              <div className="stat-label">Certificates</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                300<span>+</span>
              </div>
              <div className="stat-label">LeetCode Problems Solved</div>
            </div>
          </div>
        </div>
        <div className="hero-photo-wrap float">
          <div className="photo-badge top-left float2">
            <div className="badge-val">100 Days</div>
            <div className="badge-label">LeetCode Badge</div>
          </div>
          <div className="hero-photo-frame">
            <img src="/Abubackar Face.png" alt="Abubackar Siddiq" />
          </div>
          <div className="photo-badge bottom-right">
            <div className="badge-val">MERN Stack</div>
            <div className="badge-label">With Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
