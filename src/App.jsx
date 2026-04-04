import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import ProjectModal from './components/ProjectModal';
import { personalInfo } from './data/projects';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Nav component to handle active states if needed
const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  // Handle body overflow
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
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
          {/* Logo */}
          <Link to="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            textDecoration: 'none' 
          }}>
            <img src="/7tm.svg" alt="Logo" style={{ height: '27px', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Navigation */}
          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            alignItems: 'center',
            '@media (max-width: 768px)': {
              display: 'none'
            }
          }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
            
            {/* Desktop Language Dropdown */}
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

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              '@media (max-width: 768px)': {
                display: 'flex'
              },
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.8rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              padding: '0.5rem'
            }}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 99,
            animation: 'fadeIn 0.2s ease'
          }}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '70vw',
          maxWidth: '300px',
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 101,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '1rem',
          boxShadow: mobileMenuOpen ? '-10px 0 30px rgba(0, 0, 0, 0.3)' : 'none',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden'
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          style={{
            alignSelf: 'flex-end',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '1.8rem',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
        >
          ✕
        </button>

        {/* Mobile Navigation Links */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          padding: '1rem 0',
          flex: 1,
          overflowY: 'auto'
        }}>
          <Link 
            to="/" 
            style={mobileLinkStyle}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/portfolio" 
            style={mobileLinkStyle}
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            style={mobileLinkStyle}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          {/* Mobile Language Selector */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '1rem',
            paddingTop: '1rem'
          }}>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                borderRadius: '0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: 'none',
                background: 'transparent',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none'
              }}
              title="Select Language"
            >
              <span>{language === 'en' ? '🇬🇧 English' : '🇫🇷 Français'}</span>
              <span style={{ fontSize: '0.8rem' }}>
                {mobileDropdownOpen ? '▲' : '▼'}
              </span>
            </button>
            
            {mobileDropdownOpen && (
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setMobileDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    textAlign: 'left',
                    background: language === 'en' ? 'var(--accent-color)' : 'transparent',
                    color: language === 'en' ? '#000' : 'var(--text-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
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
                    setMobileDropdownOpen(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    textAlign: 'left',
                    background: language === 'fr' ? 'var(--accent-color)' : 'transparent',
                    color: language === 'fr' ? '#000' : 'var(--text-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
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

      {/* Add CSS for hamburger menu visibility */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="display: flex"][style*="gap: 2rem"] {
            display: none !important;
          }
          button[aria-label="Toggle mobile menu"] {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

const linkStyle = {
  color: 'var(--text-primary)',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'color 0.2s',
  textDecoration: 'none'
};

const mobileLinkStyle = {
  color: 'var(--text-primary)',
  fontSize: '1rem',
  fontWeight: '500',
  padding: '1rem 1rem',
  borderBottom: '1px solid rgba(255,255,255,0.05)',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  display: 'block'
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
            <Route path="/portfolio" element={<Portfolio onProjectClick={setSelectedProject} />} />
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
