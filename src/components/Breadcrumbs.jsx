// src/components/Breadcrumbs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import guidesData from '../data/guides.json';

const routeNames = {
    'news': 'עדכונים וחדשות',
    'guides': 'מדריכים',
    'resources': 'משאבים',
    'social-media': 'הצטרפו אלינו'
};

function Breadcrumbs() {
    const location = useLocation();

    // Split the pathname and remove empty strings
    const pathnames = location.pathname.split('/').filter(x => x);

    // Conditional Rendering: Do not show on the Home page ("/")
    if (pathnames.length === 0) return null;

    return (
        <nav className="breadcrumbs container" aria-label="breadcrumb">
            <Link to="/" className="breadcrumb-link">ראשי</Link>

            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                // 1. Check if we have a hardcoded translation for the route (e.g., 'guides' -> 'מדריכים')
                let name = routeNames[value] || value;

                // 2. If we are deep inside a guide, find its actual Hebrew title from guides.json
                if (pathnames[0] === 'guides' && index === 1) {
                    const guide = guidesData.find(g => g.guideName === value);
                    if (guide) name = guide.title;
                }

                return (
                    <span key={to} className="breadcrumb-item">
                        {/* Pointing Left for RTL flow */}
                        <span className="breadcrumb-separator"> &gt; </span>
                        {isLast ? (
                            <span className="breadcrumb-current">{name}</span>
                        ) : (
                            <Link to={to} className="breadcrumb-link">{name}</Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}

export default Breadcrumbs;