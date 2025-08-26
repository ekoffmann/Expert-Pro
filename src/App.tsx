import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import ServicesSection from './components/ServicesSection';
import MethodologySection from './components/MethodologySection';
import TeamSection from './components/TeamSection';
import CaseStudySection from './components/CaseStudySection';
import ComplianceSection from './components/ComplianceSection';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ServicesSection />
        <MethodologySection />
        <TeamSection />
        <CaseStudySection />
        <ComplianceSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
