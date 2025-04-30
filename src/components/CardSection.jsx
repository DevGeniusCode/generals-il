import React from 'react';

function CardSection() {
    return (
        <section className="card-section">
            <div className="card">
                <div className="card-content">
                    <div className="card-text">
                        <h2>לפקד</h2>
                        <p>הכוח לא טמון רק בכוחותיך – הוא טמון בתכנון האסטרטגי שלך.</p>
                    </div>
                    <img src="/images/card-command.jpg" alt="לפקד" className="card-image" />
                </div>
            </div>
            <div className="card">
                <div className="card-content reverse">
                    <img src="/images/card-counqer.webp" alt="לכבוש" className="card-image" />
                    <div className="card-text">
                        <h2>לכבוש</h2>
                        <p>הכיבוש מתחיל ברגע שאתה מעז – פחד הוא אויבך האמיתי.</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <div className="card-text">
                        <h2>לנצח</h2>
                        <p>עכשיו אתה לא רק שחקן – אתה אגדה. הקרב הושלם, ההיסטוריה תזכור אותך.</p>
                    </div>
                    <img src="/images/card-win.webp" alt="לנצח" className="card-image" />
                </div>
            </div>
        </section>
    );
}

export default CardSection;
