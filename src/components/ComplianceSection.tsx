import React, { useState } from 'react';
import { Shield, FileCheck, Lock, Eye, Award, CheckCircle, AlertTriangle, Globe } from 'lucide-react';

const ComplianceSection = () => {
  const [activeStandard, setActiveStandard] = useState(0);

  const standards = [
    {
      icon: Shield,
      title: "ISO/IEC 27001",
      subtitle: "Gestión de Seguridad de la Información",
      description: "Estándar internacional para la gestión de la seguridad de la información, implementado en todos nuestros proyectos.",
      benefits: [
        "Protección integral de datos sensibles del cliente",
        "Procesos documentados y auditables",
        "Gestión proactiva de riesgos de seguridad",
        "Cumplimiento con regulaciones internacionales"
      ],
      implementation: "Aplicamos controles ISO 27001 desde el día uno, incluyendo clasificación de datos, control de acceso, criptografía y monitoreo continuo."
    },
    {
      icon: FileCheck,
      title: "ISO/IEC 42001",
      subtitle: "Sistemas de Gestión de IA",
      description: "El nuevo estándar internacional para sistemas de gestión de inteligencia artificial, asegurando IA ética y responsable.",
      benefits: [
        "IA transparente y explicable",
        "Mitigación de sesgos y discriminación",
        "Supervisión humana garantizada",
        "Preparación para regulaciones futuras"
      ],
      implementation: "Somos pioneros en Latam aplicando ISO 42001, asegurando que nuestros modelos de IA sean éticos, transparentes y auditables."
    },
    {
      icon: Lock,
      title: "Ley 21.096",
      subtitle: "Protección de Datos Personales - Chile",
      description: "Cumplimiento integral con la ley chilena de protección de datos personales y preparación para futuras regulaciones.",
      benefits: [
        "Tratamiento legítimo de datos personales",
        "Consentimiento informado y documentado",
        "Derechos ARCO garantizados",
        "Notificación de brechas según normativa"
      ],
      implementation: "Evaluamos la base legal para cada tratamiento de datos y implementamos controles técnicos y organizacionales apropiados."
    },
    {
      icon: Globe,
      title: "Regulación IA Chile",
      subtitle: "Preparación para la Futura Ley de IA",
      description: "Chile avanza hacia una regulación de IA basada en riesgo. Preparamos a nuestros clientes para cumplir con estos requisitos.",
      benefits: [
        "Clasificación de riesgo de sistemas IA",
        "Documentación de conformidad",
        "Evaluaciones de impacto algoritmico",
        "Supervisión humana efectiva"
      ],
      implementation: "Anticipamos los requisitos regulatorios y diseñamos nuestras soluciones para cumplir con los estándares éticos emergentes."
    }
  ];

  const certifications = [
    { name: "Lead Auditor", holder: "Jose Gleiser", icon: Award },
    { name: "Certified Ethical Hacker (CEH)", holder: "Carlos Flores", icon: Shield },
    { name: "eJPT - Penetration Tester", holder: "Blacklist", icon: Lock },
    { name: "LCSPC - Cybersecurity Professional", holder: "Carlos Flores", icon: FileCheck },
    { name: "PMP® - Project Management", holder: "Eduardo Koffmann, Milena Koscica", icon: CheckCircle },
    { name: "MIT® IA Implementation", holder: "Eduardo Koffmann", icon: FileCheck }
  ];

  const riskMatrix = [
    {
      category: "Datos Sensibles",
      risk: "Alto",
      mitigation: "Criptografía AES-256, acceso basado en roles, logs de auditoría",
      status: "Controlado"
    },
    {
      category: "Sesgo Algoritmico",
      risk: "Medio",
      mitigation: "Validación cruzada, datasets balanceados, monitoreo continuo",
      status: "Controlado"
    },
    {
      category: "Integración Sistemas",
      risk: "Medio",
      mitigation: "APIs seguras, autenticación mutua, pruebas de penetración",
      status: "Controlado"
    },
    {
      category: "Cumplimiento Legal",
      risk: "Bajo",
      mitigation: "Revisión legal continua, documentación exhaustiva",
      status: "Controlado"
    }
  ];

  return (
    <section id="compliance" className="section-padding bg-slate-50">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            IA Confiable y Segura: Nuestro Compromiso con el Compliance
          </h2>
          <p className="text-xl text-slate-600">
            La seguridad y el cumplimiento normativo no son un anexo en nuestros proyectos, 
            son el núcleo de nuestra metodología desde el día cero.
          </p>
        </div>

        {/* Standards Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {standards.map((standard, index) => {
            const IconComponent = standard.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveStandard(index)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeStandard === index
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="hidden sm:inline">{standard.title}</span>
                <span className="sm:hidden">{standard.title.split('/')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Standard Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  {React.createElement(standards[activeStandard].icon, {
                    className: "w-8 h-8 text-brand-600"
                  })}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {standards[activeStandard].title}
                    </h3>
                    <p className="text-brand-600 font-semibold">
                      {standards[activeStandard].subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {standards[activeStandard].description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Beneficios Clave:</h4>
                <ul className="space-y-2">
                  {standards[activeStandard].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Implementation */}
              <div className="bg-brand-50 rounded-lg p-4">
                <h4 className="font-semibold text-brand-800 mb-2">Nuestra Implementación:</h4>
                <p className="text-brand-700">{standards[activeStandard].implementation}</p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <img 
                src="/images/cybersecurity.jpg" 
                alt="Ciberseguridad y Compliance" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-slate-900">Certificado</div>
                  <div className="text-xs text-slate-600">{standards[activeStandard].title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Matrix */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Matriz de Riesgos y Controles
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Categoría de Riesgo</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Nivel</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Controles de Mitigación</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">Estado</th>
                </tr>
              </thead>
              <tbody>
                {riskMatrix.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-medium text-slate-900">{item.category}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.risk === 'Alto' ? 'bg-red-100 text-red-800' :
                        item.risk === 'Medio' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {item.risk}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-sm">{item.mitigation}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="flex items-center justify-center space-x-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-slate-50 to-brand-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Certificaciones del Equipo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{cert.name}</div>
                    <div className="text-slate-600 text-xs">{cert.holder}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regulatory Readiness */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl p-8 text-white text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            ¿Está tu empresa preparada para la nueva regulación de IA?
          </h3>
          <p className="text-brand-100 mb-6 max-w-3xl mx-auto">
            Chile y Latam avanzan rápidamente hacia regulaciones estrictas para sistemas de IA. 
            Las empresas que no se preparen ahora enfrentarán sanciones y restricciones operativas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
            >
              Evaluación de Readiness Gratuita
            </button>
            <button 
              onClick={() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Ver Guías de Compliance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;