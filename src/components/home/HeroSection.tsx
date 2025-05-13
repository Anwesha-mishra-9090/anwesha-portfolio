
import React from 'react';
import { ArrowRight, Code } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block animate-glow text-neon-blue mt-2">Anwesha Mishra</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            I'm currently seeking intern positions as a <span className="text-neon-pink">Python Developer</span>, <span className="text-neon-purple">Software Engineer</span>, <span className="text-neon-blue">Data Engineer</span>, or <span className="text-neon-pink">Backend Developer</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="neon-button flex items-center justify-center gap-2">
              View My Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="neon-button-pink flex items-center justify-center gap-2">
              Contact Me <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_20px_rgba(0,255,255,0.7)]">
              <img src="/lovable-uploads/e501e10b-d3d4-4937-8f6a-4a618561826e.png" alt="Anwesha Mishra" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0a0a20] p-3 rounded-full border-2 border-neon-pink shadow-[0_0_10px_rgba(255,0,255,0.7)]">
              <Code size={32} className="text-neon-pink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
