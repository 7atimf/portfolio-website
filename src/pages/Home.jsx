import React from 'react';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import EducationSkills from '../components/EducationSkills';

const Home = ({ onProjectClick }) => {
    return (
        <div>
            <Hero />
            <ProjectGrid onProjectClick={onProjectClick} />
            <EducationSkills />
        </div>
    );
};

export default Home;
