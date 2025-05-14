
import React, { useState } from 'react';
import { ArrowRight, Link as LinkIcon, ExternalLink } from 'lucide-react';
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
import { useToast } from "@/hooks/use-toast";

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

  return (
    <>
      <div 
        className={`galaxy-card hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] flex flex-col h-full ${!isBackend && link && link !== "#" ? 'cursor-pointer' : ''}`}
        onClick={handleCardClick}
      >
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
          <div 
            className="text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm flex items-center gap-1 mt-auto"
          >
            <LinkIcon size={14} />
            View Project <ArrowRight size={14} />
          </div>
        )}
        
        {!isBackend && link && link === "#" && (
          <p className="text-gray-400 italic text-sm mt-auto">Coming soon</p>
        )}
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl bg-[#0a0a30] border border-neon-blue text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              {title}
              {date && <span className="text-sm text-neon-blue font-normal ml-2">({date})</span>}
            </DialogTitle>
          </DialogHeader>
          
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
                <p className="text-gray-300">{description}</p>
              </div>
              
              {skills && skills.length > 0 && (
                <div>
                  <h4 className="text-neon-pink font-semibold mb-2">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-[#1a103d] text-neon-blue px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogDescription>
          
          <Separator className="bg-gray-700" />
          
          <DialogFooter className="sm:justify-between flex-row items-center">
            <p className="text-sm text-gray-400">
              <span className="text-neon-blue">Note:</span> This will open the project in a new tab
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Close
              </Button>
              <Button 
                className="bg-neon-blue hover:bg-neon-blue/80 text-black font-medium"
                onClick={handleVisitProject}
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
