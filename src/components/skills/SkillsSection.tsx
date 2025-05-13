
import React from 'react';
import SectionHeading from '../SectionHeading';
import SkillBar from './SkillBar';

const SkillsSection: React.FC = () => {
  return (
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
  );
};

export default SkillsSection;
