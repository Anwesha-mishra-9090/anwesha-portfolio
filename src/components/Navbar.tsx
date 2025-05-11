
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Listen for scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a20]/80 backdrop-blur-md border-b border-[#8c52ff]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className="text-xl font-bold neon-text-blue">
                <span className="text-neon-pink">{'<'}</span>/
                <span className="text-white">Anwesha</span>
                <span className="text-neon-purple">Mishra</span>
                <span className="text-neon-pink">{'>'}</span>
              </span>
            </a>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#home" isActive={activeSection === 'home'}>Home</NavLink>
              <NavLink href="#about" isActive={activeSection === 'about'}>About</NavLink>
              <NavLink href="#education" isActive={activeSection === 'education'}>Education</NavLink>
              <NavLink href="#skills" isActive={activeSection === 'skills'}>Skills</NavLink>
              <NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
              <NavLink href="#contact" isActive={activeSection === 'contact'}>Contact</NavLink>
              <a 
                href="/Anwesha_Mishra_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neon-button"
              >
                Resume
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-neon-pink" />
              ) : (
                <Menu className="h-6 w-6 text-neon-blue" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a20]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#education" onClick={toggleMenu}>Education</MobileNavLink>
            <MobileNavLink href="#skills" onClick={toggleMenu}>Skills</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <div className="py-2 px-3">
              <a 
                href="/Anwesha_Mishra_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neon-button w-full block text-center"
                onClick={toggleMenu}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
  return (
    <a
      href={href}
      className={`text-gray-300 hover:text-neon-blue hover:scale-105 px-3 py-2 rounded-md text-sm font-medium transition-all relative group ${isActive ? 'text-neon-blue' : ''}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-[2px] bg-neon-blue transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
