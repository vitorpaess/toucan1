import React from 'react';
import logo1 from '../images/logo1.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E31F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img src={logo1} alt="SmartConsult AI Icon" className="h-8 w-auto" />
            </div>
            <p className="text-white/70 text-sm">
              Capacitando empresas com insights e recomendações baseadas em IA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/70 hover:text-white text-sm transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white text-sm transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">
                <a href="mailto:contacto@smartconsult.ai" className="hover:text-white transition-colors">
                  contacto@smartconsult.ai
                </a>
              </li>
              <li className="text-white/70 text-sm">
                <a href="tel:+351123456789" className="hover:text-white transition-colors">
                  +351 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © 2025 Toucan. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 