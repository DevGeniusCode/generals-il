import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord,
    faWhatsapp,
    faFacebook,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faLink,
    faCopy
} from '@fortawesome/free-solid-svg-icons';

const links = [
    {
        name: 'Discord',
        icon: faDiscord,
        url: 'https://discord.gg/N7YHmTNmRp',
        color: '#7289da'
    },
    {
        name: 'WhatsApp',
        icon: faWhatsapp,
        url: 'https://chat.whatsapp.com/K8zgB2whl6Q5mV6Vmqa6Kz',
        color: '#25D366'
    },
    {
        name: 'Facebook',
        icon: faFacebook,
        url: 'https://www.facebook.com/groups/474776282623148',
        color: '#1877F2'
    },
    {
        name: 'YouTube',
        icon: faYoutube,
        url: 'https://www.youtube.com/@ashergt5362',
        color: '#FF0000'
    }
];

// קישור עץ הקישורים
const linkTreeUrl = 'https://linktr.ee/GeneralsIL';

function SocialMedia() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(linkTreeUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // הודעה נעלמת אחרי 2 שניות
    };

    return (
        <section className="social-media-page">
            <div className="container">
                <h1 className="page-title">ברוך הבא למפקדה</h1>
                <p className="intro-text">
                    איפה שלא תהיה – אנחנו שם. הצטרף לקהילה הישראלית בפלטפורמה שנוחה לך, ותישאר מחובר לכל מה שחשוב.
                </p>

                <div className="links-grid">
                    {links.map((link, index) => (
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

                {/* עץ הקישורים */}
                <div className="link-tree-card">
                    <FontAwesomeIcon icon={faLink} size="2x" />
                    <h2>רוצים לשתף?</h2>
                    <p>שלחו את הקישור הזה לכל מי שצריך להצטרף לקרב:</p>

                    <div className="link-copy-box">
                        <input type="text" value={linkTreeUrl} readOnly />
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
