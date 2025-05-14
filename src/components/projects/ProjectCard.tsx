
import React, { useState } from 'react';
import { ArrowRight, Link as LinkIcon, ExternalLink, Code, Eye, Tag, Calendar, Github } from 'lucide-react';
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
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [currentView, setCurrentView] = useState<'info' | 'skills'>('info');

  const handleCardClick = () => {
    if (!isBackend && link && link !== "#") {
      setDialogOpen(true);
      setCurrentView('info');
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
      <div className="galaxy-card h-full hover:border-neon-pink transition-all duration-300">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white hover:text-white hover:bg-black/40 backdrop-blur-sm"
              >
                <Eye className="mr-2 h-4 w-4" /> View Details
              </Button>
            </div>
          </AspectRatio>
          
          {/* Date Badge */}
          {date && (
            <div className="absolute top-2 right-2">
              <span className="inline-flex items-center rounded-full bg-[#1a103d]/80 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-neon-blue border border-neon-blue/30">
                <Calendar className="mr-1 h-3 w-3" />
                {date}
              </span>
            </div>
          )}
        </div>
        
        {/* Project Header */}
        <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors mb-3">{title}</h3>
        
        {/* Project Description (truncated in card) */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {description.substring(0, 120)}
          {description.length > 120 ? "..." : ""}
        </p>
        
        {/* Skills Tags */}
        {skills && skills.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2 mt-auto">
            {skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index} 
                className="text-xs bg-[#1a103d] text-neon-pink px-2 py-1 rounded-full flex items-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neon-pink mr-1"></span>
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <Sheet>
                <SheetTrigger asChild onClick={(e) => e.stopPropagation()}>
                  <button className="text-xs bg-[#1a103d] text-neon-blue px-2 py-1 rounded-full flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    +{skills.length - 3} more
                  </button>
                </SheetTrigger>
                <SheetContent className="bg-[#0a0a30] border border-neon-blue w-full sm:max-w-md text-white">
                  <SheetHeader>
                    <SheetTitle className="text-white">All Skills & Technologies</SheetTitle>
                    <SheetDescription className="text-gray-300">
                      Complete list of skills used in {title}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center bg-[#1a103d]/50 rounded-md p-2">
                        <span className="w-2 h-2 rounded-full bg-neon-pink mr-2"></span>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
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

      {/* Enhanced Project Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-5xl bg-[#0a0a30] border border-neon-blue text-white p-0 overflow-hidden">
          {/* Hero Image Section */}
          <div className="w-full h-40 sm:h-60 relative overflow-hidden">
            <img 
              src={image || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"} 
              alt={title} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a30] to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
                {title}
              </h2>
              {date && (
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{date}</span>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 pt-2">
            {/* Tab Navigation */}
            <div className="flex gap-6 border-b border-white/10 mb-6">
              <button 
                onClick={() => setCurrentView('info')}
                className={`pb-2 px-1 text-sm font-medium ${
                  currentView === 'info' 
                    ? 'text-neon-blue border-b-2 border-neon-blue' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Project Overview
              </button>
              <button 
                onClick={() => setCurrentView('skills')}
                className={`pb-2 px-1 text-sm font-medium flex items-center gap-1 ${
                  currentView === 'skills' 
                    ? 'text-neon-pink border-b-2 border-neon-pink' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Code className="h-4 w-4" /> 
                Technologies & Skills
                {skills && <span className="ml-1 bg-[#1a103d] text-xs px-1.5 rounded-full">{skills.length}</span>}
              </button>
            </div>
            
            {currentView === 'info' ? (
              <div className="space-y-6">
                <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">
                  {description}
                </p>
                
                {/* Key Features Section */}
                <div className="bg-[#12123e]/50 rounded-xl p-4 border border-white/5">
                  <h3 className="text-neon-blue font-medium mb-4">Key Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array(4).fill(0).map((_, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="rounded-full bg-neon-blue/20 p-1 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-neon-blue"></div>
                        </div>
                        <p className="text-sm text-gray-300">
                          {i === 0 && "Interactive user interface with smooth animations"}
                          {i === 1 && "Responsive design for all device sizes"}
                          {i === 2 && "Optimized performance and accessibility"}
                          {i === 3 && "Clean, maintainable codebase structure"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {skills && skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-[#1a103d]/50 border border-white/5 rounded-lg p-3 hover:border-neon-pink/30 transition-all hover:bg-[#1a103d]/80 group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-md bg-neon-pink/10 text-neon-pink">
                          <Code className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium group-hover:text-neon-pink transition-colors">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Skill Categories */}
                <div className="bg-[#12123e]/50 rounded-xl p-4 border border-white/5">
                  <h3 className="text-neon-pink font-medium mb-4">Skill Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#1a103d]/30 p-3 rounded-lg border border-white/5">
                      <h4 className="text-sm font-medium mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills && skills
                          .filter(s => 
                            ['HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'UI', 'Design'].some(
                              keyword => s.includes(keyword)
                            )
                          )
                          .slice(0, 3)
                          .map((s, i) => (
                            <span key={i} className="text-xs bg-[#1a103d] text-white/70 px-2 py-0.5 rounded-full">
                              {s}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                    <div className="bg-[#1a103d]/30 p-3 rounded-lg border border-white/5">
                      <h4 className="text-sm font-medium mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills && skills
                          .filter(s => 
                            ['API', 'Server', 'Database', 'Node', 'Python', 'Authentication'].some(
                              keyword => s.includes(keyword)
                            )
                          )
                          .slice(0, 3)
                          .map((s, i) => (
                            <span key={i} className="text-xs bg-[#1a103d] text-white/70 px-2 py-0.5 rounded-full">
                              {s}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                    <div className="bg-[#1a103d]/30 p-3 rounded-lg border border-white/5">
                      <h4 className="text-sm font-medium mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills && skills
                          .filter(s => 
                            ['Git', 'Docker', 'Testing', 'Performance', 'Deployment'].some(
                              keyword => s.includes(keyword)
                            )
                          )
                          .slice(0, 3)
                          .map((s, i) => (
                            <span key={i} className="text-xs bg-[#1a103d] text-white/70 px-2 py-0.5 rounded-full">
                              {s}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter className="bg-[#0a0a20] p-4 border-t border-white/10 flex flex-row items-center justify-between">
            {link && link !== "#" ? (
              <div className="flex items-center gap-4">
                <Button 
                  className="bg-neon-blue hover:bg-neon-blue/80 text-black font-medium"
                  onClick={handleVisitProject}
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit Live Project
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/20 text-white hover:text-neon-pink hover:border-neon-pink"
                >
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
              </div>
            ) : (
              <p className="text-white/60 italic flex items-center">
                <Calendar className="mr-2 h-4 w-4" /> Coming soon...
              </p>
            )}
            
            <p className="text-xs text-white/40">
              Last updated: {date || "2024"}
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
