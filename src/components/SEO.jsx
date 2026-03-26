// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, path }) {
    const siteTitle = title ? `${title} | Generals IL` : 'Generals IL | קהילת השחקנים הישראלית';
    const siteDesc = description || 'הצטרפו לקהילת Generals Zero Hour הישראלית – מדריכים, עדכונים, כלים, וקישורים חשובים למשחק.';
    const siteImage = image || 'https://generals-il.vercel.app/logo/zerohour_logo_header.png';
    const siteUrl = path ? `https://generals-il.vercel.app${path}` : 'https://generals-il.vercel.app';

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDesc} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDesc} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter / Discord */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDesc} />
            <meta name="twitter:image" content={siteImage} />
        </Helmet>
    );
}