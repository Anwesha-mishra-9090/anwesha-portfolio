import React from 'react';
import EnhancedSpaceBackground from '../components/EnhancedSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, ArrowRight, GraduationCap, Award } from 'lucide-react';
import { projectsData } from '../data/projects';
import { certificatesData } from '../data/certificates';
import SectionHeading from '../components/SectionHeading';
import CertificateCard from '../components/certificates/CertificateCard';
import ContactSection from '../components/contact/ContactSection';

const SinglePage: React.FC = () => {
  return <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <EnhancedSpaceBackground />
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
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
        
        {/* About Section */}
        <section id="about" className="py-20 px-4 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto">
            <SectionHeading text="About" accentText="Me" />
            
            <div className="galaxy-card">
              <p className="text-lg leading-relaxed">
                Hi 👋, I'm Anwesha Mishra, an aspiring Backend Developer and Software Developer with a focus on Python, data engineering, and backend technologies. I'm passionate about coding, learning new technologies, and solving complex problems.
              </p>
              <p className="text-lg leading-relaxed mt-4">I'm currently focusing on deepening my understanding of backend development, machine learning, and contributing to open-source projects. I'm open to collaboration on data engineering and backend solutions.  💌 Want to get in touch with me? Just click 👉 contact me —  where you can easily type your message and send it my way! ✨ I'll make sure to read and reply to every message you send. Thank you for reaching out! 🙏😊</p>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-neon-blue mb-4">My Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#1a103d] rounded-full text-white border border-neon-blue">BCA Student</span>
                  <span className="px-4 py-2 bg-[#1a103d] rounded-full text-white border border-neon-pink">Python Developer Intern</span>
                  <span className="px-4 py-2 bg-[#1a103d] rounded-full text-white border border-neon-purple">Software Engineer Intern</span>
                  <span className="px-4 py-2 bg-[#1a103d] rounded-full text-white border border-neon-blue">Data Engineer Intern</span>
                  <span className="px-4 py-2 bg-[#1a103d] rounded-full text-white border border-neon-pink">Backend Developer Intern</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-20 px-4 bg-[#0a0a30]/30 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto">
            <SectionHeading text="My" accentText="Education" />
            
            <div className="galaxy-card">
              <div className="space-y-8">
                <div className="border-l-4 border-neon-blue pl-6 py-2">
                  <h3 className="text-2xl font-bold text-white">Sara Sawati Sisu Vidya Mandir, Odisha</h3>
                  <p className="text-neon-blue">10th Grade | Completed Schooling</p>
                  <p className="text-gray-400 mt-2">(Years attended: up to 10th standard)</p>
                  <p className="mt-2">Studied foundational subjects and built a strong base in mathematics, science, and language arts. Developed early interest in technology and logical thinking during school projects and activities.</p>
                </div>
                
                <div className="border-l-4 border-neon-pink pl-6 py-2">
                  <h3 className="text-2xl font-bold text-white">Kalinga Bharati Residential College, Odisha</h3>
                  <p className="text-neon-pink">11th & 12th Grade (2021 - 2023) | Grade: B+</p>
                  <p className="mt-2">Focused on higher secondary education with a specialization in computer science and mathematics. Gained knowledge in programming basics and logical reasoning. Built discipline and teamwork skills while staying in a residential academic environment.</p>
                </div>
                
                <div className="border-l-4 border-neon-purple pl-6 py-2 relative">
                  <div className="absolute -left-10 top-0 bg-[#1a103d] p-2 rounded-full border border-neon-purple shadow-[0_0_10px_rgba(138,43,226,0.4)]">
                    <GraduationCap size={24} className="text-neon-purple" />
                  </div>
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-white">N.C Autonomous College</h3>
                    <p className="text-sm text-gray-300">Jajpur Town, Odisha</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#1a103d]/70 text-neon-purple px-3 py-1 rounded-full text-sm">Bachelor of Computer Applications (BCA)</span>
                    <span className="bg-[#1a103d]/70 text-white px-3 py-1 rounded-full text-sm">2023 - 2026</span>
                    <span className="bg-[#1a103d]/70 text-neon-blue px-3 py-1 rounded-full text-sm font-semibold">CGPA: 9.0+</span>
                  </div>
                  <div className="mt-3 bg-[#1a103d]/30 p-4 rounded-lg border-l-2 border-neon-purple">
                    <p className="text-gray-200">
                      Pursuing a Bachelor's degree in Computer Applications with a focus on:
                    </p>
                    <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-neon-purple">•</span>
                        <span>Software Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-neon-purple">•</span>
                        <span>Web Technologies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-neon-purple">•</span>
                        <span>Database Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-neon-purple">•</span>
                        <span>Data Structures & Algorithms</span>
                      </li>
                    </ul>
                    <p className="mt-3 text-gray-300">
                      Maintaining an excellent academic record with a CGPA above 9.0 while working on multiple personal projects and building a strong portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto">
            <SectionHeading text="My" accentText="Skills" />
            
            <div className="galaxy-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-neon-blue mb-6">Programming Languages</h3>
                  <div className="space-y-4">
                    <SkillBar name="Python" percentage={90} color="neon-blue" />
                    <SkillBar name="SQL" percentage={85} color="neon-pink" />
                    <SkillBar name="HTML/CSS" percentage={80} color="neon-purple" />
                    <SkillBar name="JavaScript" percentage={70} color="neon-blue" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-neon-pink mb-6">Frameworks & Tools</h3>
                  <div className="space-y-4">
                    <SkillBar name="Flask" percentage={85} color="neon-pink" />
                    <SkillBar name="Pandas" percentage={90} color="neon-blue" />
                    <SkillBar name="NumPy" percentage={85} color="neon-purple" />
                    <SkillBar name="PostgreSQL" percentage={80} color="neon-pink" />
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-neon-purple mb-6">Other Skills</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="skill-tag">DSA</span>
                  <span className="skill-tag">API Development</span>
                  <span className="skill-tag">Backend Architecture</span>
                  <span className="skill-tag">Data Analysis</span>
                  <span className="skill-tag">Problem Solving</span>
                  <span className="skill-tag">Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-[#0a0a30]/30 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <SectionHeading text="My" accentText="Projects" />
            
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} day={project.day} />)}
              </div>
            </div>
          </div>
        </section>
        
        {/* Certificates Section */}
        <section id="certificates" className="py-20 px-4 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <SectionHeading text="My" accentText="Certificates" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesData.map(certificate => <CertificateCard key={certificate.id} image={certificate.image} title={certificate.title} issuer={certificate.issuer} date={certificate.date} altText={certificate.altText} />)}
            </div>
          </div>
        </section>
        
        {/* Get in Touch Section */}
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
        
        {/* Message Section - Always visible */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>;
};

const SkillBar: React.FC<{
  name: string;
  percentage: number;
  color: string;
}> = ({
  name,
  percentage,
  color
}) => {
  return <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color === 'neon-blue' ? 'bg-neon-blue' : color === 'neon-pink' ? 'bg-neon-pink' : 'bg-neon-purple'}`} style={{
        width: `${percentage}%`
      }}></div>
      </div>
    </div>;
};

const ProjectCard: React.FC<{
  title: string;
  description: string;
  day: string;
}> = ({
  title,
  description,
  day
}) => {
  return <div className="galaxy-card hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-sm text-neon-blue">{day}</span>
      </div>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <a href="#" className="text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm flex items-center gap-1">
        View Project <ArrowRight size={14} />
      </a>
    </div>;
};

export default SinglePage;
