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
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={menuOpen ? 'open' : ''}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>דף הבית</Link></li>
                    <li><Link to="/news" onClick={() => setMenuOpen(false)}>הודעות וחדשות</Link></li>
                    <li><Link to="/guides" onClick={() => setMenuOpen(false)}>מדריכים</Link></li>
                    <li><Link to="/resources" onClick={() => setMenuOpen(false)}>משאבים</Link></li>
                    <li><Link to="/social-media" onClick={() => setMenuOpen(false)}>הצטרפו אלינו</Link></li>
                    <li><Link to="/blog" onClick={() => setMenuOpen(false)}>בלוג</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
