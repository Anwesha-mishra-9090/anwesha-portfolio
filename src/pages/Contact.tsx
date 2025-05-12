
import React from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar />
      
      <main className="pt-24 min-h-screen px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
