import React from 'react';
import { BookOpen, Download, Calendar, Clock, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const InsightsSection = () => {
  const featuredArticles = [
    {
      category: "Regulación",
      title: "Guía Completa: Preparando tu Empresa para la Ley de IA en Chile",
      excerpt: "Todo lo que necesitas saber sobre la próxima regulación de IA en Chile y cómo preparar tu organización para cumplir con los nuevos requisitos.",
      readTime: "8 min",
      date: "15 Jul 2025",
      featured: true,
      icon: Shield
    },
    {
      category: "Casos de Uso",
      title: "ROI Comprobado: 5 Casos de IA en Transporte que Generaron Más de 6x",
      excerpt: "Análisis detallado de implementaciones exitosas de IA en el sector transporte, con métricas reales y aprendizajes clave.",
      readTime: "6 min",
      date: "08 Jul 2025",
      featured: false,
      icon: TrendingUp
    },
    {
      category: "Metodología",
      title: "SWAT45 en Acción: Cómo Entregar Pilotos de IA en Tiempo Récord",
      excerpt: "Detrás de cámaras de nuestra metodología propietaria que garantiza la entrega de pilotos funcionales en exactamente 45 días.",
      readTime: "10 min",
      date: "01 Jul 2025",
      featured: false,
      icon: Zap
    }
  ];

  const whitepapers = [
    {
      title: "El Estado de la IA en Latam 2025",
      description: "Reporte anual sobre adopción, desafíos y oportunidades de la IA en América Latina.",
      pages: "32 páginas",
      format: "PDF",
      category: "Investigación"
    },
    {
      title: "Framework de Evaluación de Readiness para IA",
      description: "Metodología paso a paso para evaluar si tu organización está lista para adoptar IA.",
      pages: "28 páginas",
      format: "PDF",
      category: "Guía Práctica"
    },
    {
      title: "Checklist de Compliance para IA en Chile",
      description: "Lista de verificación completa para asegurar el cumplimiento normativo en proyectos de IA.",
      pages: "16 páginas",
      format: "PDF",
      category: "Compliance"
    }
  ];

  const upcomingEvents = [
    {
      type: "Webinar",
      title: "IA Confiable: Navegando el Nuevo Marco Regulatorio",
      date: "25 Agosto 2025",
      time: "16:00 CLT",
      duration: "60 min",
      speakers: "Eduardo Koffmann & Carlos Flores"
    },
    {
      type: "Workshop",
      title: "Taller Práctico: Identificando Oportunidades de IA en tu Empresa",
      date: "15 Septiembre 2025",
      time: "14:00 CLT",
      duration: "2 horas",
      speakers: "Hamlet Muñoz & José Gleiser"
    }
  ];

  return (
    <section id="insights" className="section-padding bg-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Centro de Conocimiento: Insights sobre IA Aplicada
          </h2>
          <p className="text-xl text-slate-600">
            Artículos especializados, guías prácticas y recursos para liderar la adopción de IA 
            en tu organización con confianza y seguridad.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticles.filter(article => article.featured).map((article, index) => {
          const IconComponent = article.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-brand-50 to-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-brand-600 text-white text-sm font-medium rounded-full">
                        Artículo Destacado
                      </span>
                      <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} lectura</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary flex items-center">
                    Leer Artículo Completo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-24 h-24 text-white/20" />
                  </div>
                  <div className="absolute inset-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Recent Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Artículos Recientes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.filter(article => !article.featured).map((article, index) => {
              const IconComponent = article.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <IconComponent className="w-6 h-6 text-brand-600" />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-slate-900 leading-tight">
                      {article.title}
                    </h4>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <button className="text-brand-600 hover:text-brand-800 font-medium flex items-center">
                        Leer más
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Whitepapers */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Recursos Descargables</h3>
            <BookOpen className="w-8 h-8 text-brand-600" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {whitepapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                      {paper.category}
                    </span>
                    <Download className="w-5 h-5 text-slate-400" />
                  </div>
                  
                  <h4 className="font-semibold text-slate-900 leading-tight">
                    {paper.title}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {paper.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{paper.pages}</span>
                    <span>{paper.format}</span>
                  </div>
                  
                  <button className="w-full btn-secondary text-sm py-2">
                    Descargar Gratis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Próximos Eventos</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                      {event.type}
                    </span>
                    <Calendar className="w-5 h-5 text-white/60" />
                  </div>
                  
                  <h4 className="font-semibold text-white leading-tight">
                    {event.title}
                  </h4>
                  
                  <div className="space-y-2 text-sm text-brand-100">
                    <div className="flex items-center justify-between">
                      <span>Fecha:</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Hora:</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Duración:</span>
                      <span>{event.duration}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-brand-200">Speakers: </span>
                      <span>{event.speakers}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-white text-brand-600 px-4 py-2 rounded-lg font-semibold hover:bg-brand-50 transition-colors">
                    Registrarse Gratis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-brand-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Manténте al Día con los Últimos Insights
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Recibe semanalmente en tu inbox artículos exclusivos, casos de estudio 
              y actualizaciones sobre regulación de IA en Latam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;