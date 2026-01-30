import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/projects';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDownload } from 'react-icons/fa';

const Hero = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv FADOUL Hatim.pdf';
        link.download = 'cv FADOUL Hatim.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section style={{
            padding: '4rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.8s ease-out'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap-reverse', // Stacks correctly on mobile
                justifyContent: 'space-between',
                width: '100%'
            }}>

                {/* Left Side: Text */}
                <div style={{ flex: '1 1 500px' }}>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        background: 'linear-gradient(to right, #fff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        {personalInfo.name}
                    </h1>
                    <h2 style={{
                        fontSize: '1.8rem',
                        color: 'var(--accent-color)',
                        marginBottom: '1.5rem',
                        fontWeight: '600'
                    }}>
                        {personalInfo.role}
                    </h2>
                    <p style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        lineHeight: '1.8',
                        maxWidth: '600px'
                    }}>
                        {personalInfo.bio}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <Link to="/contact" style={contactButtonStyle}>
                            Contact Me
                        </Link>

                        <button onClick={handleDownloadCV} style={downloadButtonStyle}>
                            <FaDownload /> Download CV
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '2rem' }}>
                        <a href={personalInfo.contact.github} style={iconBtnStyle} title="GitHub" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={28} />
                        </a>
                        <a href={personalInfo.contact.linkedin} style={iconBtnStyle} title="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={28} />
                        </a>
                        <a href={personalInfo.contact.instagram} style={iconBtnStyle} title="Instagram" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={28} />
                        </a>
                        <a
                            href={`mailto:${personalInfo.contact.email}`}
                            style={iconBtnStyle}
                            title="Email"
                        >
                            <FaEnvelope size={28} />
                        </a>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        style={{
                            width: '350px',
                            height: '350px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid var(--accent-color)',
                            boxShadow: '0 0 40px var(--accent-glow)'
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

const iconBtnStyle = {
    padding: '1rem',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
};

const contactButtonStyle = {
    display: 'inline-block',
    padding: '0.7rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fff',
    background: 'var(--accent-color)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    boxShadow: '0 4px 15px var(--accent-glow)'
};

const downloadButtonStyle = {
    display: 'inline-block',
    padding: '0.7rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--accent-color)',
    background: 'rgba(255,255,255,0.05)',
    border: '2px solid var(--accent-color)',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.8rem'
};

// Add hover effect via cleaner logical CSS in real project, but using style object for now requires JS
// We can assume global CSS has hover states or simple transitions.
// To make it interactive inline, we might need state or styled-components, but standard CSS class is better.
// Adding a small script/style block for hover for these specifically if needed, or relying on index.css

export default Hero;
