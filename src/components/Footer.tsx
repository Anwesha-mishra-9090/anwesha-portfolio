
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-[#8c52ff]/30 bg-[#0a0a20]/80 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <span className="text-xl font-bold neon-text-blue">
            <span className="text-neon-pink">{'<'}</span>/
            <span className="text-white">Anwesha</span>
            <span className="text-neon-purple">Mishra</span>
            <span className="text-neon-pink">{'>'}</span>
          </span>
          <p className="text-gray-400 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-pink transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mishra.anwesha143@gmail.com" className="text-gray-400 hover:text-neon-purple transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">Phone: 9827623522</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
