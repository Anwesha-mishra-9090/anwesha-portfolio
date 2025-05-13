
import React from 'react';
import SectionHeading from '../SectionHeading';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="About" accentText="Me" />
        
        <div className="galaxy-card">
          <p className="text-lg leading-relaxed">
            Hi 👋, I'm Anwesha Mishra, an aspiring Backend Developer and Software Developer with a focus on Python, data engineering, and backend technologies. I'm passionate about coding, learning new technologies, and solving complex problems.
          </p>
          <p className="text-lg leading-relaxed mt-4">I'm currently focusing on deepening my understanding of backend development, machine learning, and contributing to open-source projects. I'm open to collaboration on data engineering and backend solutions.  💌 Want to get in touch with me? Just click 👉 contact me —  where you can easily type your message and send it my way! ✨ I'll make sure to read and reply to every message you send. Thank you for reaching out! 🙏😊</p>
          
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
  );
};

export default AboutSection;
