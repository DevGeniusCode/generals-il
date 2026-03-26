import React from 'react';
import { Link } from 'react-router-dom';
import resourcesData from '../data/resources.json'; // <-- Import extracted data

function Resources() {
    return (
        <div className="resources-page container">
            <h1>כלים למשחק</h1>
            <p>בעמוד זה תמצאו כלים שונים שיעזרו לכם לשדרג את חווית המשחק.</p>

            <div className="tools-list">
                {resourcesData.map((tool, index) => (
                    <div key={index} className="tool-card">
                        <h2>{tool.name}</h2>
                        <p>{tool.description}</p>
                        <div className="buttons">
                            {/* External Download Link */}
                            <a
                                href={tool.downloadLink}
                                className="button download-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                כניסה לאתר / הורד
                            </a>

                            {/* Internal Guide Link using React Router */}
                            <Link to={tool.guideLink} className="button guide-button">
                                למדריך
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resources;