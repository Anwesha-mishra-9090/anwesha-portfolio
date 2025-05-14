
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import { Code, Gamepad, Database } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'backend' | 'webgames' | 'fullstack'>('backend');

  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a30]/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="My" accentText="Projects" />
        
        {/* Project Type Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#0a0a20]/50 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('backend')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === 'backend' 
                  ? 'bg-neon-blue/20 text-white border border-neon-blue' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Database size={16} />
              Backend Projects
            </button>
            
            <button 
              onClick={() => setActiveTab('webgames')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === 'webgames' 
                  ? 'bg-neon-pink/20 text-white border border-neon-pink' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Gamepad size={16} />
              Web Games
            </button>
            
            <button 
              onClick={() => setActiveTab('fullstack')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === 'fullstack' 
                  ? 'bg-neon-purple/20 text-white border border-neon-purple' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Code size={16} />
              Full-Stack Projects
            </button>
          </div>
        </div>
        
        {/* Backend Projects */}
        {activeTab === 'backend' && (
          <div className="space-y-12">
            {/* Beginner Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-neon-blue mb-6 flex items-center gap-2">
                <Database size={20} />
                Beginner - Python Programming Basics
                <span className="text-sm font-normal text-gray-400 ml-2">(September 2024 - ongoing)</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.beginner.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={`${index + 1}: ${project.name}`}
                    description={project.description}
                    isBackend={true}
                  />
                ))}
              </div>
            </div>
            
            {/* Intermediate Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-neon-pink mb-6 flex items-center gap-2">
                <Database size={20} />
                Intermediate - Object-Oriented Programming and APIs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.intermediate.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={`${index + 1}: ${project.name}`}
                    description={project.description}
                    isBackend={true}
                  />
                ))}
              </div>
            </div>
            
            {/* Intermediate+ Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-neon-blue mb-6 flex items-center gap-2">
                <Database size={20} />
                Intermediate+ - APIs, JSON, Web Scraping
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.intermediatePlus.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={`${index + 1}: ${project.name}`}
                    description={project.description}
                    isBackend={true}
                  />
                ))}
              </div>
            </div>
            
            {/* Advanced Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-neon-pink mb-6 flex items-center gap-2">
                <Database size={20} />
                Advanced - GUI, Data Science, Plotting
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.advanced.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={`${index + 1}: ${project.name}`}
                    description={project.description}
                    isBackend={true}
                  />
                ))}
              </div>
            </div>
            
            {/* Advanced Authentication Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-neon-blue mb-6 flex items-center gap-2">
                <Database size={20} />
                Advanced - Authentication, Databases, REST APIs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.advancedAuth.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={`${index + 1}: ${project.name}`}
                    description={project.description}
                    isBackend={true}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Web Games */}
        {activeTab === 'webgames' && (
          <div>
            <h3 className="text-2xl font-semibold text-neon-pink mb-6 flex items-center gap-2">
              <Gamepad size={20} />
              Web Games & Interactive Applications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.webGames.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.name}
                  description={project.description}
                  link={project.link}
                  date={project.date}
                  skills={project.skills}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Full Stack Projects */}
        {activeTab === 'fullstack' && (
          <div>
            <h3 className="text-2xl font-semibold text-neon-purple mb-6 flex items-center gap-2">
              <Code size={20} />
              Full-Stack Applications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.fullStackProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.name}
                  description={project.description}
                  link={project.link}
                  date={project.date}
                  skills={project.skills}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
