import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ProjectGrid from '../components/ProjectGrid';
import EducationSkills from '../components/EducationSkills';

const Home = ({ onProjectClick }) => {
    const dividerStyle = {
        width: '100%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
        margin: '2rem 0'
    };

    return (
        <div style={{ display: 'block', visibility: 'visible' }}>
            <Hero />
            <div style={dividerStyle}></div>
            <ProjectGrid onProjectClick={onProjectClick} />
            <div style={dividerStyle}></div>
            {/* Education, Skills, Languages - Always Visible */}
            <EducationSkills />
        </div>
    );
};

export default Home;
