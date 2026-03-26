// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import resourcesData from '../data/resources.json';

function HeroSection() {
    // Dynamically fetch the primary installation guide from our data source
    const mainInstallGuide = resourcesData.find(res => res.id === 'steam-main-install');

    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>
                    גנרל!<br/>
                    <span>האם אתה מוכן?</span>
                </h1>

                {/* Primary CTA for New Recruits */}
                {mainInstallGuide && (
                    <div className="hero-cta" style={{ marginTop: '30px' }}>
                        <Link to={mainInstallGuide.guideLink} className="button button-primary">
                            מדריך התקנה ראשי (Steam)
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default HeroSection;