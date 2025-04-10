import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">דף הבית</Link></li>
                <li><Link to="/news">הודעות וחדשות</Link></li>
                <li><Link to="/guides">מדריכים</Link></li>
                <li><Link to="/resources">משאבים</Link></li>
                <li><Link to="/social-media">הצטרפו אלינו</Link></li>
                <li><Link to="/blog">בלוג</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
