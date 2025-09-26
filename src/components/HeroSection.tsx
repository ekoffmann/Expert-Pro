import React from 'react';
import { ArrowRight, Clock, Shield, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-20 lg:pt-24 section-padding bg-gradient-to-br from-slate-50 to-brand-50">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo con Tagline */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/images/brand/logo-tagline.png" 
                alt="Expert Pro — Expertos en Proyectos" 
                className="h-16 w-auto mb-4"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Resultados en 45 días
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Expert Pro: Inteligencia Artificial Aplicada con 
                <span className="text-brand-600"> Resultados en 45 Días</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Consultoría especializada para empresas que buscan transformación real con IA segura, rápida y a la medida, para PYMEs chilenas que eliminan el papeleo, reducen errores en un 90% y liberan hasta 20 horas semanales para que se enfoque en hacer crecer su negocio. 
                Implementamos pilotos funcionales que generan retornos tangibles desde el primer mes.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-semibold text-slate-700">45 días garantizados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-semibold text-slate-700">Procesos ISO 27001 </span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-semibold text-slate-700">Retornos 6x promedio</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleContactClick}
                className="btn-primary flex items-center justify-center"
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Ver Casos de Éxito
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/images/ai-dashboard.png" 
                alt="Dashboard de IA ExpertPro" 
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating Metrics */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-brand-600">45</div>
                <div className="text-sm text-slate-600">Días</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">6x</div>
                <div className="text-sm text-slate-600">ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-brand-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;