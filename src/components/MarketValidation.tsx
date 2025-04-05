import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const MarketValidation: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            {content.marketValidation.title}
          </motion.h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.marketValidation.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-white rounded-lg text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-4xl font-bold text-blue-600 mb-4"
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Market Opportunity
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 31.7 million small businesses in the US and a growing demand for affordable consulting services, SmartConsult AI is positioned to capture a significant share of the $20 billion SMB consulting market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketValidation; 