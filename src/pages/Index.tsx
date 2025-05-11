
import React from 'react';
import { Link } from 'react-router-dom';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar />
      
      <main className="pt-20 min-h-screen">
        <section className="relative min-h-[80vh] flex items-center justify-center px-4">
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
                <Link to="/projects" className="neon-button flex items-center justify-center gap-2">
                  View My Projects <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="neon-button-pink flex items-center justify-center gap-2">
                  Contact Me <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_20px_rgba(0,255,255,0.7)]">
                  <img
                    src="/lovable-uploads/e501e10b-d3d4-4937-8f6a-4a618561826e.png"
                    alt="Anwesha Mishra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#0a0a20] p-3 rounded-full border-2 border-neon-pink shadow-[0_0_10px_rgba(255,0,255,0.7)]">
                  <Code size={32} className="text-neon-pink" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-white">My </span>
              <span className="text-neon-blue">Background</span>
            </h2>
            
            <div className="galaxy-card">
              <p className="text-lg leading-relaxed">
                With a strong foundation in Computer Science, I've dedicated myself to mastering backend development and data engineering. My journey has involved building numerous projects that showcase my technical abilities and problem-solving skills.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I'm passionate about coding, learning new technologies, and solving complex problems.
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/about" className="neon-button flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4 bg-[#0a0a30]/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="text-white">Learning </span>
              <span className="text-neon-purple">Goals</span>
            </h2>
            
            <div className="galaxy-card">
              <p className="text-lg leading-relaxed">
                I'm currently focusing on deepening my understanding of backend development, machine learning, and contributing to open-source projects. I'm open to collaboration on data engineering and backend solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">DSA</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              <span className="text-white">Get in </span>
              <span className="text-neon-pink animate-glow">Touch</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you!
            </p>
            
            <Link to="/contact" className="neon-button-purple inline-flex items-center gap-2">
              Contact Me <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
