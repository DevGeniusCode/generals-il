import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>© 2025 Generals IL | כל הזכויות שמורות</p>
                <p>פותח באהבה לקהילה הישראלית של Command & Conquer: Generals Zero Hour</p>
                <p>
                    רוצים לשפר את האתר ולהוסיף תכנים או לשדרג את העיצוב?
                    {' '}
                    <a
                        href="https://github.com/DevGeniusCode/generals-il"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        בקרו בריפו שלנו ב-GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
