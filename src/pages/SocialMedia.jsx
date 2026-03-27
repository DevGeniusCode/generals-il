// src/pages/SocialMedia.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCopy } from '@fortawesome/free-solid-svg-icons';
import { socialLinks, linkWebUrl } from '../data/socials'; // <-- Import centralized data

function SocialMedia() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(linkWebUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="social-media-page">
            <div className="container">
                <h1 className="page-title">ברוך הבא למפקדה</h1>
                <p className="intro-text">
                    איפה שלא תהיה – אנחנו שם. הצטרף לקהילה הישראלית בפלטפורמה שנוחה לך, ותישאר מחובר לכל מה שחשוב.
                </p>

                <div className="links-grid">
                    {/* Dynamically render from centralized data */}
                    {socialLinks.map((link, index) => (
                        <div key={index} className="social-card">
                            <FontAwesomeIcon icon={link.icon} size="3x" style={{ color: link.color }} />
                            <h2>{link.name}</h2>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ backgroundColor: link.color }}
                            >
                                הצטרפו עכשיו
                            </a>
                        </div>
                    ))}
                </div>

                <div className="link-tree-card">
                    <FontAwesomeIcon icon={faLink} size="2x" />
                    <h2>רוצים לשתף?</h2>
                    <p>שלחו את הקישור הזה לכל מי שצריך להצטרף לקרב:</p>

                    <div className="link-copy-box">
                        <input type="text" value={linkWebUrl} readOnly />
                        <button onClick={copyToClipboard}>
                            <FontAwesomeIcon icon={faCopy} /> {copied ? 'הועתק!' : 'העתק'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;