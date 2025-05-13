
import React from 'react';
import ContactForm from './ContactForm';
import SectionHeading from '../SectionHeading';

const ContactSection: React.FC = () => {
  return (
    <section id="message-me" className="py-20 px-4 bg-[#0a0a30]/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="Send Me a" accentText="Message" />
        
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
