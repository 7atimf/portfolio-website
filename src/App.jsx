import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectModal from './components/ProjectModal';
import { personalInfo } from './data/projects';

// Nav component to handle active states if needed
const Navbar = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{
        maxWidth: '1150px',
        margin: '0 auto',
        padding: '1rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <img src="/7tm.svg" alt="Logo" style={{ height: '27px', objectFit: 'contain' }} />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--accent-color)',
            letterSpacing: '1px'
          }}></span>
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: 'var(--text-primary)',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'color 0.2s'
};

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh' }}>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home onProjectClick={setSelectedProject} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={{
          textAlign: 'center',
          padding: '3rem',
          color: 'var(--text-secondary)',
          marginTop: '4rem',
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </footer>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
