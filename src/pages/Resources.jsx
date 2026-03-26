import React from 'react';

// כלים לדוגמה
const tools = [
    {
        name: "GenPatcher",
        description: "תיקוני באגים שמסייעים לשפר את חווית המשחק.",
        downloadLink: "https://legi.cc/genpatcher/",  // קישור להורדה
        guideLink: "guides/genpatcher" // קישור למדריך
    },
    {
        name: "GameRanger",
        description: "שרת משחקים פופולרי המאפשר לשחק עם חברים ברחבי העולם.",
        downloadLink: "https://www.gameranger.com/",
        guideLink: "guides/gameranger"
    },
    {
        name: "שרת משחקים - Radmin VPN",
        description: "Radmin VPN מאפשר לך להקים שרת משחקים פרטי עם חברים.",
        downloadLink: "https://www.radmin-vpn.com/",
        guideLink: "guides/radmin"
    },
    {
        name: "Steam",
        description: "קנה את המשחק בסטים, הפלטפורמה המובילה למשחקים.",
        downloadLink: "https://store.steampowered.com/app/2732960/Command__Conquer_Generals_Zero_Hour/",
        guideLink: "guides/steam"
    },
    {
        name: "DoMiNaToR Map Packs",
        description: "חבילות מפות ששדרגו את חווית המשחק. זמינות להורדה דרך Google Drive.",
        downloadLink: "https://drive.google.com/drive/folders/1tSCKWmz63YP_bT9uwuyGbG41AP_larph",
        guideLink: "guides/dominators"
    },
    {
        name: "CNC Maps",
        description: "אוסף מפות ל-CNC שמגוון את חווית המשחק.",
        downloadLink: "https://www.cnclabs.com/maps/generals/",
        guideLink: "guides/cnc-maps"
    },
];

function Resources() {
    return (
        <div className="resources-page container">
            <h1>כלים למשחק</h1>
            <p>בעמוד זה תמצאו כלים שונים שיעזרו לכם לשדרג את חווית המשחק.</p>

            <div className="tools-list">
                {tools.map((tool, index) => (
                    <div key={index} className="tool-card">
                        <h2>{tool.name}</h2>
                        <p>{tool.description}</p>
                        <div className="buttons">
                            <a href={tool.downloadLink} className="button download-button" target="_blank" rel="noopener noreferrer">
                                הורד
                            </a>
                            <a href={tool.guideLink} className="button guide-button">
                                מדריך
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resources;


