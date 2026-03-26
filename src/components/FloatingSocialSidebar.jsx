// src/components/FloatingSocialSidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from '../data/socials';

function FloatingSocialSidebar() {
    return (
        <div className="floating-social-sidebar">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-social-link"
                    title={link.name}
                    aria-label={link.name}
                    /* Pass the brand color to CSS for dynamic hover effects */
                    style={{ '--hover-color': link.color }}
                >
                    <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
            ))}
        </div>
    );
}

export default FloatingSocialSidebar;