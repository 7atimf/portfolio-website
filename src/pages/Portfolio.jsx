import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { portfolioImages } from '../data/portfolioImages';

const Portfolio = ({ onProjectClick }) => {
    const { language } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(null);

    // Use portfolio images from configuration
    const allImages = portfolioImages;

    return (
        <section style={{ maxWidth: '1800px', margin: '0 auto', padding: '2rem 1rem' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: 'var(--accent-color)',
                    marginBottom: '1rem',
                    letterSpacing: '2px'
                }}>
                    Portfolio
                </h1>
                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    {language === 'en' 
                        ? 'Gallery of my technical projects, robotics work, and professional highlights'
                        : 'Galerie de mes projets techniques, travaux en robotique et réalisations professionnelles'}
                </p>
            </div>

            {/* Instagram-style 3-column grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '1rem',
                gridAutoRows: '450px'
            }}>
                {allImages.map((item, idx) => (
                    <ScrollReveal key={item.id} delay={idx * 50}>
                        <div
                            onClick={() => setSelectedImage(item)}
                            style={{
                                position: 'relative',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                width: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.03)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.16)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.projectTitle}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                            {/* Overlay on hover */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = '0';
                            }}
                            >
                                <p style={{
                                    color: '#fff',
                                    fontSize: '0.9rem',
                                    textAlign: 'center',
                                    padding: '1rem'
                                }}>
                                    {item.projectTitle}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Image lightbox modal */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: '2rem'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            maxWidth: '90vw',
                            maxHeight: '90vh'
                        }}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.projectTitle}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                maxHeight: '90vh',
                                maxWidth: '90vw'
                            }}
                        />
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            ✕
                        </button>
                        {/* Project info */}
                        <p style={{
                            color: 'var(--text-primary)',
                            marginTop: '1rem',
                            textAlign: 'center',
                            fontSize: '0.9rem'
                        }}>
                            {selectedImage.projectTitle}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
