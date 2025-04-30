import React from 'react';
import { Link } from 'react-router-dom';

const guides = [
    { title: "הורדת GenPatcher", description: "מדריך צעד אחרי צעד כיצד להוריד ולהתקין את GenPatcher.", guideName: "genpatcher" },
    { title: "הורדת GameRanger", description: "הוראות התקנה וטיפים לשימוש ב-GameRanger.", guideName: "gameranger" },
    { title: "קניית המשחק בסטים", description: "צעד אחרי צעד איך לקנות את המשחק בסטים.", guideName: "steam" },
    { title: "שימוש ב-DoMiNaToR Map Packs", description: "הסבר על איך להוריד ולהתקין את חבילות המפות.", guideName: "dominators" },
    { title: "-CNC Maps", description: "אתר להורדת מפות.", guideName: "cnc-maps" },
    { title: "משחק ברשת עם Radmin VPN", description: "הסבר על איך להשתמש ב-Radmin VPN.", guideName: "radmin-vpn" },
];

function Guides() {
    return (
        <div className="guides-page container">
            <h1>מדריכים</h1>
            <p>כאן תוכלו למצוא את המדריכים השונים לשימוש בכלים ולשדרוג חווית המשחק.</p>

            <div className="guides-list">
                {guides.map((guide, index) => (
                    <div key={index} className="guide-card">
                        <h2>{guide.title}</h2>
                        <p>{guide.description}</p>
                        <Link to={`/guides/${guide.guideName}`} className="button guide-button">
                            קרא את המדריך
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guides;
