import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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


    return (
        <div className="guide-content container">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

export default GuideViewer;
