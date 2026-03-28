// src/components/GuideViewer.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { track } from '@vercel/analytics'; // <-- 1. Import the track function
import SEO from './SEO';
import guidesData from '../data/guides.json';

// --- NEW: Custom Pre/Code Block Component for Copy Functionality ---
const PreBlock = ({ children }) => {
    const [copied, setCopied] = useState(false);

    // Extract the raw text from the <code> child element
    const textToCopy = children?.props?.children || '';

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    return (
        <div className="code-block-wrapper">
            <button
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                title="העתק טקסט"
            >
                <FontAwesomeIcon icon={copied ? faCheck : faCopy} /> {copied ? 'הועתק!' : 'העתק'}
            </button>
            <pre>{children}</pre>
        </div>
    );
};

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
      ),
        pre: PreBlock,

        // 2. Intercept <a> tags to add tracking
        a: ({  href, children, ...props }) => {
            const handleLinkClick = () => {
                // Check if the link has a 'download' attribute OR links to a specific file extension
                const isDownload = props.download || (href && href.match(/\.(csf|zip|rar|exe|pdf)$/i));

                if (isDownload) {
                    // Extract filename from the URL (e.g., "generals.csf")
                    const fileName = href.split('/').pop() || 'unknown_file';

                    // Send custom event to Vercel Analytics
                    track('file_download', { file: fileName });
                }
            };

            // Return the standard anchor tag, but with our injected onClick handler
            return (
                <a href={href} onClick={handleLinkClick} {...props}>
                    {children}
                </a>
            );
        }
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

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
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

            {/* Contextual Back Button (Appears on ALL guides) */}
            <div className="contextual-back" style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                <Link to="/guides" className="button download-button" style={{ width: '100%', maxWidth: '300px' }}>
                    חזרה לרשימת המדריכים
                </Link>
            </div>
        </div>
    );
}

export default GuideViewer;