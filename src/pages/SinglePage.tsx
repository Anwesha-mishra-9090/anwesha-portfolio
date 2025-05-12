import React from 'react';
import EnhancedSpaceBackground from '../components/EnhancedSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import SectionHeading from '../components/SectionHeading';
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
              <p className="text-lg leading-relaxed mt-4">I'm currently focusing on deepening my understanding of backend development, machine learning, and contributing to open-source projects. I'm open to collaboration on data engineering and backend solutions. If you want to contact me through message you can click on this  "https://anwesha-portfolio.lovable.app/contact "  to message me and  it will pop up a new window for you . In that you can add your message and send me , i will reply to  your every message . Thank you !</p>
              
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
                
                <div className="border-l-4 border-neon-purple pl-6 py-2">
                  <h3 className="text-2xl font-bold text-white">N.C Autonomous college , Jajpur town , Odisha


Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-neon-purple">(2023 - 2026) | CGPA: 9.+</p>
                  <p className="mt-2">Pursuing Bachelor's degree in Computer Applications, focusing on software development, web technologies, database management, and data structures. Maintaining an excellent academic record with a CGPA above 9.0 while working on multiple personal projects and building a strong portfolio.</p>
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
        
        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto text-center">
            <SectionHeading text="Get in" accentText="Touch" />
            
            <div className="galaxy-card max-w-2xl mx-auto">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="bg-[#1a103d] p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:mishra.anwesha143@gmail.com" className="text-neon-blue hover:underline">mishra.anwesha143@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="bg-[#1a103d] p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:9827623522" className="text-neon-pink hover:underline">9827623522</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="bg-[#1a103d] p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-400">Location</p>
                    <p className="text-neon-purple">Odisha, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="neon-button">
                  GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="neon-button-pink">
                  LinkedIn
                </a>
                <a href="https://hackerrank.com/" target="_blank" rel="noopener noreferrer" className="neon-button-purple">
                  HackerRank
                </a>
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="neon-button">
                  LeetCode
                </a>
              </div>
            </div>
          </div>
        </section>
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