import React from 'react';
import { Clock, Shield, Users, TrendingUp, Award, Zap } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Clock,
      title: "Piloto Funcional en 45 Días",
      description: "No entregamos reportes teóricos. Desarrollamos soluciones de IA 100% funcionales que resuelven problemas reales de negocio desde el primer día.",
      highlight: "45 días garantizados"
    },
    {
      icon: Users,
      title: "Equipo Senior Especializado",
      description: "Nuestro equipo cuenta con expertos certificados en IA, big data, ciberseguridad y automatización con experiencia comprobada en grandes empresas.",
      highlight: "+15 años experiencia"
    },
    {
      icon: Shield,
      title: "IA Confiable y Segura",
      description: "Integramos ciberseguridad, compliance y ética desde el diseño. Certificados ISO 27001 y preparados para la nueva regulación de IA en Chile.",
      highlight: "ISO 27001 Certified"
    },
    {
      icon: TrendingUp,
      title: "ROI Medible y Tangible",
      description: "Cada proyecto se mide por su impacto en el negocio. Nuestros clientes logran ROI promedio de 6x y ahorros operativos del 25% en el primer año.",
      highlight: "ROI 6x promedio"
    },
    {
      icon: Award,
      title: "Transferencia de Capacidades",
      description: "No solo entregamos tecnología, capacitamos a tu equipo para que puedan mantener, mejorar y escalar la solución de forma autónoma.",
      highlight: "Capacitación incluida"
    },
    {
      icon: Zap,
      title: "Metodología Ágil Acelerada",
      description: "Nuestra metodología SWAT45 combina frameworks ágiles con herramientas de IA para acelerar la entrega sin comprometer la calidad.",
      highlight: "Metodología propia"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            ¿Por qué elegir ExpertPro para tu transformación con IA?
          </h2>
          <p className="text-xl text-slate-600">
            Somos el único partner que combina velocidad de entrega, expertise técnico senior 
            y un enfoque integral en seguridad y compliance para Latam.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-sm font-medium rounded-full">
                        {feature.highlight}
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-50 to-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Listo para transformar tu empresa con IA confiable?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Agenda una consulta gratuita de 30 minutos donde analizaremos tu caso específico 
              y te mostraremos cómo la IA puede generar valor en tu organización.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;