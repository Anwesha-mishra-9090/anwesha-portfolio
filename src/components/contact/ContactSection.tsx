
import React from 'react';
import ContactForm from './ContactForm';
import SectionHeading from '../SectionHeading';
import ContactInfo from './ContactInfo';

const ContactSection: React.FC = () => {
  return (
    <section id="message-me" className="py-20 px-4 bg-[#0a0a30]/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="Send Me a" accentText="Message" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
