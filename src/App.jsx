import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectModal from './components/ProjectModal';
import { personalInfo } from './data/projects';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Nav component to handle active states if needed
const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          
          {/* Language Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                padding: '0.6rem 1rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
              title="Select Language"
            >
              {language === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}
              <span style={{ fontSize: '0.8rem', marginLeft: '0.3rem' }}>
                {dropdownOpen ? '▲' : '▼'}
              </span>
            </button>
            
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '0.5rem',
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                zIndex: 1000,
                minWidth: '160px',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    textAlign: 'left',
                    background: language === 'en' ? 'var(--accent-color)' : 'transparent',
                    color: language === 'en' ? '#000' : 'var(--text-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (language !== 'en') {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (language !== 'en') {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => {
                    setLanguage('fr');
                    setDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    textAlign: 'left',
                    background: language === 'fr' ? 'var(--accent-color)' : 'transparent',
                    color: language === 'fr' ? '#000' : 'var(--text-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (language !== 'fr') {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (language !== 'fr') {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  🇫🇷 Français
                </button>
              </div>
            )}
          </div>
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
    <LanguageProvider>
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
          <p>&copy; {new Date().getFullYear()} {"Fadoul Hatim"}.</p>
        </footer>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
