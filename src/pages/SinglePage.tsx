
import React, { useState, useEffect, useRef } from 'react';
import EnhancedSpaceBackground from '../components/EnhancedSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/contact/ContactSection';
import { toast } from "@/hooks/use-toast";
import { ArrowUp } from "lucide-react";

// Import refactored section components
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/about/AboutSection';
import EducationSection from '../components/education/EducationSection';
import SkillsSection from '../components/skills/SkillsSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import CertificatesSection from '../components/certificates/CertificatesSection';
import GetInTouchSection from '../components/touch/GetInTouchSection';

const SinglePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    certificates: useRef<HTMLDivElement>(null),
    touch: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  });
  
  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);
      
      // Determine which section is in view
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      Object.entries(sectionRefs.current).forEach(([key, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(key);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Welcome notification
  useEffect(() => {
    setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore my work and skills.",
        duration: 5000,
      });
    }, 2000);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <EnhancedSpaceBackground />
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div ref={sectionRefs.current.hero}>
          <HeroSection />
        </div>
        
        {/* About Section */}
        <div ref={sectionRefs.current.about}>
          <AboutSection />
        </div>
        
        {/* Education Section */}
        <div ref={sectionRefs.current.education}>
          <EducationSection />
        </div>
        
        {/* Skills Section */}
        <div ref={sectionRefs.current.skills}>
          <SkillsSection />
        </div>
        
        {/* Projects Section */}
        <div ref={sectionRefs.current.projects}>
          <ProjectsSection />
        </div>
        
        {/* Certificates Section */}
        <div ref={sectionRefs.current.certificates}>
          <CertificatesSection />
        </div>
        
        {/* Get in Touch Section */}
        <div ref={sectionRefs.current.touch}>
          <GetInTouchSection />
        </div>
        
        {/* Message Section - Always visible */}
        <div ref={sectionRefs.current.contact}>
          <ContactSection />
        </div>
      </main>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-neon-blue/20 border border-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.5)] z-50 transition-all duration-300 hover:bg-neon-blue/30 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-neon-blue w-5 h-5" />
      </button>
      
      <Footer />
    </div>
  );
};

export default SinglePage;
