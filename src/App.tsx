import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Agents from './components/Agents';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Agents />
          <Comparison />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
