import React, { useState } from 'react';
import { motion } from 'framer-motion';
import meImage from '../images/me.jpeg';
import legIcon from '../images/leg.png';
import novaIcon from '../images/nova.png';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Create the URL with the form data as query parameters
      const url = new URL('https://script.google.com/macros/s/AKfycbw-vPkxNT9jzHkvkMSLXIWe2wk6HcTdjvq_wBNXDCACXo8wK8YK7fRWKmqX76pwR9BDHA/exec');
      url.searchParams.append('name', formData.name);
      url.searchParams.append('email', formData.email);
      url.searchParams.append('company', formData.company);
      url.searchParams.append('message', formData.message);

      // Send the form data using a simple GET request
      const response = await fetch(url.toString(), {
        method: 'GET',
        mode: 'no-cors'
      });

      // Since we're using no-cors, we won't get a proper response
      // We'll consider it successful if we get here without an error
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    }
  };

  return (
    <section id="contact" className="py-12 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-dark-900 mb-4"
          >
            Contacte-nos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-dark-500 max-w-3xl mx-auto"
          >
            Estamos aqui para ajudar. Envie-nos uma mensagem e entraremos em contacto consigo brevemente.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-9 gap-8 px-4">
          {/* Form Section - Takes 6 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 md:col-start-1 bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F19] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F19] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-dark-700 mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F19] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F19] focus:border-transparent"
                />
              </div>

              {status === 'error' && (
                <div className="text-red-600 text-sm">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="text-green-600 text-sm">
                  Mensagem enviada com sucesso! Entraremos em contacto brevemente.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
                  status === 'loading' ? 'bg-gray-400' : 'bg-[#E31F19] hover:bg-[#CC1C16]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? 'A enviar...' : 'Enviar Mensagem'}
              </motion.button>
            </form>
          </motion.div>

          {/* Profile Card - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-xs mx-auto w-full"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#E31F19] shadow-lg">
              <img 
                src={meImage}
                alt="Vitor" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-full mb-4 p-3 bg-orange-50 rounded-lg">
              <p className="text-gray-700 italic text-sm">
                "Entrarei em contacto consigo pessoalmente para entender melhor as necessidades do seu negócio e como podemos ajudar."
              </p>
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Vitor
              </h3>
              
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="font-medium">
                  Consultor na Toucan
                </p>
                <p>
                  Mestrando na Nova SBE
                </p>
                <p>
                  Ex-empreendedor atingindo receita de 100k€
                </p>
                <p>
                  email: vitor.qp05@gmail.com
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-gray-100 w-full">
                <img src={legIcon} alt="Toucan Icon" className="h-8 w-auto opacity-90" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;