import React from 'react';
import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/languages';

const EducationSkills = () => {
    const { language } = useLanguage();
    const t = translations[language];
    
    return (
        <section className="education-skills" style={{ 
            maxWidth: '1200px', 
            width: '100%', 
            margin: '2rem auto', 
            padding: '0 1.5rem' 
        }}>
            {/* Main Card Container */}
            <div style={{
                background: '#0a1025',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.05)'
            }}>
                {/* Education Section */}
                <div style={{
                    flex: '1 1 100%',
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
                        color: 'var(--accent-color)',
                        marginBottom: '0.5rem',
                        fontWeight: '700'
                    }}>
                        {t.education}
                    </h3>
                    <div style={{
                        width: '50px',
                        height: '3px',
                        background: 'var(--accent-color)',
                        marginBottom: '1.5rem',
                        borderRadius: '2px'
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {t.education_list.map((edu, idx) => (
                            <div key={idx}>
                                <div style={{ fontWeight: 'bold', fontSize: 'clamp(1rem, 4vw, 1.1rem)', color: '#fff', marginBottom: '0.2rem' }}>
                                    {edu.degree}
                                </div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                                    {edu.school}
                                </div>
                                <div style={{ color: 'var(--accent-color)', fontSize: '0.85rem' }}>
                                    {edu.year}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div style={{
                    flex: '1 1 100%',
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
                        color: 'var(--accent-color)',
                        marginBottom: '0.5rem',
                        fontWeight: '700'
                    }}>
                        Skills
                    </h3>
                    <div style={{
                        width: '50px',
                        height: '3px',
                        background: 'var(--accent-color)',
                        marginBottom: '1.5rem',
                        borderRadius: '2px'
                    }}></div>

                    <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '0.75rem',
                        rowGap: '1rem'
                    }}>
                        {personalInfo.skills.map(skill => (
                            <span 
                                key={skill} 
                                style={{
                                    background: 'rgba(30, 40, 70, 0.5)',
                                    color: '#cbd5e1',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '6px',
                                    fontSize: '0.85rem',
                                    border: '1px solid rgba(50, 70, 120, 0.3)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Languages Section */}
                <div style={{
                    flex: '1 1 100%',
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
                        color: 'var(--accent-color)',
                        marginBottom: '0.5rem',
                        fontWeight: '700'
                    }}>
                        Languages
                    </h3>
                    <div style={{
                        width: '50px',
                        height: '3px',
                        background: 'var(--accent-color)',
                        marginBottom: '1.5rem',
                        borderRadius: '2px'
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {personalInfo.languages.map((lang, idx) => (
                            <div key={idx} style={{ width: '100%', minWidth: 0 }}>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    marginBottom: '0.5rem', 
                                    color: '#cbd5e1', 
                                    fontSize: '0.9rem',
                                    gap: '1rem'
                                }}>
                                    <span>{lang.name}</span>
                                    <span style={{ whiteSpace: 'nowrap' }}>{lang.level}%</span>
                                </div>
                                <div style={{ 
                                    width: '100%', 
                                    height: '8px', 
                                    background: 'rgba(255,255,255,0.1)', 
                                    borderRadius: '4px', 
                                    overflow: 'hidden' 
                                }}>
                                    <div style={{
                                        width: `${lang.level}%`,
                                        height: '100%',
                                        background: 'var(--accent-color)',
                                        borderRadius: '4px',
                                        transition: 'width 1s ease-in-out'
                                    }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Responsive Media Queries */}
            <style>{`
                .education-skills {
                    display: block !important;
                    visibility: visible !important;
                }

                @media (min-width: 900px) {
                    .education-skills > div {
                        display: flex !important;
                        flex-wrap: nowrap !important;
                        gap: 2rem !important;
                        padding: 3rem 2rem !important;
                    }
                    
                    .education-skills > div > div {
                        flex: 1 1 0 !important;
                        min-width: 0 !important;
                        border-bottom: none !important;
                        padding-bottom: 0 !important;
                        border-right: 1px solid rgba(255,255,255,0.1) !important;
                        padding-right: 2rem !important;
                    }

                    .education-skills > div > div:last-child {
                        border-right: none !important;
                        padding-right: 0 !important;
                    }
                }

                @media (max-width: 899px) {
                    .education-skills {
                        padding: 0 1.5rem !important;
                    }

                    .education-skills > div {
                        padding: 2rem 1.5rem !important;
                        gap: 0 !important;
                        flex-direction: column !important;
                    }

                    .education-skills > div > div {
                        flex: 1 1 100% !important;
                        min-width: 0 !important;
                        padding-bottom: 1.5rem !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                    }

                    .education-skills > div > div:last-child {
                        border-bottom: none !important;
                        padding-bottom: 0 !important;
                    }
                }

                @media (max-width: 640px) {
                    .education-skills {
                        margin: 1rem auto !important;
                        padding: 0 1rem !important;
                    }

                    .education-skills > div {
                        padding: 1rem !important;
                        border-radius: 12px !important;
                    }

                    .education-skills > div > div {
                        margin-bottom: 0.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default EducationSkills;
