import React from 'react';
import { Mail, MapPin, Linkedin, Award, Shield, FileCheck } from 'lucide-react';

const Footer = () => {
  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const certifications = [
    "ISO 27001 Lead Auditor",
    "Certified Ethical Hacker (CEH)",
    "PMP® Project Management",
    "ITIL® Foundation",
    "eJPT Penetration Tester",
    "LCSPC Cybersecurity Professional"
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img 
                  src="/images/brand/logo-mark.png" 
                  alt="Expert Pro" 
                  className="h-10 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <p className="text-slate-400 leading-relaxed">
                Consultoría premium en IA aplicada para empresas que buscan transformación real 
                con resultados tangibles en 45 días.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:eduardo@expertpro.ai" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Navegación</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleSectionClick('inicio')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionClick('servicios')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionClick('metodologia')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Metodología SWAT45
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionClick('equipo')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Equipo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionClick('casos')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Casos de Éxito
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionClick('compliance')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Compliance
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionClick('insights')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Insights
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Servicios por Industria</h4>
              <ul className="space-y-3">
                <li className="text-slate-400">Transporte Público</li>
                <li className="text-slate-400">Salud Privada</li>
                <li className="text-slate-400">Agroindustria</li>
                <li className="text-slate-400">Logística</li>
                <li className="text-slate-400">Energía & Utilities</li>
              </ul>
              
              <div className="pt-4">
                <h5 className="font-medium text-white mb-3">Partners</h5>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">BL</span>
                  </div>
                  <span className="text-slate-400 text-sm">Blacklist Security</span>
                </div>
              </div>
            </div>

            {/* Contact & Certifications */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:ekoffmann@expertpro.cl" className="text-slate-400 hover:text-white transition-colors">
                      ekoffmann@expertpro.cl
                    </a>
                    <div className="text-slate-500 text-sm">Respuesta en 24h</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Santiago, Chile</div>
                    <div className="text-slate-500 text-sm">Cobertura Latam</div>
                  </div>
                </div>
              </div>
              
              {/* Key Certifications */}
              <div>
                <h5 className="font-medium text-white mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Certificaciones Clave
                </h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-slate-400 text-sm">ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileCheck className="w-4 h-4 text-brand-400" />
                    <span className="text-slate-400 text-sm">PMP® & ITIL®</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-red-400" />
                    <span className="text-slate-400 text-sm">Ethical Hacker (CEH)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 ExpertPro. Todos los derechos reservados. Desarrollado por Expert Pro.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-slate-400 hover:text-white transition-colors">
                Política de Privacidad
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                Términos de Servicio
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                Política de Cookies
              </button>
            </div>
          </div>
        </div>

        {/* Compliance Banner */}
        <div className="border-t border-slate-800 py-6">
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>ISO 27001 Compliant</span>
              </span>
              <span>•</span>
              <span>IA Ética y Responsable</span>
              <span>•</span>
              <span>Cumplimiento Ley 21.096 Chile</span>
              <span>•</span>
              <span>Preparado para Regulación IA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;