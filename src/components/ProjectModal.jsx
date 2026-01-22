import React, { useEffect, useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                        alt={`${project.title} ${currentImageIndex + 1}`}
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
                            <div style={{
                                position: 'absolute',
                                bottom: '1rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '0.5rem'
                            }}>
                                {project.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: idx === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex(idx);
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div style={{ padding: '2.5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.3rem' }}>{project.title}</h2>
                    <div style={{
                        color: 'var(--accent-color)',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <span>{project.role}</span>
                        <span style={{ width: '4px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '50%' }}></span>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}>{project.date}</span>
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
                        <p>{project.description}</p>
                        <br />
                        <p>{project.details}</p>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            background: 'var(--accent-color)',
                            color: '#0f172a',
                            padding: '1rem 2rem',
                            borderRadius: '12px',
                            fontWeight: '600',
                            transition: 'transform 0.2s',
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
