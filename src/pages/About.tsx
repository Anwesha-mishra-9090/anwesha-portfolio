
import React from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Star, Github, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar activeSection="about" />
      
      <main className="pt-24 min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-white">About </span>
            <span className="text-neon-blue">Me</span>
          </h1>
          
          <div className="galaxy-card mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_20px_rgba(0,255,255,0.7)]">
                    <img
                      src="/lovable-uploads/e501e10b-d3d4-4937-8f6a-4a618561826e.png"
                      alt="Anwesha Mishra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#0a0a20] p-3 rounded-full border-2 border-neon-pink shadow-[0_0_10px_rgba(255,0,255,0.7)]">
                    <Code size={24} className="text-neon-pink" />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-neon-purple">Who am I?</h2>
                <p className="text-lg mb-4">
                  Hi, I'm Anwesha Mishra, an aspiring Backend Developer and Software Developer with a focus on Python, data engineering, and backend technologies.
                </p>
                <p className="text-lg mb-4">
                  I'm passionate about coding, learning new technologies, and solving complex problems that have real-world impact.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="neon-button flex items-center gap-2">
                    <Github size={18} /> GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="neon-button-pink flex items-center gap-2">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="galaxy-card mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neon-blue">My Expertise</h2>
            
            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-[#8c52ff]/30 bg-[#1a103d]/50">
                <h3 className="text-xl font-semibold mb-2 text-neon-pink">BCA Student</h3>
                <p>Currently pursuing my Bachelor's degree in Computer Applications, focusing on building a strong foundation in computer science principles and software development.</p>
              </div>
              
              <div className="p-4 rounded-lg border border-[#8c52ff]/30 bg-[#1a103d]/50">
                <h3 className="text-xl font-semibold mb-2 text-neon-blue">Python Developer Intern</h3>
                <p>Developing applications and scripts using Python, focusing on efficient code design, automation, and problem-solving with Python's powerful libraries and frameworks.</p>
              </div>
              
              <div className="p-4 rounded-lg border border-[#8c52ff]/30 bg-[#1a103d]/50">
                <h3 className="text-xl font-semibold mb-2 text-neon-purple">Software Engineer Intern</h3>
                <p>Contributing to software development life cycles, collaborating with teams to design, develop, and deploy applications that meet business requirements.</p>
              </div>
              
              <div className="p-4 rounded-lg border border-[#8c52ff]/30 bg-[#1a103d]/50">
                <h3 className="text-xl font-semibold mb-2 text-neon-pink">Data Engineer Intern</h3>
                <p>Working with data pipelines, ETL processes, and data warehousing to enable efficient data analysis and insights generation for business decisions.</p>
              </div>
              
              <div className="p-4 rounded-lg border border-[#8c52ff]/30 bg-[#1a103d]/50">
                <h3 className="text-xl font-semibold mb-2 text-neon-blue">Backend Developer Intern</h3>
                <p>Designing and developing server-side logic, APIs, and databases to power web applications and ensure smooth client-server communication.</p>
              </div>
            </div>
          </div>
          
          <div className="galaxy-card">
            <h2 className="text-2xl font-bold mb-6 text-neon-purple">Current Focus</h2>
            <p className="text-lg mb-4">
              I'm currently enhancing my skills in backend development, exploring machine learning concepts, and contributing to open-source projects that align with my interests.
            </p>
            <p className="text-lg">
              My goal is to continue building practical experience through personal projects and internships, while deepening my understanding of software architecture, data engineering, and modern development practices.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-neon-blue">
                <Star size={16} />
                <span>Python Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 text-neon-pink">
                <Star size={16} />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 text-neon-purple">
                <Star size={16} />
                <span>Continuous Learner</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
