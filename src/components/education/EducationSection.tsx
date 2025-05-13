
import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const EducationSection: React.FC = () => {
  return (
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
  );
};

export default EducationSection;
