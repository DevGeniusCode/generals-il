// src/pages/Guides.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faWrench, faGlobe, faServer, faNetworkWired, faMap, faMapLocationDot, faLayerGroup, faBookOpen, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import guidesData from '../data/guides.json';

function Guides() {
    // 1. Define General Guide Categories & Icon Mappings
    const generalCategories = [
        {
            id: 'setup',
            title: 'רכישה, התקנה וטכני',
            guides: ['hebrew-translation-patch', 'steam', 'steam-installation-main', 'genpatcher'],
            icons: { 'steam': faSteam, 'steam-installation-main': faDownload, 'genpatcher': faWrench, 'hebrew-translation-patch': faLanguage
            }
        },
        {
            id: 'multiplayer',
            title: 'משחק ברשת (Multiplayer)',
            guides: ['generals-online', 'gameranger', 'radmin-vpn'],
            icons: { 'generals-online': faGlobe, 'gameranger': faServer, 'radmin-vpn': faNetworkWired }
        },
        {
            id: 'maps',
            title: 'מפות ותוספות',
            guides: ['map-types', 'cnc-maps', 'dominators'],
            icons: { 'map-types': faMap, 'cnc-maps': faMapLocationDot, 'dominators': faLayerGroup }
        }
    ];

    // 2. Map shortened names for the Legacy Manual buttons
    const manualShortNames = {
        'manual-part1-tech': '1. מבוא והתקנה',
        'manual-part2-controls': '2. ממשק ושליטה',
        'manual-part3-economy': '3. מבנים וכלכלה',
        'manual-part4-usa': '4. צבא ארה"ב',
        'manual-part5-china': '5. צבא סין',
        'manual-part6-gla': '6. צבא ה-GLA',
        'manual-part7-credits': '7. קרדיטים ונספחים'
    };

    // Filter manual guides
    const manualGuides = guidesData.filter(g => g.category === 'manual');

    return (
        <div className="guides-page container">
            <h1 className="page-title">מדריכים ומידע טקטי</h1>
            <p className="intro-text">
                בחרו את הקטגוריה המתאימה כדי לשדרג את חווית המשחק שלכם.
            </p>

            {/* Render General Guide Categories */}
            <div className="general-guides-container">
                {generalCategories.map(cat => (
                    <div key={cat.id} className="guide-category-section">
                        <h2 className="category-title">{cat.title}</h2>
                        <div className="guides-list">
                            {cat.guides.map(guideId => {
                                const guide = guidesData.find(g => g.guideName === guideId);
                                if (!guide) return null;

                                return (
                                    <Link to={`/guides/${guide.guideName}`} key={guideId} className="guide-card interactive-card">
                                        <div className="card-icon-wrapper">
                                            <FontAwesomeIcon icon={cat.icons[guideId]} size="2x" />
                                        </div>
                                        <h3>{guide.title}</h3>
                                        <p className="line-clamp-2">{guide.description}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Legacy 2003 Guide Banner */}
            <div className="legacy-banner">
                <div className="legacy-banner-header">
                    <div className="legacy-icon">
                        <FontAwesomeIcon icon={faBookOpen} size="2x" />
                    </div>
                    <div className="legacy-text">
                        <h2>המדריך המקורי (Generals 2003)</h2>
                        <p>
                            ארכיון דיגיטלי של חוברת ההדרכה המקורית.
                            <strong> הערה: </strong> חלק מהמידע הטכני כאן מיושן, אך המידע האסטרטגי על היחידות רלוונטי מתמיד.
                        </p>
                    </div>
                </div>

                <div className="legacy-banner-buttons">
                    {manualGuides.map(guide => (
                        <Link to={`/guides/${guide.guideName}`} key={guide.guideName} className="button legacy-btn">
                            {manualShortNames[guide.guideName] || guide.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Guides;