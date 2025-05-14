
import React, { useState } from 'react';
import { ArrowRight, Link as LinkIcon, ExternalLink, Code, Eye } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCardClick = () => {
    if (!isBackend && link && link !== "#") {
      setDialogOpen(true);
    }
  };

  const handleVisitProject = () => {
    if (link && link !== "#") {
      // Open the project in a new tab
      window.open(link, "_blank", "noopener,noreferrer");
      
      // Show a toast notification
      toast({
        title: "Opening project",
        description: `Redirecting to ${title}`,
        duration: 3000,
      });
      
      // Close the dialog
      setDialogOpen(false);
    }
  };

  // Handle backend projects display differently
  if (isBackend) {
    return (
      <div className="galaxy-card h-full">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
      </div>
    );
  }

  return (
    <>
      <div 
        className="galaxy-card hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] flex flex-col h-full cursor-pointer group" 
        onClick={handleCardClick}
      >
        {/* Project Image with Overlay on Hover */}
        <div className="relative mb-4 overflow-hidden rounded-md">
          <AspectRatio ratio={16/9} className="bg-[#0a0a30]">
            <img 
              src={image || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"} 
              alt={title} 
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white hover:text-white hover:bg-black/40"
              >
                <Eye className="mr-2 h-4 w-4" /> View Details
              </Button>
            </div>
          </AspectRatio>
        </div>
        
        {/* Project Header with Date */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{title}</h3>
          {date && <span className="text-sm text-neon-blue whitespace-nowrap ml-2 px-2 py-1 bg-[#1a103d] rounded-full">{date}</span>}
        </div>
        
        {/* Project Description (truncated in card) */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {description.substring(0, 150)}
          {description.length > 150 ? "..." : ""}
        </p>
        
        {/* Skills Tags */}
        {skills && skills.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2 mt-auto">
            {skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index} 
                className="text-xs bg-[#1a103d] text-neon-pink px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="text-xs bg-[#1a103d] text-neon-blue px-2 py-1 rounded-full">
                +{skills.length - 3} more
              </span>
            )}
          </div>
        )}
        
        {/* View Project Link */}
        <div className="mt-auto flex justify-between items-center">
          <div className="text-neon-pink group-hover:text-neon-blue transition-colors duration-300 text-sm flex items-center gap-1">
            <LinkIcon size={14} />
            View Project <ArrowRight size={14} />
          </div>
          
          {link && link === "#" && (
            <p className="text-gray-400 italic text-sm">Coming soon</p>
          )}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-4xl bg-[#0a0a30] border border-neon-blue text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              {title}
              {date && <span className="text-sm text-neon-blue font-normal ml-2">({date})</span>}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Project Image & Full Description */}
            <div className="lg:col-span-3">
              {image && (
                <div className="overflow-hidden rounded-md mb-4">
                  <AspectRatio ratio={16/9} className="bg-muted">
                    <img 
                      src={image} 
                      alt={title} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              )}
              
              <DialogDescription className="text-gray-300">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-neon-pink font-semibold mb-2">Project Description:</h4>
                    <p className="text-gray-300 whitespace-pre-line">{description}</p>
                  </div>
                </div>
              </DialogDescription>
            </div>
            
            {/* Technologies & Skills */}
            <div className="lg:col-span-2">
              <div className="bg-[#12123e] p-4 rounded-md">
                <h4 className="text-neon-blue font-semibold mb-4 flex items-center">
                  <Code size={18} className="mr-2" /> Technologies & Skills
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {skills && skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="text-sm bg-[#1a103d] text-neon-blue px-3 py-1.5 rounded-full my-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {link && link !== "#" && (
                  <div className="mt-8">
                    <Button 
                      className="w-full bg-neon-blue hover:bg-neon-blue/80 text-black font-medium"
                      onClick={handleVisitProject}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Visit Live Project
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <DialogFooter className="sm:justify-start flex-row items-center mt-4">
            <p className="text-sm text-gray-400">
              <span className="text-neon-blue">Note:</span> Clicking "Visit Live Project" will open the project in a new tab
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
