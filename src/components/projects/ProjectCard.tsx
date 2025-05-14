
import React from 'react';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  date?: string;
  skills?: string[];
  isBackend?: boolean;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link, 
  date, 
  skills,
  isBackend = false,
  image 
}) => {
  return (
    <div className="galaxy-card hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] flex flex-col h-full">
      {image && !isBackend && (
        <div className="mb-4 overflow-hidden rounded-md">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </AspectRatio>
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {date && <span className="text-sm text-neon-blue whitespace-nowrap ml-2">{date}</span>}
      </div>
      
      <p className="text-gray-300 text-sm mb-4">
        {/* Show truncated description for backend projects, full for others */}
        {isBackend 
          ? description 
          : description.length > 180 
            ? `${description.substring(0, 180)}...` 
            : description
        }
      </p>
      
      {skills && skills.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2 mt-auto">
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
      
      {!isBackend && link && link !== "#" && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm flex items-center gap-1 mt-auto"
        >
          <LinkIcon size={14} />
          View Project <ArrowRight size={14} />
        </a>
      )}
      
      {!isBackend && link && link === "#" && (
        <p className="text-gray-400 italic text-sm mt-auto">Coming soon</p>
      )}
    </div>
  );
};

export default ProjectCard;
