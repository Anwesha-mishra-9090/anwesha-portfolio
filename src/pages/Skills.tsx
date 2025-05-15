import React, { useState } from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Database, Globe, Server, Layout, Terminal } from 'lucide-react';
import SkillBar from '../components/skills/SkillBar';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    experience: string;
  }[];
}

const Skills: React.FC = () => {
  const languages = [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 }
  ];
  
  const frameworks = [
    { name: "Flask", level: 85 },
    { name: "Pandas", level: 80 },
    { name: "NumPy", level: 75 },
    { name: "PostgreSQL", level: 85 },
    { name: "API Development", level: 80 }
  ];
  
  const otherSkills = [
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "Backend Development", level: 80 },
    { name: "Data Engineering", level: 75 },
    { name: "Problem Solving", level: 90 }
  ];
  
  const learning = [
    { name: "Machine Learning", level: 60 },
    { name: "Open-Source Contribution", level: 65 },
    { name: "DevOps", level: 50 },
    { name: "Cloud Services", level: 55 },
    { name: "React", level: 45 },
    { name: "NextJS", level: 40 }
  ];
  
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar activeSection="skills" />
      
      <main className="pt-24 min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-white">My </span>
            <span className="text-neon-blue">Skills</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="galaxy-card">
              <h2 className="text-2xl font-bold mb-6 neon-text-blue">Languages</h2>
              
              <div className="space-y-6">
                {languages.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#1a103d] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="galaxy-card">
              <h2 className="text-2xl font-bold mb-6 neon-text-purple">Frameworks & Tools</h2>
              
              <div className="space-y-6">
                {frameworks.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#1a103d] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-pink rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="galaxy-card">
              <h2 className="text-2xl font-bold mb-6 neon-text-pink">Other Skills</h2>
              
              <div className="space-y-6">
                {otherSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#1a103d] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-pink to-neon-blue rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="galaxy-card">
              <h2 className="text-2xl font-bold mb-6 text-neon-green">Learning</h2>
              
              <div className="space-y-6">
                {learning.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#1a103d] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-green to-neon-blue rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 galaxy-card">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              <span className="text-neon-blue">Skill</span> Tags
            </h2>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">DSA</span>
              <span className="skill-tag">API Development</span>
              <span className="skill-tag">Data Engineering</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Backend Development</span>
              <span className="skill-tag">Cloud Services</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Skills;
