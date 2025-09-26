import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle, Phone, Globe } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    industry: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    'Transporte',
    'Salud Privada',
    'Agroindustria',
    'Logística',
    'Energía & Utilities',
    'Servicios Financieros',
    'Retail',
    'Manufactura',
    'Otro'
  ];

  const budgetRanges = [
    'Hasta $10K USD',
    '$10K - $50K USD',
    '$50K - $100K USD',
    '$100K - $500K USD',
    'Más de $500K USD',
    'Aún no definido'
  ];

  const timelines = [
    'Inmediato (1-2 semanas)',
    'Corto plazo (1-3 meses)',
    'Mediano plazo (3-6 meses)',
    'Largo plazo (6+ meses)',
    'Exploratorio'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="section-padding bg-slate-50">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                ¡Gracias por tu interés!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Hemos recibido tu solicitud de diagnóstico gratuito. Nuestro equipo de expertos 
                se pondrá en contacto contigo en las próximas 24 horas para agendar una sesión personalizada.
              </p>
              <div className="space-y-4 text-left bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900">Próximos pasos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-slate-600">Te contactaremos en las próximas 24 horas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-slate-600">Agendaremos una sesión de diagnóstico de 30 minutos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-slate-600">Te enviaremos un reporte personalizado con recomendaciones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="section-padding bg-slate-50">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Solicita tu Diagnóstico Gratuito de IA
          </h2>
          <p className="text-xl text-slate-600">
            Agenda una sesión de 30 minutos donde analizaremos tu caso específico 
            y te mostraremos cómo la IA puede generar valor en tu organización.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                    Información Personal
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
                        Cargo
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Gerente General, CTO, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                    Información de la Empresa
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
                        Industria *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      >
                        <option value="">Selecciona tu industria</option>
                        {industries.map((industry, index) => (
                          <option key={index} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                    Información del Proyecto
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        Presupuesto Estimado
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un rango</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      >
                        <option value="">Selecciona timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Cuéntanos sobre tu desafío *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Describe brevemente el desafío que quieres resolver con IA, qué procesos podrían optimizarse, qué datos tienes disponibles, etc."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Diagnóstico Gratuito
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 mt-2 text-center">
                    Al enviar este formulario, aceptas que ExpertPro se ponga en contacto contigo 
                    para agendar tu sesión de diagnóstico gratuita.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <a href="mailto:ekoffmann@expertpro.cl" className="text-brand-600 hover:text-brand-800">
                      ekoffmann@expertpro.cl
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Sitio Web</div>
                    <a href="https://www.expertpro.cl" className="text-brand-600 hover:text-brand-800">
                      www.expertpro.cl
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Ubicación</div>
                    <div className="text-slate-600">Santiago, Chile</div>
                    <div className="text-slate-600">Cobertura en toda Latam</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Horario de Atención</div>
                    <div className="text-slate-600">Lunes a Viernes</div>
                    <div className="text-slate-600">9:00 - 18:00 CLT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-green-50 to-brand-50 rounded-2xl p-6 border border-green-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Respuesta Garantizada
                </h4>
                <p className="text-slate-600 text-sm">
                  Nos pondremos en contacto contigo en las próximas 
                  <strong className="text-green-700"> 24 horas hábiles</strong> 
                  para agendar tu sesión gratuita.
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-brand-50 to-slate-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-4">
                Qué incluye tu diagnóstico gratuito:
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Análisis de oportunidades de IA en tu empresa</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Evaluación de readiness tecnológico</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Roadmap preliminar de implementación</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Estimación de ROI potencial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;