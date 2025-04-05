import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';

const navigation = [
  { name: 'Início', href: '#' },
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Preços', href: '#pricing' },
  { name: 'Contato', href: '#contact' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#E31F19]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img src={logo1} alt="SmartConsult AI Icon" className="h-8 w-auto" />
              <img src={logo2} alt="SmartConsult AI Logo" className="h-5 w-auto mt-0.5 ml-1" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => window.location.href='#contact'} 
              className="px-4 py-2 bg-white text-[#E31F19] rounded-lg hover:bg-white/90 transition-colors text-sm font-medium"
            >
              Agende uma Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-white/70 hover:text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#E31F19]">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => window.location.href='#contact'} 
            className="w-full mt-2 px-4 py-2 bg-white text-[#E31F19] rounded-lg hover:bg-white/90 transition-colors text-sm font-medium"
          >
            Agende uma Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;