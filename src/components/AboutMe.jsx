import React from 'react';
import { personalInfo } from '../data/projects';

const AboutMe = () => {
    return (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <h2 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                color: 'var(--accent-color)',
                textAlign: 'center'
            }}>
                About Me
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {personalInfo.experiences.map((exp, index) => (
                    <div key={index} style={{
                        background: 'var(--card-bg)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        transition: 'transform 0.3s ease',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                        <div style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            {exp.company} | {exp.duration}
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutMe;
