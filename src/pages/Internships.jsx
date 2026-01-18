import React from 'react';
import ProjectGrid from '../components/ProjectGrid';

const Internships = ({ onProjectClick }) => {
    return (
        <div>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    textAlign: 'center'
                }}>
                    Stages & Expérience
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontSize: '1.1rem'
                }}>
                    Mes expériences professionnelles et stages
                </p>
            </div>
            <ProjectGrid onProjectClick={onProjectClick} category="Stages & Expérience" />
        </div>
    );
};

export default Internships;
