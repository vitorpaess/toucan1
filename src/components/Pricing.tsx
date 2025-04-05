import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Básico',
    price: '19',
    description: 'Perfeito para PMEs que estão a começar a sua transformação digital',
    features: [
      'Acesso a um agente de consultoria IA',
      'Módulo básico de conhecimento do setor',
      'Modelos e frameworks padrão',
      'Suporte por email',
      { text: 'Contas de múltiplos utilizadores', disabled: true },
      { text: 'Orientação personalizada de implementação', disabled: true },
      { text: 'Integração com sistemas empresariais', disabled: true },
    ],
    cta: 'Começar Agora',
    popular: false,
  },
  {
    name: 'Profissional',
    price: '59',
    description: 'Ideal para empresas em crescimento que precisam de mais recursos',
    features: [
      'Acesso a todos os agentes de consultoria IA',
      'Módulo completo de conhecimento do setor',
      'Modelos e frameworks avançados',
      'Suporte prioritário por email',
      'Revisão mensal do negócio gerada por IA',
      { text: 'Contas de múltiplos utilizadores', disabled: true },
      { text: 'Integração com sistemas empresariais', disabled: true },
    ],
    cta: 'Começar Agora',
    popular: true,
  },
  {
    name: 'Empresarial',
    price: '399',
    description: 'Para empresas que precisam de uma solução completa e personalizada',
    features: [
      'Todas as funcionalidades do plano Profissional',
      'Contas de múltiplos utilizadores',
      'Orientação personalizada de implementação',
      'Integração com sistemas empresariais',
      'Gestor de sucesso do cliente dedicado',
      'Revisão trimestral com especialista humano',
      'Integração personalizada de dados',
    ],
    cta: 'Falar com Consultor',
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-12 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-dark-900 mb-4 font-sfpro"
          >
            Planos e Preços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-dark-500 max-w-2xl mx-auto"
          >
            Escolha o plano ideal para o seu negócio
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-xl p-6 border ${
                plan.popular 
                  ? 'border-[#E31F19] shadow-lg ring-2 ring-[#E31F19] ring-opacity-20' 
                  : 'border-gray-200 hover:border-[#E31F19] transition-colors'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#E31F19] text-white px-3 py-0.5 rounded-full text-xs font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-dark-900">€{plan.price}</span>
                  <span className="text-sm text-dark-500 ml-1">/mês</span>
                </div>
                <p className="text-sm text-dark-500 mt-3">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    {typeof feature === 'string' ? (
                      <>
                        <svg
                          className="w-4 h-4 text-[#E31F19] mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-dark-500">{feature}</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 text-gray-300 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="text-sm text-gray-400 line-through">{feature.text}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium ${
                  plan.popular
                    ? 'bg-[#E31F19] text-white hover:bg-[#CC1C16]'
                    : 'bg-gray-50 text-dark-900 hover:bg-gray-100 border border-gray-200'
                } transition-colors duration-300`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 