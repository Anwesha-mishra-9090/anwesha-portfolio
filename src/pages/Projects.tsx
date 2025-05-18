
import React, { useState, useEffect, useRef, useMemo } from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Code, Link as LinkIcon, ArrowRight, Filter, Calendar, BarChart2, Star, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { projects } from '../data/projectsList';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type SortOption = 'newest' | 'oldest' | 'nameAsc' | 'nameDesc' | 'difficulty' | 'stars';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [difficulty, setDifficulty] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const filterRef = useRef<HTMLDivElement>(null);
  
  // Handle going back to home
  const goBack = () => {
    navigate('/');
  };
  
  // Handle click outside filter panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    
    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);
  
  // Memoize filtered and sorted projects to prevent unnecessary re-computations
  const sortedProjects = useMemo(() => {
    // Filter projects
    const filtered = projects.filter(project => {
      const matchesSearch = !searchTerm || 
                          project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = category === 'all' || 
                            (category === 'games' && project.category === 'games') || 
                            (category === 'tools' && project.category === 'tools') ||
                            (category === 'web' && project.category === 'web');
      
      const matchesDifficulty = difficulty === null || project.difficulty === difficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
    
    // Sort projects
    return [...filtered].sort((a, b) => {
      try {
        switch (sortOption) {
          case 'newest':
            return new Date(b.dateCompleted || '').getTime() - new Date(a.dateCompleted || '').getTime();
          case 'oldest':
            return new Date(a.dateCompleted || '').getTime() - new Date(b.dateCompleted || '').getTime();
          case 'nameAsc':
            return a.name.localeCompare(b.name);
          case 'nameDesc':
            return b.name.localeCompare(a.name);
          case 'difficulty':
            return (b.difficulty || 0) - (a.difficulty || 0);
          case 'stars':
            return (b.stars || 0) - (a.stars || 0);
          default:
            return 0;
        }
      } catch (error) {
        console.error("Sorting error:", error);
        return 0;
      }
    });
  }, [searchTerm, category, difficulty, sortOption]);
  
  const openProjectDialog = (project: typeof projects[0]) => {
    try {
      setSelectedProject(project);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error opening project dialog:", error);
      toast({
        title: "Error",
        description: "Could not open project details. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const renderStars = (count: number = 0) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < count ? 'text-neon-pink fill-neon-pink' : 'text-gray-400'}`} 
      />
    ));
  };
  
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar activeSection="projects" />
      
      <main className="pt-24 pb-20 min-h-screen px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-4"
          >
            {/* Back Button */}
            <Button 
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-all flex items-center gap-2"
              onClick={goBack}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-white">My </span>
              <span className="text-neon-blue">Projects</span>
            </h1>
            
            <div className="w-[105px]"></div> {/* Empty div for layout balance */}
          </motion.div>
          
          <p className="text-xl text-center text-gray-300 mb-12">
            Explore my collection of coding projects
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="galaxy-card mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-2/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              
              <div className="w-full md:w-1/3 flex gap-3">
                <button 
                  onClick={() => setCategory('all')}
                  className={`flex-1 py-2 px-4 rounded-md transition-all ${category === 'all' ? 'bg-neon-blue/20 border border-neon-blue' : 'bg-[#1a103d] border border-[#8c52ff]/30 hover:border-neon-blue'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setCategory('games')}
                  className={`flex-1 py-2 px-4 rounded-md transition-all ${category === 'games' ? 'bg-neon-pink/20 border border-neon-pink' : 'bg-[#1a103d] border border-[#8c52ff]/30 hover:border-neon-pink'}`}
                >
                  Games
                </button>
                <button 
                  onClick={() => setCategory('tools')}
                  className={`flex-1 py-2 px-4 rounded-md transition-all ${category === 'tools' ? 'bg-neon-purple/20 border border-neon-purple' : 'bg-[#1a103d] border border-[#8c52ff]/30 hover:border-neon-purple'}`}
                >
                  Tools
                </button>
                <div className="relative">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className={`h-full aspect-square flex items-center justify-center rounded-md transition-all ${isFilterOpen ? 'bg-neon-blue/20 border border-neon-blue' : 'bg-[#1a103d] border border-[#8c52ff]/30 hover:border-neon-blue'}`}
                  >
                    <Filter size={16} />
                  </button>
                  
                  {/* Advanced Filter Panel */}
                  <AnimatePresence>
                    {isFilterOpen && (
                      <motion.div
                        ref={filterRef}
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 p-4 w-64 galaxy-card z-10"
                      >
                        <h3 className="text-sm font-semibold mb-2 flex items-center">
                          <Filter size={14} className="mr-2" />
                          Advanced Filters
                        </h3>
                        
                        <div className="mb-4">
                          <p className="text-xs text-gray-400 mb-2">Difficulty Level:</p>
                          <div className="flex flex-wrap gap-2">
                            {[null, 1, 2, 3, 4, 5].map((level) => (
                              <button
                                key={level === null ? 'all' : level}
                                onClick={() => setDifficulty(level)}
                                className={`text-xs py-1 px-2 rounded-md transition-all ${
                                  difficulty === level 
                                    ? 'bg-neon-blue/20 border border-neon-blue' 
                                    : 'bg-[#1a103d] border border-[#8c52ff]/30'
                                }`}
                              >
                                {level === null ? 'All' : `Level ${level}`}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-xs text-gray-400 mb-2">Sort By:</p>
                          <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as SortOption)}
                            className="w-full text-sm py-2 px-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-blue"
                          >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="nameAsc">Name (A-Z)</option>
                            <option value="nameDesc">Name (Z-A)</option>
                            <option value="difficulty">Difficulty (Highest)</option>
                            <option value="stars">Rating (Highest)</option>
                          </select>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-400">
                Found <span className="text-white font-semibold">{sortedProjects.length}</span> projects
                {searchTerm && <span> matching "<span className="text-neon-blue">{searchTerm}</span>"</span>}
              </div>
              
              <div className="text-sm text-gray-400 flex items-center">
                <span className="mr-2">View:</span>
                <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'list')} className="h-8">
                  <TabsList className="h-8 p-1 bg-[#1a103d]/80">
                    <TabsTrigger value="grid" className="h-6 px-2">Grid</TabsTrigger>
                    <TabsTrigger value="list" className="h-6 px-2">List</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProjects.length > 0 ? (
                  sortedProjects.map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      index={index}
                      onClick={() => openProjectDialog(project)}
                      renderStars={renderStars}
                    />
                  ))
                ) : (
                  <NoProjectsFound 
                    resetFilters={() => {
                      setSearchTerm('');
                      setCategory('all');
                      setDifficulty(null);
                      setSortOption('newest');
                    }}
                  />
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {sortedProjects.length > 0 ? (
                  sortedProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="galaxy-card group hover:border-neon-blue transition-all duration-300 cursor-pointer flex gap-4"
                      onClick={() => openProjectDialog(project)}
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue">
                        <Code className="w-7 h-7 text-neon-blue" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold group-hover:text-neon-blue transition-colors">
                            {project.name}
                          </h3>
                          <span className="text-sm text-gray-400">Project #{project.id}</span>
                        </div>
                        
                        <p className="text-gray-300 mt-1">
                          {project.description}
                        </p>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center">
                            <Calendar size={14} className="text-gray-400 mr-2" />
                            <span className="text-sm text-gray-300">{project.dateCompleted}</span>
                          </div>
                          <div className="flex">{renderStars(project.stars)}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight size={16} className="text-neon-blue" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <NoProjectsFound 
                    resetFilters={() => {
                      setSearchTerm('');
                      setCategory('all');
                      setDifficulty(null);
                      setSortOption('newest');
                    }}
                  />
                )}
              </div>
            )}
          </motion.div>
          
          {/* Project Details Dialog - Updated with better navigation */}
          <Dialog 
            open={isDialogOpen} 
            onOpenChange={(open) => {
              if (!open) setIsDialogOpen(false);
            }}
          >
            <DialogContent 
              className="max-w-3xl bg-[#0f0f2a] border-neon-blue/30"
              onEscapeKeyDown={() => setIsDialogOpen(false)}
              onInteractOutside={() => setIsDialogOpen(false)}
            >
              <DialogHeader>
                <DialogTitle className="flex justify-between items-center">
                  <span>Project Details</span>
                  <DialogClose className="h-6 w-6 rounded-full hover:bg-gray-700/50 inline-flex items-center justify-center">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </DialogTitle>
                <DialogDescription>View detailed information about the project</DialogDescription>
              </DialogHeader>
              
              {selectedProject && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <AspectRatio ratio={16/9} className="bg-[#1a103d] rounded-md overflow-hidden mb-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <Code className="w-12 h-12 text-neon-blue/50" />
                      </div>
                    </AspectRatio>
                    
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-300">{selectedProject.dateCompleted}</span>
                      </div>
                      <div className="flex">{renderStars(selectedProject.stars)}</div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Project Stats</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#1a103d]/60 p-3 rounded-md">
                          <p className="text-xs text-gray-400">Difficulty</p>
                          <p className="text-sm font-medium">{Array(selectedProject.difficulty).fill('🔹').join('')}</p>
                        </div>
                        <div className="bg-[#1a103d]/60 p-3 rounded-md">
                          <p className="text-xs text-gray-400">Category</p>
                          <p className="text-sm font-medium capitalize">{selectedProject.category}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mb-3 flex items-center justify-center gap-2 bg-neon-blue hover:bg-neon-blue/80"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <ArrowLeft size={16} />
                      Back to Projects
                    </Button>
                    
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="neon-button w-full flex items-center justify-center gap-2"
                    >
                      <LinkIcon size={16} />
                      Visit Project
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Project Description</h4>
                    <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                    
                    <h4 className="font-medium mb-3">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-300 mb-6">
                      <li>Interactive user interface</li>
                      <li>Data persistence</li>
                      <li>Responsive design</li>
                      <li>Error handling</li>
                    </ul>
                    
                    <h4 className="font-medium mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-2 py-1 text-xs bg-neon-blue/10 border border-neon-blue/30 rounded-md">JavaScript</span>
                      <span className="px-2 py-1 text-xs bg-neon-pink/10 border border-neon-pink/30 rounded-md">HTML</span>
                      <span className="px-2 py-1 text-xs bg-neon-purple/10 border border-neon-purple/30 rounded-md">CSS</span>
                      <span className="px-2 py-1 text-xs bg-[#1a103d] border border-[#8c52ff]/30 rounded-md">React</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Extra back button at the bottom of dialog for better UX */}
              <div className="flex justify-center mt-4">
                <Button 
                  variant="outline" 
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Close Details
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

// Extracted components for better performance and code organization
const ProjectCard = ({ project, index, onClick, renderStars }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <div 
      className="galaxy-card group hover:border-neon-blue transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue group-hover:scale-110 transition-transform">
          <Code className="w-5 h-5 text-neon-blue" />
        </div>
        <span className="text-sm text-gray-400">Project #{project.id}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
        {project.name}
      </h3>
      
      <p className="text-gray-300 mb-6 h-16 overflow-hidden">
        {project.description}
      </p>
      
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <Calendar size={16} className="text-gray-400 mr-2" />
          <span className="text-sm text-gray-300">{project.dateCompleted}</span>
        </div>
        <div className="flex">{renderStars(project.stars)}</div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="inline-flex items-center gap-2 text-neon-blue">
          <LinkIcon size={16} />
          <span className="text-sm">View Project</span>
        </div>
        
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight size={16} className="text-neon-blue" />
        </div>
      </div>
    </div>
  </motion.div>
);

const NoProjectsFound = ({ resetFilters }) => (
  <div className="col-span-3 text-center py-12">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-bold text-gray-300 mb-4">No projects found</h3>
      <p className="text-gray-400">Try adjusting your search criteria</p>
      <button 
        onClick={resetFilters}
        className="mt-4 py-2 px-4 border border-neon-blue text-neon-blue rounded-md hover:bg-neon-blue/10 transition-colors"
      >
        Reset Filters
      </button>
    </motion.div>
  </div>
);

export default Projects;
