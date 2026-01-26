import React from 'react';
import { personalInfo } from '../data/projects';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem 1rem',
            animation: 'fadeIn 0.5s ease'
        }}>

            {/* Business Card Container */}
            <div style={businessCardStyle}>

                {/* Profile Image Area */}
                <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid var(--accent-color)',
                            boxShadow: '0 0 20px var(--accent-glow)'
                        }}
                    />
                </div>

                {/* Content Area */}
                <div style={{ padding: '0 2rem 2rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: '#fff' }}>
                        {personalInfo.name}
                    </h1>
                    <h2 style={{ fontSize: '1rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                        {personalInfo.role.split('|')[0]}
                    </h2>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '1.5rem 0' }}></div>

                    {/* Contact Details Grid */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', width: '100%' }}>
                        <ContactItem icon={<FaEnvelope />} text={personalInfo.contact.email} link={`mailto:${personalInfo.contact.email}`} />
                        <ContactItem icon={<FaPhone />} text={personalInfo.contact.phone} />
                        <ContactItem icon={<FaMapMarkerAlt />} text={personalInfo.contact.location} />
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        <SocialIcon icon={<FaGithub />} link={personalInfo.contact.github} />
                        <SocialIcon icon={<FaLinkedin />} link={personalInfo.contact.linkedin} />
                        <SocialIcon icon={<FaInstagram />} link={personalInfo.contact.instagram} />
                    </div>
                </div>
            </div>

        </div>
    );
};

// Sub-components & Styles
const ContactItem = ({ icon, text, link }) => {
    const content = (
        <>
            <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem', display: 'flex' }}>{icon}</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{text}</span>
        </>
    );

    const commonStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        padding: '0.8rem',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        cursor: link ? 'pointer' : 'default',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        textDecoration: 'none'
    };

    if (link) {
        return (
            <a
                href={link}
                style={commonStyles}
                className="contact-item"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
            >
                {content}
            </a>
        );
    }

    return (
        <div style={commonStyles} className="contact-item">
            {content}
        </div>
    );
};

const SocialIcon = ({ icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{
        color: 'var(--text-secondary)',
        fontSize: '1.5rem',
        transition: 'color 0.3s, transform 0.3s',
    }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.transform = 'scale(1.2)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'scale(1)'; }}
    >
        {icon}
    </a>
);

const businessCardStyle = {
    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
    borderTop: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(20px)',
    overflow: 'hidden',
    position: 'relative'
};

export default Contact;
