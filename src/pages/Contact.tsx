
import React, { useState } from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar />
      
      <main className="pt-24 min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">Get in </span>
            <span className="text-neon-pink animate-glow">Touch</span>
          </h1>
          
          <p className="text-xl text-center text-gray-300 mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="galaxy-card">
              <h2 className="text-2xl font-bold mb-6 text-neon-blue">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
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
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-pink">
                    <Phone className="w-5 h-5 text-neon-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <a href="tel:9827623522" className="text-gray-300 hover:text-neon-pink transition-colors">
                      9827623522
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-purple">
                    <Github className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">GitHub</h3>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">
                      github.com/anweshamishragithub
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue">
                    <Linkedin className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">LinkedIn</h3>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-blue transition-colors">
                      linkedin.com/in/anweshamishralinkedin
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3">Other Links</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="neon-button">
                    LeetCode
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="neon-button-pink">
                    HackerRank
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="neon-button-purple">
                    GeeksforGeeks
                  </a>
                </div>
              </div>
            </div>
            
            <div className="galaxy-card">
              <h2 className="text-2xl font-bold mb-6 text-neon-pink">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent text-white"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full neon-button-pink flex items-center justify-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
