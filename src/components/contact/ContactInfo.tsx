
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="galaxy-card">
      <h2 className="text-2xl font-bold mb-6 text-neon-blue">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue">
            <Mail className="w-5 h-5 text-neon-blue" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <a href="mailto:mishra.anwesha143@gmail.com" className="text-gray-300 hover:text-neon-blue transition-colors">
              mishra.anwesha143@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-pink">
            <Phone className="w-5 h-5 text-neon-pink" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <a href="tel:+919827623522" className="text-gray-300 hover:text-neon-pink transition-colors">
              +91 98276 23522
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-purple">
            <Github className="w-5 h-5 text-neon-purple" />
          </div>
          <div>
            <h3 className="text-lg font-medium">GitHub</h3>
            <a href="https://github.com/anweshamishragithub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">
              @anweshamishragithub
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue">
            <Linkedin className="w-5 h-5 text-neon-blue" />
          </div>
          <div>
            <h3 className="text-lg font-medium">LinkedIn</h3>
            <a href="https://linkedin.com/in/anweshamishralinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-blue transition-colors">
              Anwesha Mishra
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
