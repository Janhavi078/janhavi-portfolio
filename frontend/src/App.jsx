import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Components
import Navbar from './components/Navbar';
import Loader from './components/Loader';

// Pages
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';

/**
 * App Component
 * Handles the main routing and global UI elements of the portfolio.
 */
function App() {
  return (
    <Router>
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#020617', 
        overflow: 'hidden',
        position: 'relative' 
      }}>
        
        {/* Persistent Navigation Bar */}
        <Navbar />
        
        {/* Global Loader with Framer Motion transitions */}
        <AnimatePresence mode="wait">
          <Loader />
        </AnimatePresence>

        <Routes>
          {/* Main 3D Experience (Penguin, Hero, Skills) */}
          <Route path="/" element={<Home />} />
          
          {/* Artifacts Gallery (Project Cards) */}
          <Route path="/project" element={<Project />} />
          
          {/* Handshake Protocol (Terminal Contact Form) */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;