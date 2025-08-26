import React, { useState } from 'react';
import { Bus, Heart, Wheat, Package, Zap, ArrowRight, Check } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Bus,
      title: "Transporte",
      subtitle: "Optimización inteligente de flotas",
      description: "Transformamos videos de cámaras en insights accionables para optimizar rutas, contar pasajeros y fiscalizar conductores.",
      useCases: [
        "Conteo automático de pasajeros con precisión 95%+",
        "Optimización de rutas y frecuencias en tiempo real",
        "Fiscalización automatizada de conductores",
        "Mantenimiento predictivo de vehículos",
        "Análisis de flujos de pasajeros por horario"
      ],
      image: "/images/bus-monitoring.jpg",
      results: "ROI 6x, 25% ahorro operativo, 90% reducción tiempo fiscalización"
    },
    {
      icon: Heart,
      title: "Salud Privada",
      subtitle: "Automatización de procesos clínicos",
      description: "Optimizamos procesos administrativos y clínicos mediante IA, mejorando la experiencia del paciente y la eficiencia operativa.",
      useCases: [
        "Gestión inteligente de agendas médicas",
        "Predicción de ausentismo de pacientes",
        "Automatización de reportes clínicos",
        "Optimización de recursos hospitalarios",
        "Análisis predictivo de reingresos"
      ],
      image: "/images/healthcare-ai.jpg",
      results: "20% reducción ausentismo, 30% mejora eficiencia administrativa"
    },
    {
      icon: Wheat,
      title: "Agroindustria",
      subtitle: "Agricultura de precisión",
      description: "Implementamos soluciones de IA para optimizar cosechas, gestionar recursos hídricos y mejorar la trazabilidad de productos agrícolas.",
      useCases: [
        "Monitoreo de cultivos con drones e IA",
        "Optimización del uso de agua y fertilizantes",
        "Detección temprana de plagas y enfermedades",
        "Predicción de rendimiento de cosechas",
        "Trazabilidad automatizada de productos"
      ],
      image: "/images/agriculture-tech.png",
      results: "15% aumento rendimiento, 25% reducción uso agua, trazabilidad 100%"
    },
    {
      icon: Package,
      title: "Logística",
      subtitle: "Cadena de suministro inteligente",
      description: "Automatizamos procesos logísticos y optimizamos la cadena de suministro mediante análisis predictivo y automatización.",
      useCases: [
        "Optimización de rutas de distribución",
        "Predicción de demanda con IA",
        "Automatización de almacenes",
        "Gestión inteligente de inventarios",
        "Optimización de carga y despachos"
      ],
      image: "/images/industrial-ai.jpg",
      results: "30% reducción costos logísticos, 40% mejora tiempo entrega"
    },
    {
      icon: Zap,
      title: "Energía & Utilities",
      subtitle: "Gestión inteligente de energía",
      description: "Optimizamos el consumo energético y implementamos mantenimiento predictivo en infraestructura crítica.",
      useCases: [
        "Mantenimiento predictivo de equipos",
        "Optimización de consumo energético",
        "Detección de anomalías en redes",
        "Predicción de fallas en infraestructura",
        "Gestión inteligente de la demanda"
      ],
      image: "/images/industrial-ai.jpg",
      results: "35% reducción costos mantenimiento, 99.9% disponibilidad sistemas"
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-slate-50">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Servicios de IA por Industria
          </h2>
          <p className="text-xl text-slate-600">
            Desarrollamos soluciones de IA especializadas para cada sector, 
            con expertise profundo en los desafíos específicos de tu industria.
          </p>
        </div>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeService === index
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    {React.createElement(services[activeService].icon, {
                      className: "w-8 h-8 text-brand-600"
                    })}
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {services[activeService].title}
                      </h3>
                      <p className="text-brand-600 font-semibold">
                        {services[activeService].subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {services[activeService].description}
                  </p>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Casos de Uso:</h4>
                  <ul className="space-y-2">
                    {services[activeService].useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Resultados Típicos:</h4>
                  <p className="text-green-700 font-medium">{services[activeService].results}</p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button 
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary flex items-center"
                  >
                    Solicitar Consulta para {services[activeService].title}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 lg:h-full">
              <img 
                src={services[activeService].image}
                alt={`${services[activeService].title} - ExpertPro IA`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-600 mb-2">5+</div>
            <div className="text-slate-600">Industrias Especializadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-600 mb-2">50+</div>
            <div className="text-slate-600">Proyectos Entregados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-600 mb-2">95%</div>
            <div className="text-slate-600">Precisión Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-600 mb-2">100%</div>
            <div className="text-slate-600">Proyectos a Tiempo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;