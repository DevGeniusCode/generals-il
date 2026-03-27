// src/pages/Guides.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import guidesData from '../data/guides.json';

function Guides() {
    // Separate guides by category
    const generalGuides = guidesData.filter(g => g.category !== 'manual');
    const manualGuides = guidesData.filter(g => g.category === 'manual');

    return (
        <div className="guides-page container">
            <h1 className="page-title">מדריכים ומידע טקטי</h1>
            <p className="intro-text">
                כאן תוכלו למצוא את המדריכים השונים לשימוש בכלים ולשדרוג חווית המשחק.
            </p>

            {/* General Guides Section */}
            <div className="guides-list" style={{ marginBottom: '60px' }}>
                {generalGuides.map((guide, index) => (
                    <div key={index} className="guide-card">
                        <h2>{guide.title}</h2>
                        <p>{guide.description}</p>
                        <div className="buttons">
                            <Link to={`/guides/${guide.guideName}`} className="button guide-button">
                                קרא את המדריך
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Original Manual Section */}
            <h2 className="page-title" style={{ fontSize: '2.2rem', marginTop: '40px', borderTop: '1px solid var(--border-subtle)', paddingTop: '40px' }}>
                המדריך המקורי (2003 Generals)
            </h2>
            <p className="intro-text">
                ארכיון דיגיטלי: חוברת ההדרכה המקורית שצורפה לעותקי המשחק הפיזיים של Generals.
            </p>

            <div className="guides-list">
                {manualGuides.map((guide, index) => (
                    <div key={`manual-${index}`} className="guide-card" style={{ borderColor: '#c2b280' }}>
                        <h2 style={{ color: '#c2b280' }}>{guide.title}</h2>
                        <p>{guide.description}</p>
                        <div className="buttons">
                            <Link to={`/guides/${guide.guideName}`} className="button guide-button" style={{ backgroundColor: '#4b5320', borderColor: '#4b5320' }}>
                                קרא פרק זה
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guides;