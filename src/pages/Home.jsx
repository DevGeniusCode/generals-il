import React from 'react';
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';

function Home() {
    return (
        <div className="container">
            <div className="home">
                <HeroSection/>
                <CardSection/>
            </div>
        </div>
    );
}

export default Home;
