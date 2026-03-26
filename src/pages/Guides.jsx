// src/pages/Guides.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import guidesData from '../data/guides.json'; // Using the data we extracted previously

function Guides() {
    return (
        <div className="guides-page container">
            <h1 className="page-title">מדריכים</h1>
            <p className="intro-text">
                כאן תוכלו למצוא את המדריכים השונים לשימוש בכלים ולשדרוג חווית המשחק.
            </p>

            <div className="guides-list">
                {guidesData.map((guide, index) => (
                    <div key={index} className="guide-card">
                        <h2>{guide.title}</h2>
                        <p>{guide.description}</p>

                        {/* FIX: Wrapped the button in the .buttons container */}
                        {/* This stops vertical stretching and anchors it to the bottom */}
                        <div className="buttons">
                            <Link to={`/guides/${guide.guideName}`} className="button guide-button">
                                קרא את המדריך
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guides;