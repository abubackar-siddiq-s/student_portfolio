import React from 'react';

export default function About() {
  return (
    <>
      <div className="divider" />
      <section className="section" id="about">
        <div className="section-label">Who I am</div>
        <div className="section-heading">
          Building the <em>future</em>,<br />one commit at a time.
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a <strong>Full Stack Developer</strong> and <strong>Computer Science &amp; Design student</strong> at Kongu Engineering College, focused on building scalable software, AI-powered applications, and clean, reliable backend systems.
            </p>
            <p>
              My experience spans full-stack web applications using the <strong>MERN stack</strong>, integrating <strong>LLM APIs (Gemini, RAG)</strong>, and developing real-time, data-driven applications.
            </p>
            <p>
              I've solved <strong>300+ LeetCode problems</strong> with a strong foundation in Data Structures and Algorithms. I believe great software is equal parts engineering and art — obsessing over performance, usability, and architecture.
            </p>
            <div className="edu-card">
              <div className="edu-degree">B.E. Computer Science and Design</div>
              <div className="edu-school">
                <a
                  href="https://kongu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  ↗ Kongu Engineering College
                </a>
              </div>
              <div className="edu-meta">
                <span>2024 – 2028 | Erode, Tamil Nadu</span>
                <span className="edu-gpa">CGPA: 8.42</span>
              </div>
            </div>
          </div>
          <div className="skills-side reveal reveal-delay-2">
            <div className="skills-category">
              <div className="skills-cat-title">// Full Stack &amp; Backend</div>
              <div className="skill-chips">
                <div className="chip">
                  <i className="fa-brands fa-node" style={{ color: '#3c873a' }} /> Node.js
                </div>
                <div className="chip">
                  <i className="fa-solid fa-code" style={{ color: '#888' }} /> Express.js
                </div>
                <div className="chip">
                  <i className="fa-solid fa-leaf" style={{ color: '#47a248' }} /> MongoDB
                </div>
                <div className="chip">
                  <i className="fa-solid fa-database" style={{ color: '#00758f' }} /> MySQL
                </div>
                <div className="chip">
                  <i className="fa-solid fa-plug" style={{ color: '#009688' }} /> RESTful APIs
                </div>
              </div>
            </div>
            <div className="skills-category">
              <div className="skills-cat-title">// Frontend &amp; UI</div>
              <div className="skill-chips">
                <div className="chip">
                  <i className="fa-brands fa-react" style={{ color: '#61dafb' }} /> React.js
                </div>
                <div className="chip">
                  <i className="fa-brands fa-html5" style={{ color: '#e34c26' }} /> HTML
                </div>
                <div className="chip">
                  <i className="fa-brands fa-css3-alt" style={{ color: '#1572b6' }} /> CSS
                </div>
                <div className="chip">
                  <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#38bdf8' }} /> Tailwind CSS
                </div>
                <div className="chip">
                  <i className="fa-brands fa-bootstrap" style={{ color: '#7952b3' }} /> Bootstrap
                </div>
                <div className="chip">
                  <i className="fa-solid fa-mobile-screen-button" style={{ color: '#ffb400' }} /> Responsive Design
                </div>
              </div>
            </div>
            <div className="skills-category">
              <div className="skills-cat-title">// AI &amp; GenAI</div>
              <div className="skill-chips">
                <div className="chip">
                  <i className="fa-solid fa-robot" style={{ color: '#00e5c8' }} /> Gemini API
                </div>
                <div className="chip">
                  <i className="fa-solid fa-brain" style={{ color: '#ff79c6' }} /> LLM Integration
                </div>
                <div className="chip">
                  <i className="fa-solid fa-network-wired" style={{ color: '#ffb400' }} /> RAG
                </div>
                <div className="chip">
                  <i className="fa-solid fa-chart-line" style={{ color: '#ff4b4b' }} /> Streamlit
                </div>
              </div>
            </div>
            <div className="skills-category">
              <div className="skills-cat-title">// Languages &amp; Tools</div>
              <div className="skill-chips">
                <div className="chip">
                  <i className="fa-brands fa-java" style={{ color: '#f89820' }} /> Java
                </div>
                <div className="chip">
                  <i className="fa-brands fa-python" style={{ color: '#3776ab' }} /> Python
                </div>
                <div className="chip">
                  <i className="fa-solid fa-code" /> C
                </div>
                <div className="chip">
                  <i className="fa-brands fa-js" style={{ color: '#f7df1e' }} /> JavaScript
                </div>
                <div className="chip">
                  <i className="fa-solid fa-diagram-project" style={{ color: '#009688' }} /> DSA
                </div>
                <div className="chip">
                  <i className="fa-solid fa-code-branch" style={{ color: '#f05032' }} /> Git
                </div>
                <div className="chip">
                  <i className="fa-brands fa-github" /> GitHub
                </div>
                <div className="chip">
                  <i className="fa-solid fa-server" style={{ color: '#ff4f8b' }} /> Vercel / Render
                </div>
                <div className="chip">
                  <i className="fa-solid fa-paper-plane" style={{ color: '#ff6c37' }} /> Postman
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
