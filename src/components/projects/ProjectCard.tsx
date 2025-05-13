
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  day: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, day }) => {
  return (
    <div className="galaxy-card hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-sm text-neon-blue">{day}</span>
      </div>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <a href="#" className="text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm flex items-center gap-1">
        View Project <ArrowRight size={14} />
      </a>
    </div>
  );
};

export default ProjectCard;
