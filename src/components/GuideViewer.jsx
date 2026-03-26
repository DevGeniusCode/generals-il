import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function GuideViewer() {
    const { guideName } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`/guides/${guideName}.md`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('לא נמצא מדריך.');
                }
                return res.text();
            })
            .then((text) => setContent(text))
            .catch((err) => {
                // הצגה באתר הודעת שגיאה אם המדריך לא נמצא
                console.error(err);
                setContent('# מדריך לא נמצא\n\nהמדריך שביקשת לא נמצא. אנא בדוק את הקישור או פנה למנהל האתר.');

            });
    }, [guideName]);

    // NEW: Custom component renderers for markdown elements
    const customRenderers = {
      // This function takes the standard table and wraps it in a div
      // for responsive horizontal scrolling on mobile devices.
      table: ({ ...props}) => (
        <div className="table-responsive-wrapper">
          <table className="markdown-table" {...props} />
        </div>
      )
    };

    return (
        <div className="guide-content container" dir="rtl">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]} // מאפשר תמיכה בטבלאות
                components={customRenderers}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default GuideViewer;
