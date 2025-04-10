import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

// פונקציה לטעינת הקובץ
const fetchMarkdownContent = async (guideName) => {
    const response = await fetch(`/assets/guides/${guideName}.md`);
    if (!response.ok) {
        throw new Error("Failed to load markdown file");
    }
    return response.text();
};

const Guide = () => {
    const { guideName } = useParams();
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const loadGuide = async () => {
            try {
                const markdownContent = await fetchMarkdownContent(guideName);
                setContent(markdownContent);
            } catch (err) {
                setError('לא ניתן לטעון את המדריך.');
            }
        };

        loadGuide();
    }, [guideName]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="guide-content">
            <h1>{guideName}</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default Guide;
