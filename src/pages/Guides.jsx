import React from 'react';
import { Link } from 'react-router-dom';

const guides = [
    { title: "מדריך להורדת GenPatcher", description: "מדריך צעד אחרי צעד כיצד להוריד ולהתקין את GenPatcher.", guideName: "genpatcher" },
    { title: "מדריך להורדת GameRanger", description: "הוראות התקנה לשימוש ב-GameRanger.", guideName: "gameranger" },
    { title: "מדריך לקניית המשחק בסטים", description: "צעד אחרי צעד איך לקנות את המשחק בסטים.", guideName: "steam" },
    { title: "מדריך לשימוש ב-DoMiNaToR Map Packs", description: "הסבר על איך להוריד ולהתקין את חבילות המפות.", guideName: "dominators" },
    { title: "מדריך ל-CNC Maps", description: "מדריך לבחירה ולהתקנת מפות ל-CNC.", guideName: "cnc-maps" },
    { title: "מדריך לשימוש בשרתים עם Radmin VPN", description: "הסבר על איך להשתמש ב-Radmin VPN.", guideName: "radmin-vpn" },
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
                        <Link to={`/assets/guides/${guide.guideName}`} className="button guide-button">
                            קרא את המדריך
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guides;
