import React from 'react';
import ProjectGrid from '../components/ProjectGrid';

const Academic = ({ onProjectClick }) => {
    return (
        <div>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    textAlign: 'center'
                }}>
                    Projets Académiques
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontSize: '1.1rem'
                }}>
                    Mes projets réalisés dans le cadre de ma formation
                </p>
            </div>
            <ProjectGrid onProjectClick={onProjectClick} category="Projets Académiques" />
        </div>
    );
};

export default Academic;
