// src/components/GuideViewer.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // <-- 1. Import the HTML parser
import SEO from './SEO';
import guidesData from '../data/guides.json';

function GuideViewer() {
    const { guideName } = useParams();
    const [content, setContent] = useState('');

    const activeGuide = guidesData.find(g => g.guideName === guideName);
    const isManual = activeGuide?.category === 'manual';

    // Calculate Previous and Next parts for the Manual
    const manualGuides = guidesData.filter(g => g.category === 'manual');
    let prevGuide = null;
    let nextGuide = null;

    if (isManual) {
        const currentIndex = manualGuides.findIndex(g => g.guideName === guideName);
        if (currentIndex > 0) prevGuide = manualGuides[currentIndex - 1];
        if (currentIndex < manualGuides.length - 1) nextGuide = manualGuides[currentIndex + 1];
    }

    useEffect(() => {
        // Fetch the markdown content
        fetch(`/guides/${guideName}.md`)
            .then((res) => {
                if (!res.ok) throw new Error('לא נמצא מדריך.');
                return res.text();
            })
            .then((text) => setContent(text))
            .catch((err) => {
                console.error(err);
                setContent('# מדריך לא נמצא\n\nהמדריך שביקשת לא נמצא. אנא בדוק את הקישור או פנה למנהל האתר.');
            });

        // Scroll to top when navigating between pages in the SPA
        window.scrollTo(0, 0);
    }, [guideName]);

    // Custom component renderers for markdown elements
    const customRenderers = {
        table: ({ ...props}) => (
            <div className="table-wrapper">
                <table className="markdown-table" {...props} />
            </div>
        )
    };

    return (
        <div className="guide-content container" dir="rtl">
            {activeGuide && (
                <SEO
                    title={activeGuide.title}
                    description={activeGuide.description}
                    path={`/guides/${guideName}`}
                />
            )}

            {/* Legacy Disclaimer specifically for original manual parts */}
            {isManual && (
                <div className="legacy-disclaimer">
                    <strong>⚠️ הערה היסטורית: מסמך מ-2003</strong>
                    אתם קוראים גרסה דיגיטלית של חוברת ההדרכה המקורית של המשחק. חלק מהמידע הטכני כאן (כמו דרישות מערכת, GameSpy או חיבורי מודם) מיושן. להתקנה ומשחק ברשת כיום, אנא השתמשו במדריכים המודרניים שלנו.
                </div>
            )}

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]} // <-- 2. Inject the HTML parser here
                components={customRenderers}
            >
                {content}
            </ReactMarkdown>

            {/* Sequential Navigation for Manual Parts */}
            {isManual && (
                <div className="guide-navigation">
                    {/* RTL logic: "Next" points left/forwards, "Prev" points right/backwards */}
                    {nextGuide ? (
                        <Link to={`/guides/${nextGuide.guideName}`} className="button button-next">
                            הפרק הבא &laquo;
                        </Link>
                    ) : <div></div>}

                    {prevGuide && (
                        <Link to={`/guides/${prevGuide.guideName}`} className="button button-prev">
                            &raquo; הפרק הקודם
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

export default GuideViewer;