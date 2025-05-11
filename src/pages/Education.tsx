
import React from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar />
      
      <main className="pt-24 min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">My </span>
            <span className="text-neon-blue">Education</span>
          </h1>
          
          <p className="text-xl text-center text-gray-300 mb-12">
            My academic journey and qualifications
          </p>
          
          <div className="space-y-16">
            {/* BCA */}
            <div className="galaxy-card relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-neon-pink/10 blur-[50px]"></div>
              
              <div className="flex items-start gap-6">
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-[#1a103d] rounded-full border border-neon-pink flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-neon-pink" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neon-pink mb-2 md:mb-0">Bachelor of Computer Applications (BCA)</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-[#1a103d] border border-neon-pink/30 rounded-full text-sm text-neon-pink">
                      <Calendar className="w-4 h-4 mr-2" />
                      2023 - 2026
                    </div>
                  </div>
                  
                  <p className="text-xl font-semibold mb-2">CGPA: 9.+</p>
                  
                  <p className="text-lg mb-4">
                    Pursuing Bachelor's degree in Computer Applications, focusing on software development, web technologies, database management, and data structures.
                  </p>
                  
                  <p className="text-lg">
                    Maintaining an excellent academic record with a CGPA above 9.0 while working on multiple personal projects and building a strong portfolio.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 11th & 12th Grade */}
            <div className="galaxy-card relative overflow-hidden">
              <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-neon-blue/10 blur-[50px]"></div>
              
              <div className="flex items-start gap-6">
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-[#1a103d] rounded-full border border-neon-blue flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-neon-blue" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neon-blue mb-2 md:mb-0">Kalinga Bharati Residential College, Odisha</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-[#1a103d] border border-neon-blue/30 rounded-full text-sm text-neon-blue">
                      <Calendar className="w-4 h-4 mr-2" />
                      2021 - 2023
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <span className="text-xl font-semibold">11th & 12th Grade</span>
                    <span className="mx-2">|</span>
                    <span className="text-lg">Grade: B+</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Odisha, India</span>
                  </div>
                  
                  <p className="text-lg">
                    Focused on higher secondary education with a specialization in computer science and mathematics. Gained knowledge in programming basics and logical reasoning. Built discipline and teamwork skills while staying in a residential academic environment.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 10th Grade */}
            <div className="galaxy-card relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-neon-purple/10 blur-[50px]"></div>
              
              <div className="flex items-start gap-6">
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-[#1a103d] rounded-full border border-neon-purple flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-neon-purple" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neon-purple mb-2 md:mb-0">Sara Sawati Sisu Vidya Mandir, Odisha</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-[#1a103d] border border-neon-purple/30 rounded-full text-sm text-neon-purple">
                      <Calendar className="w-4 h-4 mr-2" />
                      Completed Schooling
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <span className="text-xl font-semibold">10th Grade</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Odisha, India</span>
                  </div>
                  
                  <p className="text-lg">
                    Studied foundational subjects and built a strong base in mathematics, science, and language arts. Developed early interest in technology and logical thinking during school projects and activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Education;
