import React from 'react';

// כלים לדוגמה
const tools = [
    {
        name: "GenPatcher",
        description: "תיקוני באגים שמסייעים לשפר את חווית המשחק.",
        downloadLink: "https://link_to_genpatcher",  // קישור להורדה
        guideLink: "#genpatcher-guide" // קישור למדריך
    },
    {
        name: "GameRanger",
        description: "שרת משחקים פופולרי המאפשר לשחק עם חברים ברחבי העולם.",
        downloadLink: "https://www.gameranger.com/",
        guideLink: "#gameranger-guide"
    },
    {
        name: "שרת משחקים - Radmin VPN",
        description: "Radmin VPN מאפשר לך להקים שרת משחקים פרטי עם חברים.",
        downloadLink: "https://www.radmin-vpn.com/",
        guideLink: "#radmin-vpn-guide"
    },
    {
        name: "Steam",
        description: "קנה את המשחק בסטים, הפלטפורמה המובילה למשחקים.",
        downloadLink: "https://store.steampowered.com/",
        guideLink: "#steam-guide"
    },
    {
        name: "DoMiNaToR Map Packs",
        description: "חבילות מפות ששדרגו את חווית המשחק. זמינות להורדה דרך Google Drive.",
        downloadLink: "https://drive.google.com/",
        guideLink: "#dominators-guide"
    },
    {
        name: "CNC Maps",
        description: "אוסף מפות ל-CNC שמגוון את חווית המשחק.",
        downloadLink: "https://example.com/maps",
        guideLink: "#cnc-maps-guide"
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


