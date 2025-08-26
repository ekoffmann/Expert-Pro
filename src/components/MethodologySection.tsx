import React, { useState } from 'react';
import { Search, Lightbulb, Code, TestTube, Rocket, CheckCircle, Clock, Users, FileText } from 'lucide-react';

const MethodologySection = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const methodology = [
    {
      week: 1,
      title: "Discovery & Setup",
      icon: Search,
      description: "Kick-off con el cliente, validación final de KPIs y setup de entornos de trabajo.",
      activities: [
        "Reunión de kick-off con stakeholders clave",
        "Definición y validación de KPIs y OKRs",
        "Análisis de riesgos y matriz de seguridad",
        "Setup de entornos de desarrollo y producción",
        "Definición del backlog inicial del proyecto"
      ],
      deliverables: ["Acta de Kick-Off", "Plan de Proyecto", "Matriz de Riesgos Inicial"],
      roles: ["Eduardo Koffmann", "Milena Koscika", "Hamlet Muñoz", "Carlos Flores"]
    },
    {
      week: 2,
      title: "Data & Model Foundation I",
      icon: Lightbulb,
      description: "Ingesta de datos, análisis exploratorio y entrenamiento del primer modelo base.",
      activities: [
        "Ingesta y validación de los primeros datasets",
        "Análisis exploratorio de datos (EDA)",
        "Limpieza y preprocesamiento de datos",
        "Entrenamiento del modelo base v0.1",
        "Evaluación inicial de performance"
      ],
      deliverables: ["Informe de Calidad de Datos", "Modelo v0.1", "Reporte EDA"],
      roles: ["Hamlet Muñoz", "José Gleiser", "Cristóbal López"]
    },
    {
      week: 3,
      title: "Data & Model Foundation II",
      icon: Code,
      description: "Refinamiento del modelo, definición del pipeline de datos y optimización de algoritmos.",
      activities: [
        "Refinamiento y re-entrenamiento del modelo",
        "Optimización de hiperparámetros",
        "Diseño del pipeline de datos automatizado",
        "Implementación de validación cruzada",
        "Pruebas de robustez del modelo"
      ],
      deliverables: ["Demo del Modelo v0.2", "Pipeline de Datos", "Resultados Preliminares"],
      roles: ["Cristóbal López", "José Gleiser", "Hamlet Muñoz"]
    },
    {
      week: 4,
      title: "Prototyping & Integration I",
      icon: TestTube,
      description: "Desarrollo de la interfaz de usuario y pruebas iniciales de integración con sistemas del cliente.",
      activities: [
        "Desarrollo del prototipo de interfaz",
        "Integración inicial con APIs del cliente",
        "Pruebas de conectividad con sistemas existentes",
        "Validación de usabilidad con usuarios finales",
        "Implementación de controles de seguridad"
      ],
      deliverables: ["Prototipo Funcional", "Frontend Básico", "Reporte de Integración"],
      roles: ["Cristóbal López", "Carlos Bechan", "Milena Koscika"]
    },
    {
      week: 5,
      title: "Prototyping & Integration II",
      icon: CheckCircle,
      description: "Conexión del modelo con el prototipo, pruebas end-to-end y validación de seguridad.",
      activities: [
        "Integración completa modelo-frontend",
        "Pruebas end-to-end del sistema completo",
        "Auditóría de seguridad y vulnerabilidades",
        "Optimización de performance",
        "Documentación técnica y de usuario"
      ],
      deliverables: ["Sistema Integrado", "Informe de Pruebas", "Auditóría de Seguridad"],
      roles: ["Carlos Bechan", "Cristóbal López", "Carlos Flores"]
    },
    {
      week: 6,
      title: "Delivery & Handover",
      icon: Rocket,
      description: "Presentación final del piloto, entrega de documentación y transferencia de capacidades.",
      activities: [
        "Presentación final del piloto al cliente",
        "Entrega de toda la documentación",
        "Sesión de capacitación al equipo del cliente",
        "Transferencia de conocimiento técnico",
        "Definición de siguientes pasos"
      ],
      deliverables: ["Piloto Funcional", "Manual de Usuario", "Sesión de Capacitación", "Informe Final de Resultados", "Propuesta de Escalamiento"],
      roles: ["Todo el equipo", "Eduardo Koffmann", "Milena Koscika"]
    }
  ];

  return (
    <section id="metodologia" className="section-padding bg-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Metodología SWAT45: De la Idea al Piloto Funcional
          </h2>
          <p className="text-xl text-slate-600">
            Nuestra metodología probada combina frameworks ágiles con herramientas de IA 
            para entregar resultados tangibles en exactamente 45 días.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {methodology.map((week, index) => {
            const IconComponent = week.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveWeek(index)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeWeek === index
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="hidden sm:inline">Semana {week.week}</span>
                <span className="sm:hidden">S{week.week}</span>
              </button>
            );
          })}
        </div>

        {/* Active Week Details */}
        <div className="bg-gradient-to-br from-slate-50 to-brand-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Week Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  {React.createElement(methodology[activeWeek].icon, {
                    className: "w-12 h-12 text-brand-600"
                  })}
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      Semana {methodology[activeWeek].week}
                    </h3>
                    <h4 className="text-xl font-semibold text-brand-600">
                      {methodology[activeWeek].title}
                    </h4>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {methodology[activeWeek].description}
                </p>
              </div>

              {/* Activities */}
              <div>
                <h5 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Actividades Clave:
                </h5>
                <ul className="space-y-2">
                  {methodology[activeWeek].activities.map((activity, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-slate-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Deliverables */}
              <div>
                <h5 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-brand-600 mr-2" />
                  Entregables:
                </h5>
                <div className="space-y-2">
                  {methodology[activeWeek].deliverables.map((deliverable, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 border border-brand-200">
                      <span className="text-slate-700 font-medium">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Roles */}
              <div>
                <h5 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  Equipo Responsable:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {methodology[activeWeek].roles.map((role, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Progreso del Proyecto</span>
                  <span className="text-sm font-medium text-brand-600">
                    {Math.round(((activeWeek + 1) / 6) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-brand-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((activeWeek + 1) / 6) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Día {(activeWeek + 1) * 7.5} de 45
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8 text-brand-600" />
            </div>
            <h4 className="text-xl font-semibold text-slate-900">Entrega Garantizada</h4>
            <p className="text-slate-600">
              Metodología probada que garantiza la entrega del piloto funcional en exactamente 45 días, 
              sin excepciones.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-slate-900">Equipo Senior</h4>
            <p className="text-slate-600">
              Cada semana cuenta con la participación de expertos senior especializados, 
              asegurando la máxima calidad técnica.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-semibold text-slate-900">Transparencia Total</h4>
            <p className="text-slate-600">
              Reportes semanales detallados y demostraciones en vivo para que veas el progreso 
              en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;