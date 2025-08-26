import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/images/brand/Captura de pantalla 2025-08-18 223138.png" 
              alt="Expert Pro" 
              className="h-7 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleSectionClick('inicio')}
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => handleSectionClick('servicios')}
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => handleSectionClick('metodologia')}
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Metodología
            </button>
            <button 
              onClick={() => handleSectionClick('equipo')}
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Equipo
            </button>
            <button 
              onClick={() => handleSectionClick('casos')}
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Casos de Éxito
            </button>
            <button 
              onClick={() => handleSectionClick('compliance')}
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Compliance
            </button>
            <button 
              onClick={() => handleSectionClick('insights')}
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Insights
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={handleContactClick}
              className="btn-primary"
            >
              Solicitar Diagnóstico Gratuito
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => handleSectionClick('inicio')}
                className="px-4 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-brand-600 transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => handleSectionClick('servicios')}
                className="px-4 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-brand-600 transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => handleSectionClick('metodologia')}
                className="px-4 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-brand-600 transition-colors"
              >
                Metodología
              </button>
              <button 
                onClick={() => handleSectionClick('equipo')}
                className="px-4 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-brand-600 transition-colors"
              >
                Equipo
              </button>
              <button 
                onClick={() => handleSectionClick('casos')}
                className="px-4 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-brand-600 transition-colors"
              >
                Casos de Éxito
              </button>
              <button 
                onClick={() => handleSectionClick('compliance')}
                className="px-4 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-brand-600 transition-colors"
              >
                Compliance
              </button>
              <button 
                onClick={() => handleSectionClick('insights')}
                className="px-4 py-3 text-left text-slate-700 hover:bg-slate-50 hover:text-brand-600 transition-colors"
              >
                Insights
              </button>
              <div className="px-4 py-3">
                <button 
                  onClick={handleContactClick}
                  className="btn-primary w-full"
                >
                  Solicitar Diagnóstico Gratuito
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;