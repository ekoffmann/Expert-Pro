import React, { useState } from 'react';
import { Bus, TrendingUp, Users, Clock, DollarSign, Shield, Play, ChevronRight } from 'lucide-react';

const CaseStudySection = () => {
  const [activeTab, setActiveTab] = useState('challenge');

  const metrics = [
    {
      icon: TrendingUp,
      label: "ROI Logrado",
      value: "6x",
      description: "Retorno de inversión en 12 meses",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      label: "Ahorro Operativo",
      value: "25%",
      description: "Reducción en costos de operación",
      color: "text-brand-600"
    },
    {
      icon: Clock,
      label: "Tiempo Fiscalización",
      value: "90%",
      description: "Reducción en tiempo de fiscalización",
      color: "text-purple-600"
    },
    {
      icon: Users,
      label: "Precisión Conteo",
      value: "95%+",
      description: "Exactitud en conteo de pasajeros",
      color: "text-orange-600"
    }
  ];

  const timeline = [
    {
      week: "Semanas 1-2",
      title: "Discovery & Data Setup",
      activities: [
        "Análisis de 500+ horas de video de cámaras existentes",
        "Identificación de patrones de flujo de pasajeros",
        "Setup de pipeline de datos en tiempo real"
      ]
    },
    {
      week: "Semanas 3-4",
      title: "AI Model Development",
      activities: [
        "Entrenamiento de modelo de visión computacional",
        "Algoritmo de conteo de pasajeros con precisión 95%+",
        "Detección de comportamientos anómalos de conductores"
      ]
    },
    {
      week: "Semanas 5-6",
      title: "Integration & Delivery",
      activities: [
        "Integración con sistema de gestión de flota existente",
        "Dashboard en tiempo real para supervisores",
        "Capacitación al equipo de operaciones"
      ]
    }
  ];

  return (
    <section id="casos" className="section-padding bg-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Caso de Éxito: Optimización de Transporte Público con IA
          </h2>
          <p className="text-xl text-slate-600">
            Cómo transformamos videos sin analizar en insights accionables que generaron 
            un ROI de 6x y ahorros del 25% en solo 45 días.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('challenge')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'challenge'
                ? 'bg-brand-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-600'
            }`}
          >
            El Desafío
          </button>
          <button
            onClick={() => setActiveTab('solution')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'solution'
                ? 'bg-brand-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-600'
            }`}
          >
            La Solución SWAT45
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'results'
                ? 'bg-brand-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-600'
            }`}
          >
            Los Resultados
          </button>
        </div>

        {/* Content Sections */}
        <div className="bg-gradient-to-br from-slate-50 to-brand-50 rounded-2xl p-8 lg:p-12">
          {/* Challenge Tab */}
          {activeTab === 'challenge' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <Bus className="w-8 h-8 text-brand-600 mr-3" />
                    El Problema: Datos Sin Aprovechar
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Una empresa de transporte público tenía cientos de cámaras instaladas en su flota 
                    generando miles de horas de video mensualmente, pero no podía extraer valor de esta información.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Principales Desafíos:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600">Imposible fiscalizar manualmente el comportamiento de 200+ conductores</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600">Sin datos precisos sobre flujos de pasajeros por ruta y horario</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600">Optimización de frecuencias basada en intuición, no en datos</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600">Desperdicio de recursos por falta de visibilidad operativa</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <p className="text-red-800 font-medium">
                    <strong>Impacto:</strong> Sobrecostos operativos estimados en $500K USD anuales 
                    por ineficiencias no detectadas.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/bus-monitoring.jpg" 
                  alt="Sistema de monitoreo de buses" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          )}

          {/* Solution Tab */}
          {activeTab === 'solution' && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  La Solución: IA de Visión Computacional en 45 Días
                </h3>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Desarrollamos un sistema de IA que transforma automáticamente los videos 
                  en insights accionables para la optimización operativa.
                </p>
              </div>
              
              {/* Timeline */}
              <div className="space-y-8">
                {timeline.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-semibold text-slate-900">{phase.title}</h4>
                          <span className="px-3 py-1 bg-brand-100 text-brand-800 rounded-full text-sm font-medium">
                            {phase.week}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start space-x-3">
                              <ChevronRight className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-600">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Key Features */}
              <div className="bg-white rounded-lg p-8">
                <h4 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  Funcionalidades Clave del Sistema
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-semibold text-brand-600">Conteo Inteligente de Pasajeros</h5>
                    <p className="text-slate-600 text-sm">
                      Algoritmo de visión computacional que cuenta pasajeros que suben y bajan 
                      con precisión del 95%+, diferenciando adultos, niños y personas con movilidad reducida.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-brand-600">Fiscalización Automatizada</h5>
                    <p className="text-slate-600 text-sm">
                      Detección automática de comportamientos irregulares: velocidad excesiva, 
                      frenadas bruscas, uso de teléfono, fatiga del conductor.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-brand-600">Dashboard en Tiempo Real</h5>
                    <p className="text-slate-600 text-sm">
                      Interface intuitiva que muestra flujos de pasajeros, ocupación por ruta, 
                      alertas de incidentes y métricas de performance por conductor.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-brand-600">Optimización Predictiva</h5>
                    <p className="text-slate-600 text-sm">
                      Recomendaciones automáticas para ajustar frecuencias, redistribuir flota 
                      y optimizar rutas basadas en patrones históricos y predicciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Resultados Cuantificables en 12 Meses
                </h3>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Los resultados superaron las expectativas iniciales, generando un impacto 
                  significativo en la eficiencia operativa y la experiencia del usuario.
                </p>
              </div>
              
              {/* Metrics Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                      <div className="w-12 h-12 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                        <IconComponent className={`w-6 h-6 ${metric.color}`} />
                      </div>
                      <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                        {metric.value}
                      </div>
                      <div className="font-semibold text-slate-900 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-sm text-slate-600">
                        {metric.description}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Additional Benefits */}
              <div className="bg-white rounded-lg p-8">
                <h4 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  Beneficios Adicionales Logrados
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h5 className="font-semibold text-green-600">Beneficios Operativos</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-slate-600 text-sm">Reducción del 40% en quejas de usuarios por sobrecarga</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-slate-600 text-sm">Mejora del 30% en puntualidad de servicios</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-slate-600 text-sm">Optimización de 15 rutas basada en datos reales</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-semibold text-brand-600">Beneficios Estratégicos</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-slate-600 text-sm">Capacidad de toma de decisiones basada en datos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-slate-600 text-sm">Mejora en la imagen corporativa y satisfacción del cliente</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-slate-600 text-sm">Preparación para expansión con modelo escalable</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gradient-to-r from-brand-50 to-green-50 rounded-lg p-8 text-center">
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg italic text-slate-700 mb-4">
                    "En solo 45 días, ExpertPro transformó completamente nuestra operación. 
                    Ahora tomamos decisiones basadas en datos reales, no en intuiciones. 
                    El ROI ha superado todas nuestras expectativas."
                  </p>
                  <div className="font-semibold text-slate-900">
                    Gerente General - Empresa de Transporte Público
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres lograr resultados similares en tu empresa?
            </h3>
            <p className="text-brand-100 mb-6 max-w-2xl mx-auto">
              Agenda una consulta gratuita donde analizaremos tu caso específico 
              y te mostraremos cómo podemos replicar este éxito en tu organización.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
            >
              Replicar Este Éxito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;