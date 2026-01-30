import React from 'react';
import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/languages';

const EducationSkills = () => {
    const { language } = useLanguage();
    const t = translations[language];
    
    return (
        <div style={{ maxWidth: '1170px', width: '100%', margin: '1rem auto', padding: '0 1rem' }}>

            <div style={unifiedCardStyle}>

                {/* Education Section */}
                <div style={columnStyle}>
                    <h3 style={headerStyle}>
                        {t.education}
                    </h3>
                    <div style={headerunderlineStyle}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {t.education_list.map((edu, idx) => (
                            <div key={idx}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', marginBottom: '0.2rem' }}>
                                    {edu.degree}
                                </div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                                    {edu.school}
                                </div>
                                <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>
                                    {edu.year}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="edu-skills-divider"></div>

                {/* Skills Section */}
                <div style={{ ...columnStyle, flex: '0.7 1 270px' }}>
                    <h3 style={headerStyle}>
                        Skills
                    </h3>
                    <div style={headerunderlineStyle}></div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignContent: 'flex-start' }}>
                        {personalInfo.skills.map(skill => (
                            <span key={skill} style={skillTagStyle}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="edu-skills-divider"></div>

                {/* Languages Section */}
                <div style={columnStyle}>
                    <h3 style={headerStyle}>
                        Languages
                    </h3>
                    <div style={headerunderlineStyle}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {personalInfo.languages.map((lang, idx) => (
                            <div key={idx} style={{ width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                                    <span>{lang.name}</span>
                                    <span>{lang.level}%</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
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
        </div>
    );
};

const unifiedCardStyle = {
    background: '#0a1025', // Deep blue background similar to the image
    borderRadius: '20px',
    padding: '3rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.05)'
};

const columnStyle = {
    flex: '1 1 200px', // Adjusted to fit 3 columns
    display: 'flex',
    flexDirection: 'column'
};

const headerStyle = {
    fontSize: '1.8rem',
    color: 'var(--accent-color)',
    marginBottom: '0.5rem',
    fontWeight: '700'
};

const headerunderlineStyle = {
    width: '50px',
    height: '3px',
    background: 'var(--accent-color)',
    marginBottom: '2.5rem',
    borderRadius: '2px'
};

const skillTagStyle = {
    background: 'rgba(30, 40, 70, 0.5)',
    color: '#cbd5e1',
    padding: '0.4rem 0.8rem',
    borderRadius: '6px',
    fontSize: '0.90rem',
    border: '1px solid rgba(50, 70, 120, 0.3)',
    display: 'inline-block',
    maxWidth: '100%' // Prevents tag from forcing column width wider
};

export default EducationSkills;
