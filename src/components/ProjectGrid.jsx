import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectGrid = ({ onProjectClick }) => {
    // Group projects by category
    const categories = projects.reduce((acc, project) => {
        const cat = project.category || 'Other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(project);
        return acc;
    }, {});

    return (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            {Object.entries(categories).map(([category, categoryProjects]) => (
                <div key={category} style={{ marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '2rem',
                        color: 'var(--text-primary)',
                        borderLeft: '4px solid var(--accent-color)',
                        paddingLeft: '1rem'
                    }}>
                        {category}
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {categoryProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={onProjectClick}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectGrid;
