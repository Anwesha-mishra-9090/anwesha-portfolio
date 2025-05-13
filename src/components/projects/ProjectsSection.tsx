
import React from 'react';
import SectionHeading from '../SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a30]/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="My" accentText="Projects" />
        
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description} 
                day={project.day} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
