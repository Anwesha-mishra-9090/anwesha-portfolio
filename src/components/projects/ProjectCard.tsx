
import React, { useState } from 'react';
import { ArrowRight, Link as LinkIcon, ExternalLink, Code, Eye, Tag, Calendar, Github, Clock, Award, Star, ChevronRight, Zap, Layers, Check } from 'lucide-react';
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
import { cn } from '@/lib/utils';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  // Generate a random number for the project metrics
  const getRandomMetric = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const projectMetrics = {
    stars: getRandomMetric(5, 240),
    views: getRandomMetric(100, 5000),
    completion: getRandomMetric(85, 100)
  };

  // Handle backend projects display differently
  if (isBackend) {
    return (
      <div className="galaxy-card h-full hover:border-neon-pink transition-all duration-300 group relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-gradient-to-l from-neon-pink/20 to-transparent w-1/3 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute bottom-0 left-0 bg-gradient-to-r from-neon-blue/20 to-transparent w-1/3 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-pink transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-flex items-center rounded-full bg-neon-pink/10 px-2.5 py-0.5 text-xs font-medium text-neon-pink">
            <Code className="mr-1 h-3 w-3" />
            Python
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div 
        className="galaxy-card hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] flex flex-col h-full cursor-pointer group relative overflow-hidden" 
        onClick={handleCardClick}
      >
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-blue/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-purple/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        
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
                className="text-white border-white hover:text-white hover:bg-black/40 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
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
          
          {/* Project Metrics Badge */}
          <div className="absolute bottom-2 left-2 flex space-x-2">
            <span className="inline-flex items-center rounded-full bg-[#1a103d]/80 backdrop-blur-sm px-2 py-0.5 text-xs font-medium text-neon-pink border border-neon-pink/30">
              <Star className="mr-1 h-3 w-3" />
              {projectMetrics.stars}
            </span>
            <span className="inline-flex items-center rounded-full bg-[#1a103d]/80 backdrop-blur-sm px-2 py-0.5 text-xs font-medium text-neon-purple border border-neon-purple/30">
              <Eye className="mr-1 h-3 w-3" />
              {projectMetrics.views}
            </span>
          </div>
        </div>
        
        {/* Project Header */}
        <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 mb-3 flex items-center">
          {title}
          <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
        </h3>
        
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
                className="text-xs bg-[#1a103d] text-neon-pink px-2 py-1 rounded-full flex items-center hover:bg-[#1a103d]/70 transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${hoveredIndex === index ? 'bg-neon-blue scale-125' : 'bg-neon-pink'} transition-all duration-200 mr-1`}></span>
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <Sheet>
                <SheetTrigger asChild onClick={(e) => e.stopPropagation()}>
                  <button className="text-xs bg-[#1a103d] text-neon-blue px-2 py-1 rounded-full flex items-center hover:bg-[#1a103d]/70 transition-colors duration-200">
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
                      <div key={index} className="flex items-center bg-[#1a103d]/50 rounded-md p-2 hover:bg-[#1a103d]/80 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_8px_rgba(0,255,255,0.2)]">
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
        
        {/* Progress Bar */}
        <div className="mb-4 w-full">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Completion</span>
            <span>{projectMetrics.completion}%</span>
          </div>
          <div className="w-full h-1 bg-[#1a103d] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300"
              style={{ width: `${projectMetrics.completion}%` }}
            ></div>
          </div>
        </div>
        
        {/* View Project Link */}
        <div className="mt-auto flex justify-between items-center">
          <div className="text-neon-pink group-hover:text-neon-blue transition-colors duration-300 text-sm flex items-center gap-1">
            <LinkIcon size={14} className="transform group-hover:rotate-45 transition-transform duration-300" />
            View Project <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
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
              <div className="flex items-center space-x-2 mb-1">
                <span className="bg-neon-purple/20 text-neon-purple text-xs px-2 py-0.5 rounded-full backdrop-blur-sm border border-neon-purple/30">
                  Featured Project
                </span>
                <span className="bg-neon-blue/20 text-neon-blue text-xs px-2 py-0.5 rounded-full backdrop-blur-sm border border-neon-blue/30 flex items-center">
                  <Star className="h-3 w-3 mr-1" fill="currentColor" /> {projectMetrics.stars}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
                {title}
              </h2>
              {date && (
                <div className="flex items-center gap-2 text-white/80 backdrop-blur-sm bg-black/20 w-fit px-2 py-0.5 rounded-md">
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
                className={`pb-2 px-1 text-sm font-medium relative ${
                  currentView === 'info' 
                    ? 'text-neon-blue' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Project Overview
                {currentView === 'info' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-blue to-transparent"></span>
                )}
              </button>
              <button 
                onClick={() => setCurrentView('skills')}
                className={`pb-2 px-1 text-sm font-medium flex items-center gap-1 relative ${
                  currentView === 'skills' 
                    ? 'text-neon-pink' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Code className="h-4 w-4" /> 
                Technologies & Skills
                {skills && <span className="ml-1 bg-[#1a103d] text-xs px-1.5 rounded-full">{skills.length}</span>}
                {currentView === 'skills' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-pink to-transparent"></span>
                )}
              </button>
            </div>
            
            {currentView === 'info' ? (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-2/3">
                    <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">
                      {description}
                    </p>
                    
                    {/* Project Stats */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-[#1a103d]/30 p-3 rounded-lg flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105 hover:bg-[#1a103d]/50 cursor-default">
                        <div className="text-neon-blue mb-1">
                          <Clock className="h-5 w-5" />
                        </div>
                        <p className="text-xs text-gray-400">Duration</p>
                        <p className="text-sm font-medium">3 Weeks</p>
                      </div>
                      <div className="bg-[#1a103d]/30 p-3 rounded-lg flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105 hover:bg-[#1a103d]/50 cursor-default">
                        <div className="text-neon-pink mb-1">
                          <Award className="h-5 w-5" />
                        </div>
                        <p className="text-xs text-gray-400">Status</p>
                        <p className="text-sm font-medium">Completed</p>
                      </div>
                      <div className="bg-[#1a103d]/30 p-3 rounded-lg flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105 hover:bg-[#1a103d]/50 cursor-default">
                        <div className="text-neon-purple mb-1">
                          <Zap className="h-5 w-5" />
                        </div>
                        <p className="text-xs text-gray-400">Performance</p>
                        <p className="text-sm font-medium">Optimized</p>
                      </div>
                      <div className="bg-[#1a103d]/30 p-3 rounded-lg flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105 hover:bg-[#1a103d]/50 cursor-default">
                        <div className="text-neon-blue mb-1">
                          <Layers className="h-5 w-5" />
                        </div>
                        <p className="text-xs text-gray-400">Architecture</p>
                        <p className="text-sm font-medium">MVC Pattern</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3">
                    {/* Key Features Section */}
                    <div className="bg-[#12123e]/50 rounded-xl p-4 border border-white/5 h-full relative overflow-hidden">
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-blue/5 rounded-full blur-xl"></div>
                      <h3 className="text-neon-blue font-medium mb-4 relative z-10">Key Highlights</h3>
                      <div className="space-y-3 relative z-10">
                        {Array(4).fill(0).map((_, i) => (
                          <div key={i} className="flex items-start gap-2 group">
                            <div className="rounded-full bg-neon-blue/20 p-1 mt-0.5 group-hover:bg-neon-blue/40 transition-colors">
                              <Check className="w-3 h-3 text-neon-blue" />
                            </div>
                            <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
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
                </div>
                
                {/* Additional Screenshots */}
                <div className="bg-[#12123e]/30 rounded-xl p-4 border border-white/5">
                  <h3 className="text-neon-purple font-medium mb-4">Project Screenshots</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className="rounded-md overflow-hidden relative group cursor-pointer">
                        <img 
                          src={`https://images.unsplash.com/photo-148859052${i * 10 + 8505}-98d2b5aba04b?w=500&auto=format`} 
                          alt={`Screenshot ${i+1}`} 
                          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                          <span className="p-2 text-white text-xs">Screenshot {i+1}</span>
                        </div>
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
                      className="bg-[#1a103d]/50 border border-white/5 rounded-lg p-3 hover:border-neon-pink/30 transition-all hover:bg-[#1a103d]/80 group hover:scale-105"
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
                    <div className="bg-[#1a103d]/30 p-3 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:bg-[#1a103d]/40">
                      <h4 className="text-sm font-medium mb-2 text-neon-blue">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills && skills
                          .filter(s => 
                            ['HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'UI', 'Design'].some(
                              keyword => s.includes(keyword)
                            )
                          )
                          .slice(0, 3)
                          .map((s, i) => (
                            <span key={i} className="text-xs bg-[#1a103d] text-white/70 px-2 py-0.5 rounded-full hover:bg-neon-blue/20 hover:text-white transition-colors">
                              {s}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                    <div className="bg-[#1a103d]/30 p-3 rounded-lg border border-white/5 hover:border-neon-pink/30 transition-all duration-300 hover:bg-[#1a103d]/40">
                      <h4 className="text-sm font-medium mb-2 text-neon-pink">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills && skills
                          .filter(s => 
                            ['API', 'Server', 'Database', 'Node', 'Python', 'Authentication'].some(
                              keyword => s.includes(keyword)
                            )
                          )
                          .slice(0, 3)
                          .map((s, i) => (
                            <span key={i} className="text-xs bg-[#1a103d] text-white/70 px-2 py-0.5 rounded-full hover:bg-neon-pink/20 hover:text-white transition-colors">
                              {s}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                    <div className="bg-[#1a103d]/30 p-3 rounded-lg border border-white/5 hover:border-neon-purple/30 transition-all duration-300 hover:bg-[#1a103d]/40">
                      <h4 className="text-sm font-medium mb-2 text-neon-purple">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills && skills
                          .filter(s => 
                            ['Git', 'Docker', 'Testing', 'Performance', 'Deployment'].some(
                              keyword => s.includes(keyword)
                            )
                          )
                          .slice(0, 3)
                          .map((s, i) => (
                            <span key={i} className="text-xs bg-[#1a103d] text-white/70 px-2 py-0.5 rounded-full hover:bg-neon-purple/20 hover:text-white transition-colors">
                              {s}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Skill Proficiency */}
                <div className="bg-[#12123e]/30 rounded-xl p-4 border border-white/5">
                  <h3 className="text-neon-blue font-medium mb-4">Skill Proficiency</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {['Frontend Development', 'Backend Integration', 'UI/UX Design', 'Performance Optimization'].map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill}</span>
                          <span>{80 + index * 5}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#1a103d] rounded-full overflow-hidden">
                          <div 
                            className={cn(
                              "h-full transition-all duration-1000 rounded-full",
                              index % 2 === 0 ? "bg-gradient-to-r from-neon-blue to-neon-purple" : "bg-gradient-to-r from-neon-pink to-neon-purple"
                            )}
                            style={{ width: `${80 + index * 5}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter className="bg-[#0a0a20] p-4 border-t border-white/10 flex flex-row items-center justify-between">
            {link && link !== "#" ? (
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  className="bg-neon-blue hover:bg-neon-blue/80 text-black font-medium transition-transform hover:scale-105"
                  onClick={handleVisitProject}
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit Live Project
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/20 text-white hover:text-neon-pink hover:border-neon-pink transition-transform hover:scale-105"
                >
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
                <Button 
                  variant="ghost"
                  className="text-white/70 hover:text-neon-purple hover:bg-neon-purple/10 transition-transform hover:scale-105"
                >
                  <Star className="mr-2 h-4 w-4" /> Star Project
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
