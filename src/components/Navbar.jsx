// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* 1. Brand Logo & Title (Will align Right in RTL) */}
                <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
                    <img src="/logo/zerohour_circle_logo_israel.png" alt="Generals IL Logo" className="navbar-logo" />
                    <span className="navbar-title">Generals IL</span>
                </Link>

                {/* 2. Hamburger Menu Button (Will align Left in RTL) */}
                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="פתח תפריט ניווט"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                {/* 3. Navigation Links */}
                <ul className={menuOpen ? 'open' : ''}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>דף הבית</Link></li>
                    <li><Link to="/news" onClick={() => setMenuOpen(false)}>עדכונים וחדשות</Link></li>
                    <li><Link to="/guides" onClick={() => setMenuOpen(false)}>מדריכים</Link></li>
                    <li><Link to="/resources" onClick={() => setMenuOpen(false)}>משאבים</Link></li>
                    <li><Link to="/social-media" onClick={() => setMenuOpen(false)}>הצטרפו אלינו</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;