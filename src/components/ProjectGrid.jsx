import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/languages';

const ProjectGrid = ({ onProjectClick }) => {
    const { language } = useLanguage();
    const t = translations[language];
    
    // Group projects by category
    const categories = projects.reduce((acc, project) => {
        const cat = project.category || 'Other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(project);
        return acc;
    }, {});

    return (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            {Object.entries(categories).map(([category, categoryProjects]) => {
                // Translate category name
                const translatedCategory = t.categories?.[category] || category;
                
                return (
                    <div key={category} style={{ marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            marginBottom: '2rem',
                            color: 'var(--accent-color)',
                            textAlign: 'center'
                        }}>
                            {translatedCategory}
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {categoryProjects.map((project, idx) => (
                                <ScrollReveal key={project.id} delay={idx * 100}>
                                    <ProjectCard
                                        project={project}
                                        onClick={onProjectClick}
                                        language={language}
                                    />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ProjectGrid;
