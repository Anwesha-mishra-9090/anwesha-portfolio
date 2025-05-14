
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import { Code, Gamepad, Database } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'backend' | 'webgames' | 'fullstack'>('webgames');

  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a30]/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="My" accentText="Projects" />
        
        {/* Project Type Tabs - Using shadcn/ui Tabs component */}
        <Tabs defaultValue="webgames" value={activeTab} onValueChange={(value) => setActiveTab(value as 'backend' | 'webgames' | 'fullstack')} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-[#0a0a20]/50 p-1">
              <TabsTrigger 
                value="backend" 
                className="flex items-center gap-2 data-[state=active]:bg-neon-blue/20 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-neon-blue"
              >
                <Database size={16} />
                Backend Projects
              </TabsTrigger>
              <TabsTrigger 
                value="webgames" 
                className="flex items-center gap-2 data-[state=active]:bg-neon-pink/20 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-neon-pink"
              >
                <Gamepad size={16} />
                Web Games
              </TabsTrigger>
              <TabsTrigger 
                value="fullstack" 
                className="flex items-center gap-2 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-neon-purple"
              >
                <Code size={16} />
                Full-Stack Projects
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Backend Projects Tab Content */}
          <TabsContent value="backend" className="space-y-12 mt-0">
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
          </TabsContent>
          
          {/* Web Games Tab Content */}
          <TabsContent value="webgames" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.webGames.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.name}
                  description={project.description}
                  link={project.link}
                  date={project.date}
                  skills={project.skills}
                  image={project.image}
                />
              ))}
            </div>
          </TabsContent>
          
          {/* Full Stack Projects Tab Content */}
          <TabsContent value="fullstack" className="mt-0">
            <div className="grid grid-cols-1 gap-10">
              {projectsData.fullStackProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.name}
                  description={project.description}
                  link={project.link}
                  date={project.date}
                  skills={project.skills}
                  image={project.image}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
