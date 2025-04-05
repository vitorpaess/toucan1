import React from 'react';
import { motion } from 'framer-motion';
import comparisonImage from '../images/s.jpg';

const comparisons = [
  {
    title: 'Conhecimento Especializado',
    description: 'O Toucan é especializado em PMEs portuguesas, com conhecimento profundo do mercado local e melhores práticas do setor.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Insights Personalizados',
    description: 'O Toucan analisa dados específicos do seu setor e região, oferecendo recomendações verdadeiramente relevantes para sua empresa.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Acompanhamento Contínuo',
    description: 'O Toucan acompanha o progresso da sua empresa, ajustando estratégias e melhorando recomendações com base nos resultados.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },

  {
    title: 'Alternativa Económica',
    description: 'O Toucan oferece consultoria de qualidade a uma fração do custo, disponível 24/7 e sem compromissos longos.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }
];

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-12 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-dark-900 mb-4 font-sfpro"
          >
            O que esperar do Toucan?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-dark-500 max-w-2xl mx-auto"
          >
            Descubra como o Toucan oferece uma solução mais especializada e eficaz para o seu negócio
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl w-full max-w-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={comparisonImage}
                alt="Toucan vs ChatGPT Comparison"
                className="w-full h-auto object-cover rounded-2xl min-h-[600px]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right side - Cards */}
          <div className="space-y-6">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card content */}
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 bg-[#E31F19] rounded-xl flex items-center justify-center text-white shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {comparison.icon}
                    </motion.div>
                    <motion.h3 
                      className="ml-4 text-xl font-bold text-dark-900 group-hover:text-rose-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {comparison.title}
                    </motion.h3>
                  </div>
                  <motion.p 
                    className="text-base text-dark-500 leading-relaxed"
                    whileHover={{ scale: 1.01 }}
                    dangerouslySetInnerHTML={{ __html: comparison.description }}
                  >
                  </motion.p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;