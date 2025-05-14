
import React from 'react';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  date?: string;
  skills?: string[];
  isBackend?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link, 
  date, 
  skills,
  isBackend = false 
}) => {
  return (
    <div className="galaxy-card hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {date && <span className="text-sm text-neon-blue">{date}</span>}
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      
      {skills && skills.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-xs bg-[#1a103d] text-neon-pink px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      
      {!isBackend && link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm flex items-center gap-1"
        >
          <LinkIcon size={14} />
          View Project <ArrowRight size={14} />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
