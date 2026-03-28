// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react'; // <-- 1. Import Analytics

// Components
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import FloatingSocialSidebar from './components/FloatingSocialSidebar';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import News from './pages/News';
import Guides from './pages/Guides.jsx';
import GuideViewer from './components/GuideViewer';
import Resources from './pages/Resources.jsx';
import SocialMedia from './pages/SocialMedia.jsx';

import './main.css';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />

                <Navbar />

                {/* INJECTION POINT: Must be inside Router, under Navbar */}
                <Breadcrumbs />

                <FloatingSocialSidebar />
                <BackToTop />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/guides" element={<Guides />} />
                    <Route path="/guides/:guideName" element={<GuideViewer />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/social-media" element={<SocialMedia />} />
                </Routes>

                <Footer />
            </Router>

            {/* 2. Mount Analytics outside the Router but inside the app */}
            <Analytics />
        </HelmetProvider>
    );
}

export default App;