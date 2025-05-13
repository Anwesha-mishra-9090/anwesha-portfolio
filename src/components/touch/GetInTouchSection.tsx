
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const GetInTouchSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0a30]/50">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeading text="Get in" accentText="Touch" />
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out through any of the platforms below or send me a direct message!
        </p>
        
        <div className="flex justify-center">
          <a href="#message-me" className="neon-button-pink flex items-center justify-center gap-2 px-8 py-3 text-lg">
            Send Message <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
