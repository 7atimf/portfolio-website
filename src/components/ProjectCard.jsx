import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';
import { translations } from '../data/languages';

const ProjectCard = ({ project, onClick, language = 'en' }) => {
    const t = translations[language];
    const projectTranslation = t.projects_list?.[project.id] || {};
    
    // Use translation if available, fallback to original project data
    const displayTitle = projectTranslation.title || project.title;
    const displayDescription = projectTranslation.description || project.description;
    const displayDate = t.dates?.[project.date] || project.date;
    
    return (
        <div
            className="project-card"
            onClick={() => onClick(project)}
            style={{
                background: 'var(--card-bg)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    src={project.images[0]}
                    alt={displayTitle}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.2rem', fontSize: '1.25rem' }}>
                    {displayTitle}
                </h3>
                <div style={{
                    color: 'var(--accent-color)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <FaMapMarkerAlt style={{ fontSize: '0.8rem' }} />
                    {project.role}
                </div>
                <div style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem',
                    marginBottom: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <FaCalendarAlt style={{ fontSize: '0.75rem' }} />
                    {displayDate}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {displayDescription}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '999px',
                            background: 'rgba(215, 204, 204, 0.11)',
                            color: '#a5a5a5ff'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
