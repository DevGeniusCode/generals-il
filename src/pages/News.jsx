// src/pages/News.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/news.json';

function News() {
    /**
     * Helper function to parse a markdown link string.
     * @param {string} markdownLink - e.g., "[text](url)"
     * @returns {{url: string, domain: string} | null} - The extracted URL and its domain, or null if invalid.
     */
    const parseLink = (markdownLink) => {
        if (!markdownLink) return null;

        // Use a regular expression to extract the URL from within the parentheses.
        const urlMatch = markdownLink.match(/\(([^)]+)\)/);
        if (!urlMatch || !urlMatch[1]) return null;

        const url = urlMatch[1];

        try {
            // Use the built-in URL object to safely extract the hostname (domain).
            const domain = new URL(url).hostname.replace('www.', '');
            return { url, domain };
        } catch (error) {
            console.error("Invalid URL in news data:", url);
            return null; // Gracefully handle invalid URLs
        }
    };

    return (
        <div className="news-page container">
            <h1 className="page-title">עדכוני מפקדה</h1>

            <div className="news-banner-container">
                {/* ... The strategic banner remains unchanged ... */}
                <Link to="/guides/community-report-2026" className="strategic-banner">
                    <div className="banner-content">
                        <h2>הדו"ח האסטרטגי: הרנסנס הטכנולוגי והקהילתי (2023–2026)</h2>
                        <p>קראו את הסקירה המלאה על התפתחות קהילת Generals בשנים האחרונות, הכלים החדשים, והחזון לעתיד.</p>
                        <span className="banner-cta">לקריאת הדו"ח המלא &raquo;</span>
                    </div>
                </Link>
            </div>

            <div className="timeline-section">
                <h2 className="timeline-header">ציר זמן קהילתי</h2>
                <div className="timeline-container">
                    {newsData.map((item, index) => {
                        const linkInfo = parseLink(item.link);

                        return (
                            <div key={index} className="timeline-item"> {/* Using index as key since list is static */}
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-meta">
                                        <span className="timeline-date">{item.date}</span>
                                        <span className="timeline-category">{item.category}</span>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>

                                    {/* Conditionally render the parsed link */}
                                    {linkInfo && (
                                        <a
                                            href={linkInfo.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="timeline-link"
                                        >
                                            מקור: {linkInfo.domain}
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default News;