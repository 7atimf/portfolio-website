import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';
import { translations } from '../data/languages';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ project, onClose }) => {
    const { language } = useLanguage();
    const t = translations[language];
    const projectTranslation = t.projects_list?.[project.id] || {};
    
    if (!project) return null;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Use translation if available, fallback to original project data
    const displayTitle = projectTranslation.title || project.title;
    const displayCategory = projectTranslation.category || project.category;
    const displayDetails = projectTranslation.details || project.details;
    const displayDate = t.dates?.[project.date] || project.date;

    // Reset image index when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(5px)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                animation: 'fadeIn 0.2s ease-out'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: '#1e293b',
                    maxWidth: '800px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    animation: 'slideUp 0.3s ease-out'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#ffffffff',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={e => {
                        e.currentTarget.style.background = 'var(--accent-color)';
                        e.currentTarget.style.transform = 'rotate(90deg)';
                    }}
                    onMouseOut={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.transform = 'rotate(0deg)';
                    }}
                >
                    ×
                </button>

                <div style={{ position: 'relative', width: '100%', height: '500px', background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                        src={project.images[currentImageIndex]}
                        alt={`${displayTitle} ${currentImageIndex + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />

                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);
                                }}
                                style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    transition: 'background 0.3s'
                                }}
                                onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                                onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                            >
                                ←
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => (prev + 1) % project.images.length);
                                }}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    transition: 'background 0.3s'
                                }}
                                onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                                onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                            >
                                →
                            </button>
                        </>
                    )}
                </div>

                {project.images.length > 1 && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        padding: '0.8rem 0',
                        background: 'transparent'
                    }}>
                        {project.images.map((_, idx) => (
                            <div
                                key={idx}
                                style={{
                                    width: idx === currentImageIndex ? '24px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: idx === currentImageIndex ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)',
                                    boxShadow: idx === currentImageIndex ? '0 0 10px var(--accent-glow)' : 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(idx);
                                }}
                            />
                        ))}
                    </div>
                )}

                <div style={{ padding: '0.5rem 2.5rem 2.5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.3rem' }}>
                        {displayTitle}
                    </h2>
                    <div style={{
                        color: 'var(--accent-color)',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaMapMarkerAlt />
                            <span>{project.role}</span>
                        </div>
                        <span style={{ width: '4px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '50%' }}></span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: '400' }}>
                            <FaCalendarAlt />
                            <span>{displayDate}</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        {project.tags.map(tag => (
                            <span key={tag} style={{
                                fontSize: '0.85rem',
                                padding: '0.3rem 1rem',
                                borderRadius: '999px',
                                background: 'rgba(56, 189, 248, 0.1)',
                                color: '#fff'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        <p>{projectTranslation.description || project.description}</p>
                        <br />
                        <p>{displayDetails}</p>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            background: 'var(--accent-color)',
                            color: '#0f172a',
                            padding: '0.6rem 1.4rem',
                            borderRadius: '12px',
                            fontWeight: '600',
                            transition: 'transform 0.2s',
                            fontSize: '0.95rem'
                        }}
                        onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.target.style.transform = 'scale(1)'}
                    >
                        Link of Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
 