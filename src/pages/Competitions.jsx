import React from 'react';
import ProjectGrid from '../components/ProjectGrid';

const Competitions = ({ onProjectClick }) => {
    return (
        <div>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    textAlign: 'center'
                }}>
                    Compétitions & Hackathons
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontSize: '1.1rem'
                }}>
                    Mes participations aux compétitions de robotique
                </p>
            </div>
            <ProjectGrid onProjectClick={onProjectClick} category="Compétitions & Hackathons" />
        </div>
    );
};

export default Competitions;
