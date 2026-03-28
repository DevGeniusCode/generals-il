// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons'; // <-- Import icon
import resourcesData from '../data/resources.json';
import { socialLinks } from '../data/socials';

function HeroSection() {
    // Dynamically fetch the primary installation guide
    const mainInstallGuide = resourcesData.find(res => res.id === 'steam-main-install');
    // Dynamically fetch the WhatsApp link
    const whatsappLink = socialLinks.find(link => link.name === 'WhatsApp');

    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>
                    גנרל!<br/>
                    <span>האם אתה מוכן?</span>
                </h1>

                <div className="hero-cta">
                    {/* NEW: Hebrew Patch CTA */}
                    <Link to="/guides/hebrew-translation-patch" className="button button-accent pulse-animation">
                        <FontAwesomeIcon icon={faLanguage} size="lg" />
                        חדש! שחקו בעברית! 🇮🇱
                    </Link>

                    {mainInstallGuide && (
                        <Link to={mainInstallGuide.guideLink} className="button button-primary">
                            מדריך התקנה כללי (Steam)
                        </Link>
                    )}

                    {/* Secondary CTA for Community Engagement */}
                    {whatsappLink && (
                        <a
                            href={whatsappLink.url}
                            className="button button-secondary whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                            הצטרף לקהילת הוואטסאפ הישראלית
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;