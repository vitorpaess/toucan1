import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const expertises = [
  {
    id: 'MKT001',
    area: 'Marketing',
    description: 'Desenvolva estratégias de marketing baseadas em dados que produzem resultados mensuráveis sem adivinhações.',
    status: 'Available',
    capabilities: [
      'Estratégia de aquisição de clientes',
      'Otimização de canais',
      'Planeamento e criação de conteúdo',
      'Otimização da taxa de conversão',
      'Posicionamento da marca'
    ]
  },
  {
    id: 'OPS001',
    area: 'Operações',
    description: 'Simplifique operações e otimize processos para máxima eficiência e redução de custos.',
    status: 'Available',
    capabilities: [
      'Otimização de processos',
      'Gestão da cadeia de abastecimento',
      'Sistemas de controlo de qualidade',
      'Gestão de inventário',
      'Redução de custos operacionais'
    ]
  },
  {
    id: 'FIN001',
    area: 'Finanças',
    description: 'Tome decisões financeiras informadas com análise e previsão potenciadas por IA.',
    status: 'Available',
    capabilities: [
      'Planeamento financeiro',
      'Otimização do fluxo de caixa',
      'Análise de investimentos',
      'Gestão de risco',
      'Otimização orçamental'
    ]
  },
  {
    id: 'STR001',
    area: 'Estratégia',
    description: 'Desenvolva estratégias empresariais abrangentes para crescimento sustentável e vantagem competitiva.',
    status: 'Available',
    capabilities: [
      'Análise de mercado',
      'Posicionamento competitivo',
      'Estratégia de crescimento',
      'Inovação do modelo de negócio',
      'Parcerias estratégicas'
    ]
  }
];

const MarketingGraph = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full h-full flex items-center justify-center"
  >
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full max-w-[300px]"
    >
      {/* Simple grid */}
      {[0, 50, 100].map((y) => (
        <motion.line
          key={`grid-${y}`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
          x1="0" y1={y} x2="200" y2={y}
          stroke="#e5e7eb"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
      ))}

      {/* Main trend line */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M 0 80 Q 50 70, 100 40 T 200 10"
        stroke="#E31F19"
        strokeWidth="3"
        fill="none"
      />

      {/* Simple gradient area */}
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        d="M 0 80 Q 50 70, 100 40 T 200 10 L 200 100 L 0 100 Z"
        fill="#E31F19"
      />

      {/* Key data points */}
      {[
        { cx: 0, cy: 80 },
        { cx: 100, cy: 40 },
        { cx: 200, cy: 10 }
      ].map((point, index) => (
        <motion.circle
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 + index * 0.2 }}
          cx={point.cx} cy={point.cy} r="4"
          fill="#E31F19"
        />
      ))}
    </svg>
  </motion.div>
);

const OperationsGraph = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full h-full flex items-center justify-center"
  >
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full max-w-[300px]"
    >
      {/* Main circle */}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        cx="100" cy="50" r="40"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="2"
      />
      
      {/* Rotating arrow */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, rotate: 360 }}
        transition={{
          pathLength: { duration: 2, ease: "easeInOut" },
          rotate: { duration: 8, ease: "linear", repeat: Infinity }
        }}
        d="M 140 50 A 40 40 0 1 1 139 49"
        stroke="#E31F19"
        strokeWidth="3"
        fill="none"
        transform-origin="100 50"
      />

      {/* Process points */}
      {[0, 90, 180, 270].map((angle, index) => {
        const x = 100 + 40 * Math.cos((angle * Math.PI) / 180);
        const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
        return (
          <motion.circle
            key={angle}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            cx={x} cy={y} r="6"
            fill="#E31F19"
          />
        );
      })}
    </svg>
  </motion.div>
);

const FinanceGraph = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full h-full flex items-center justify-center"
  >
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full max-w-[300px]"
    >
      {/* Simple bars */}
      {[
        { height: 60, x: 40, value: '+28%' },
        { height: 80, x: 100, value: '+45%' },
        { height: 70, x: 160, value: '+36%' }
      ].map((bar, index) => (
        <React.Fragment key={index}>
          <motion.rect
            initial={{ height: 0, y: 100 }}
            animate={{ height: bar.height, y: 100 - bar.height }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            x={bar.x - 15}
            width="30"
            fill="#E31F19"
            opacity={0.8}
            rx="2"
          />
          <motion.text
            initial={{ opacity: 0, y: 90 - bar.height }}
            animate={{ opacity: 1, y: 85 - bar.height }}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
            x={bar.x}
            textAnchor="middle"
            fontSize="8"
            fill="#E31F19"
          >
            {bar.value}
          </motion.text>
        </React.Fragment>
      ))}

      {/* Baseline */}
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
        x1="0" y1="100" x2="200" y2="100"
        stroke="#E31F19"
        strokeWidth="2"
      />
    </svg>
  </motion.div>
);

const StrategyGraph = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full h-full flex items-center justify-center"
  >
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full max-w-[300px]"
    >
      {/* Main pyramid */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M 100 10 L 180 90 L 20 90 Z"
        stroke="#E31F19"
        strokeWidth="3"
        fill="none"
      />

      {/* Horizontal levels */}
      {[30, 50, 70].map((y, index) => (
        <motion.line
          key={index}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
          x1={20 + ((y - 10) / 80) * 160}
          y1={y}
          x2={180 - ((y - 10) / 80) * 160}
          y2={y}
          stroke="#E31F19"
          strokeWidth="2"
          opacity="0.5"
        />
      ))}

      {/* Key points */}
      {[
        { x: 100, y: 10 },
        { x: 20, y: 90 },
        { x: 180, y: 90 }
      ].map((point, index) => (
        <motion.circle
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8 + index * 0.2 }}
          cx={point.x} cy={point.y} r="4"
          fill="#E31F19"
        />
      ))}
    </svg>
  </motion.div>
);

const comparisons = [
  {
    title: 'Conhecimento Especializado',
    description: 'Enquanto o ChatGPT oferece respostas genéricas, <strong>o Toucan é especializado em PMEs portuguesas, com conhecimento profundo do mercado local e melhores práticas do setor.</strong>',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Insights Personalizados',
    description: 'O ChatGPT não conhece o seu negócio nem o mercado português. <strong>O Toucan analisa dados específicos do seu setor e região, oferecendo recomendações verdadeiramente relevantes para sua empresa.</strong>',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Acompanhamento Contínuo',
    description: 'Diferente do ChatGPT que fornece apenas respostas isoladas, <strong>o Toucan acompanha o progresso da sua empresa, ajustando estratégias e melhorando recomendações com base nos resultados.</strong>',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const Agents: React.FC = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(expertises[0]);

  return (
    <section id="agents" className="py-12 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-dark-900 mb-4"
          >
            Especialistas à Disposição
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-dark-500 max-w-3xl mx-auto"
          >
            Aceda a consultores de IA especializados em áreas-chave do negócio. Obtenha orientação especializada, insights acionáveis e apoio à implementação para impulsionar o seu negócio.
          </motion.p>
        </div>

        {/* Expertise Selection Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {expertises.map((expertise) => (
            <motion.button
              key={expertise.id}
              onClick={() => setSelectedExpertise(expertise)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedExpertise.id === expertise.id
                  ? 'bg-[#E31F19] text-white shadow-lg scale-105'
                  : 'bg-white text-dark-900 hover:bg-gray-50 border border-gray-200'
              }`}
              whileHover={{ scale: selectedExpertise.id === expertise.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {expertise.area}
            </motion.button>
          ))}
        </div>

        {/* Detailed Expertise Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExpertise.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="hidden md:flex items-center justify-center min-h-[300px]">
                {selectedExpertise.area === 'Marketing' && <MarketingGraph />}
                {selectedExpertise.area === 'Operações' && <OperationsGraph />}
                {selectedExpertise.area === 'Finanças' && <FinanceGraph />}
                {selectedExpertise.area === 'Estratégia' && <StrategyGraph />}
              </div>
              <div>
                <motion.h3
                  className="text-2xl font-bold text-dark-900 mb-6"
                >
                  Consultor de {selectedExpertise.area}
                </motion.h3>
                <motion.p
                  className="text-dark-500 mb-6"
                >
                  {selectedExpertise.description}
                </motion.p>
                <ul className="space-y-3">
                  {selectedExpertise.capabilities.map((capability, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-dark-500"
                    >
                      <svg
                        className="w-5 h-5 text-[#E31F19] mr-3"
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
                      {capability}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Agents; 