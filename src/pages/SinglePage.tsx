
import React from 'react';
import EnhancedSpaceBackground from '../components/EnhancedSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/contact/ContactSection';

// Import refactored section components
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/about/AboutSection';
import EducationSection from '../components/education/EducationSection';
import SkillsSection from '../components/skills/SkillsSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import CertificatesSection from '../components/certificates/CertificatesSection';
import GetInTouchSection from '../components/touch/GetInTouchSection';

const SinglePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <EnhancedSpaceBackground />
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Education Section */}
        <EducationSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Certificates Section */}
        <CertificatesSection />
        
        {/* Get in Touch Section */}
        <GetInTouchSection />
        
        {/* Message Section - Always visible */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default SinglePage;
