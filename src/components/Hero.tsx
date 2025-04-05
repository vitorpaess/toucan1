import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import novaLogo from '../images/nova.png';
import dashImage from '../images/dash.png';
import tashImage from '../images/tash.png';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'agent'>('dashboard');

  const VerticalText = ({ text }: { text: string }) => (
    <div className="flex flex-col items-center">
      {text.split('').map((char, index) => (
        <span key={index} className="text-lg font-medium leading-none my-1">{char.toUpperCase()}</span>
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen bg-[#E31F19] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F42820] rounded-full opacity-50 blur-3xl"></div>
        
        {/* Square */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#CC1C16] opacity-45 rotate-12"></div>
        
        {/* Triangle */}
        <div className="absolute bottom-20 right-20 w-0 h-0 border-l-[100px] border-l-transparent border-t-[173px] border-t-[#F42820] opacity-50"></div>
        
        {/* Small Circle */}
        <div className="absolute top-3/4 left-1/4 w-40 h-40 bg-[#CC1C16] rounded-full opacity-45 blur-2xl"></div>
        
        {/* Rectangle */}
        <div className="absolute bottom-40 left-1/3 w-48 h-32 bg-[#F42820] opacity-40 -rotate-12"></div>

        {/* New Elements */}
        {/* Diamond */}
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#F42820] opacity-45 rotate-45"></div>
        
        {/* Hexagon */}
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-[#CC1C16] opacity-40 clip-path-hexagon"></div>
        
        {/* Star */}
        <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-[#F42820] opacity-45 transform rotate-12"></div>
        
        {/* Oval */}
        <div className="absolute top-1/2 right-1/4 w-48 h-32 bg-[#CC1C16] rounded-full opacity-40 blur-xl"></div>
        
        {/* Cross */}
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-[#F42820] opacity-45 transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Nova Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm mb-8 border border-white/20"
          >
            <img src={novaLogo} alt="Nova Logo" className="h-5 w-auto" />
            <span className="text-sm font-medium text-white/70">Feito por estudantes da Nova</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold text-white mb-6 font-sfpro"
          >
            Consultoria Inteligente por uma
            <br />
            Fração de Consultorias Tradicionais
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-12"
          >
            Acesse expertise empresarial premium por preço acessível.
            Nossa IA especializada analisa seu negócio e oferece soluções implementáveis
            para crescimento acelerado e otimização de recursos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <button 
              onClick={() => window.location.href='#contact'}
              className="px-10 py-4 bg-white text-[#E31F19] rounded-xl hover:bg-white/90 transition-all duration-200 font-semibold text-lg shadow-lg hover:scale-105"
            >
              Agende uma Demo
            </button>
          </motion.div>

          {/* Tabs and Image Container */}
          <div className="max-w-4xl mx-auto">
            {/* Horizontal Tabs */}
            <div className="inline-flex p-1 bg-white/5 backdrop-blur-sm rounded-xl mb-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-8 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeTab === 'dashboard'
                    ? 'bg-[#E31F19] text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('agent')}
                className={`px-8 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeTab === 'agent'
                    ? 'bg-[#E31F19] text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Agent
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 'dashboard' ? (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.img 
                      src={dashImage} 
                      alt="Dashboard Preview" 
                      className="w-full h-auto"
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.4 }
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="agent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.img 
                      src={tashImage} 
                      alt="Agent Preview" 
                      className="w-full h-auto"
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.4 }
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;