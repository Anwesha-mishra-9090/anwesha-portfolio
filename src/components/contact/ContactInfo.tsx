
import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#121212] rounded-lg p-6 shadow-lg shadow-[#00e1ff]/10">
        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-[#00e1ff] pl-4">Contact Information</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#00e1ff] mt-1" />
            <div>
              <h3 className="text-lg font-medium text-white">Email</h3>
              <a href="mailto:mishra.anwesha143@gmail.com" className="text-gray-300 hover:text-[#00e1ff] transition-colors">
                mishra.anwesha143@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-[#00e1ff] mt-1" />
            <div>
              <h3 className="text-lg font-medium text-white">Phone</h3>
              <a href="tel:+919123456789" className="text-gray-300 hover:text-[#00e1ff] transition-colors">
                +91 91234 56789
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Github className="w-6 h-6 text-[#ff00ff] mt-1" />
            <div>
              <h3 className="text-lg font-medium text-white">GitHub</h3>
              <a href="https://github.com/anweshamishragithub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ff00ff] transition-colors">
                Anwesha-mishra-9090
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Linkedin className="w-6 h-6 text-[#ff00ff] mt-1" />
            <div>
              <h3 className="text-lg font-medium text-white">LinkedIn</h3>
              <a href="https://linkedin.com/in/anweshamishralinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ff00ff] transition-colors">
                Anwesha Mishra
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#121212] rounded-lg p-6 shadow-lg shadow-[#ff00ff]/10">
        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-[#ff00ff] pl-4">Find Me On</h2>
        
        <div className="grid grid-cols-2 gap-3">
          <a 
            href="https://leetcode.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1e1e1e] p-3 rounded-md hover:bg-[#252525] transition-colors hover:scale-105 duration-300"
          >
            <span className="text-[#f89f1b] font-bold">LC</span>
            <span className="text-gray-300">LeetCode</span>
          </a>
          
          <a 
            href="https://www.hackerrank.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1e1e1e] p-3 rounded-md hover:bg-[#252525] transition-colors hover:scale-105 duration-300"
          >
            <span className="text-[#00e868] font-bold">HR</span>
            <span className="text-gray-300">HackerRank</span>
          </a>
          
          <a 
            href="https://stackoverflow.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1e1e1e] p-3 rounded-md hover:bg-[#252525] transition-colors hover:scale-105 duration-300"
          >
            <span className="text-[#f48024] font-bold">SO</span>
            <span className="text-gray-300">Stack Overflow</span>
          </a>
          
          <a 
            href="https://www.geeksforgeeks.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1e1e1e] p-3 rounded-md hover:bg-[#252525] transition-colors hover:scale-105 duration-300"
          >
            <span className="text-[#2f8d46] font-bold">GFG</span>
            <span className="text-gray-300">GeeksforGeeks</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
