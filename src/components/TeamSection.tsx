import React from 'react';
import { Award, Linkedin, Mail, MapPin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Eduardo Koffmann",
      role: "Director de Consultoría",
      specialization: "M.Sc Ing Civil Industrial UC. Experto en APP e IA aplicada, relación con clientes",
      experience: "+15 años liderando proyectos de transformación digital",
      certifications: ["PMP®", "CP3P®, IA Development MIT","APMG: CP3P®","MIT: IA Aplicada a la Transformación Digital","Daxus: Master IA"],
      description: "Lidera el proceso consultivo y la relación estratégica con clientes. Experto en definir el alcance y asegurar el cumplimiento de la propuesta de valor.",
      photo: "/images/team/c4238c16-8094-4108-9c26-75964a6b0a98.png",
      email: "ekoffmann@expertpro.cl"
    },
    {
      name: " Milena Koscica",
      role: "Gestora de Clientes y Administración",
      specialization: "M.Sc. Ing. Comercial. Master UAI. Coordinación operativa y gestión de proyectos",
      experience: "+15 años en gestión de proyectos complejos",
      certifications: ["PMP®", "Agile Certified", "Scrum Master","UAI: People Management"],
      description: "Project Manager que coordina el equipo interno y gestiona la comunicación diaria con el cliente, asegurando que los entregables se cumplan en tiempo y forma.",
      photo: "/images/team/086e00d5-f5d6-4a8f-9ca4-f54e25460f10.png",
      email: "mkoscica@expertpro.cl"
    },
    {
      name: "Hamlet Muñoz",
      role: "Experto Senior en Big Data",
      specialization: "Matemático UC. Diseño tecnológico y arquitectura de datos",
      experience: "+15 años en arquitectura de datos empresariales",
      certifications: ["HarvardX: Data Science","UC: Data Science","AWS: IAM","Yonsei: TCPIP"],
      description: "Diseña la arquitectura técnica del piloto de IA, define los flujos de datos (ETL) y supervisa la correcta implementación técnica.",
      photo: "/images/team/a46b0bd0-8242-4545-bd4e-434a7b629fdb.png",
      email: "hmunoz@expertpro.cl"
    },
    {
      name: "José Gleiser",
      role: "Transformación y Automatización de Procesos",
      specialization: "M.Sc. UC en IT. Mentoría técnica y arquitectura de soluciones",
      experience: "+20 años en big data (ex Scotiabank)",
      certifications: ["Blue Prism: Certified Developer","BCI: Bank Risk sps","Scrum FPC"],
      description: "Asesor en desafíos técnicos complejos, busca diseñar y entregar soluciones que resuelvan el problema de negocio con escalabilidad y robustez. Estuvo a cargo de la gobernanza y estrategia de implementación de automatización en Scotiabank International Banking",
      photo: "/images/team/2f10b86b-723d-4d1d-84a7-d3e72724fcbe.png",
      email: "jgleiser@expertpro.cl"
    },
    {
      name: "Carlos Flores (Blacklist)",
      role: "Líder de Ciberseguridad y Compliance",
      specialization: "Ing. Informático IPC. - Seguridad de la información y cumplimiento normativo",
      experience: "+18 años en ciberseguridad corporativa",
      certifications: ["CEH", "eJPT", "ISO 27001 Lead Auditor", "LCSPC"],
      description: "Realiza análisis de riesgos de seguridad y privacidad, define controles de seguridad basados en ISO 27001 y asegura el cumplimiento normativo.",
      photo: "/images/team/da594a3d-b5dd-4788-a727-13e0752ede92.png",
      email: "carlos.flores@blacklist-security.com"
    },
    {
      name: "Carlos Becar",
      role: "Ingeniero de Integración",
      specialization: "Ing. Informático DUOC Integración ERPs y automatización",
      experience: "+10 años integrando sistemas empresariales",
      certifications: ["ZAPcademy: SAP HANA, SAP Fiori models, BTP No Code Low Code","Logali: SAP BTP Backend Developer, SAP integration Suite"],
      description: "Lidera la integración del piloto de IA con los sistemas existentes del cliente (ERPs, CRMs), asegurando un flujo de datos bidireccional y eficiente.",
      photo: "/images/team/ca491aa2-f179-4232-872c-34d96cd523e8.png",
      email: "cbecar@expertpro.cl"
    },
    {
      name: "Cristóbal López",
      role: "Ingeniero de IA y Automatización",
      specialization: "Ing. Civil USACH. Automatización y robotización",
      experience: "+8 años desarrollando soluciones de Machine Learning",
      certifications: ["PUC: Automática e informática industrial","Platzi: CI/CD Git GitHub","Daxus: Python, Master IA"],
      description: "Desarrolla el modelo de Machine Learning, implementa los algoritmos de IA y automatiza los procesos de negocio definidos en el alcance del proyecto.",
      photo: "/images/team/99ee97b5-9821-4c15-9984-223c3bfcd3b3.png",
      email: "clopez@expertpro.cl"
    }
  ];

  const partnerships = [
    {
      name: "Blacklist Security",
      description: "Partner estratégico especializado en ciberseguridad y ethical hacking",
      focus: "Ciberseguridad y Compliance"
    }
  ];

  return (
    <section id="equipo" className="section-padding bg-slate-50">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Nuestro Equipo de Expertos Senior
          </h2>
          <p className="text-xl text-slate-600">
            Un equipo multidisciplinario de profesionales certificados con experiencia comprobada 
            en grandes empresas y proyectos de transformación digital en Latam.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-brand-600 font-semibold">{member.role}</p>
                    <p className="text-sm text-slate-600">{member.specialization}</p>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed">{member.description}</p>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-slate-600">
                      <strong>Experiencia:</strong> {member.experience}
                    </div>
                    
                    {/* Certifications */}
                    <div>
                      <div className="text-sm font-medium text-slate-700 mb-2">Certificaciones:</div>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, certIndex) => (
                          <span 
                            key={certIndex}
                            className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium flex items-center"
                          >
                            <Award className="w-3 h-3 mr-1" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact */}
                    <div className="pt-2">
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-2 text-brand-600 hover:text-brand-800 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{member.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnerships */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Partners Estratégicos
          </h3>
          
          <div className="space-y-4">
            {partnerships.map((partner, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">BL</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{partner.name}</h4>
                  <p className="text-slate-600 text-sm mb-2">{partner.description}</p>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">
                    {partner.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-600 mb-2">7</div>
            <div className="text-slate-600">Expertos Senior</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-600 mb-2">100+</div>
            <div className="text-slate-600">Años Experiencia Combinada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-600 mb-2">15+</div>
            <div className="text-slate-600">Certificaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-600 mb-2">5</div>
            <div className="text-slate-600">Países Latam</div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-50 to-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Quieres conocer más sobre nuestro equipo?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Agenda una sesión donde nuestros expertos te contarán cómo pueden ayudar 
              específicamente a tu organización.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Conocer al Equipo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;