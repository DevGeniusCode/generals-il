import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import News from './pages/News';
// import Guides from './pages/Guides';
// import Resources from './pages/Resources';
// import SocialMedia from './pages/SocialMedia';
// import Blog from './pages/Blog.jsx';
import './index.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/news" element={<News />} />*/}
                {/*<Route path="/guides" element={<Guides />} />*/}
                {/*<Route path="/resources" element={<Resources />} />*/}
                {/*<Route path="/social-media" element={<SocialMedia />} />*/}
                {/*<Route path="/blog" element={<Blog />} />*/}
            </Routes>
        </Router>
    );
}

export default App;
