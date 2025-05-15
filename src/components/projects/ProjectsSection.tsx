
import React, { useState, useRef, useEffect } from 'react';
import SectionHeading from '../SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import { Code, Gamepad, Database, Search, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'backend' | 'webgames' | 'fullstack'>('webgames');
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Focus search input when search is shown
  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'backend' | 'webgames' | 'fullstack');
    setSearchTerm("");
    setShowSearch(false);
    setFilterActive(false);
    setCarouselPosition(0);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchTerm("");
    }
  };

  const toggleFilter = () => {
    setFilterActive(!filterActive);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300; // px to scroll
      if (direction === 'left') {
        const newPosition = Math.max(0, carouselPosition - scrollAmount);
        setCarouselPosition(newPosition);
        carouselRef.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        });
      } else {
        const newPosition = carouselPosition + scrollAmount;
        setCarouselPosition(newPosition);
        carouselRef.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Filter projects based on search term
  const getFilteredProjects = (projects: any[]) => {
    if (!searchTerm) return projects;
    
    return projects.filter(project => 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.skills && project.skills.some((skill: string) => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  };

  // Get filtered projects for current tab
  const getCurrentTabProjects = () => {
    switch (activeTab) {
      case 'webgames':
        return getFilteredProjects(projectsData.webGames);
      case 'fullstack':
        return getFilteredProjects(projectsData.fullStackProjects);
      default:
        return [];
    }
  };

  const filteredProjects = getCurrentTabProjects();

  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a30]/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="My" accentText="Projects" />
        
        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className={cn(
              "relative overflow-hidden transition-all duration-300",
              showSearch ? "w-full sm:w-80" : "w-10"
            )}>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={16} />
              </div>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearch}
                className={cn(
                  "w-full pl-10 pr-10 py-2 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-blue focus:border-transparent text-white text-sm transition-opacity",
                  !showSearch && "opacity-0"
                )}
              />
              {searchTerm && showSearch && (
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={handleClearSearch}
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={toggleSearch}
              className={cn(
                "h-9 w-9 rounded-md bg-[#1a103d] border border-[#8c52ff]/30 hover:bg-[#1a103d]/80",
                showSearch && "text-neon-blue"
              )}
            >
              {!showSearch ? <Search size={16} /> : <X size={16} />}
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              onClick={toggleFilter}
              className={cn(
                "h-9 w-9 rounded-md bg-[#1a103d] border border-[#8c52ff]/30 hover:bg-[#1a103d]/80",
                filterActive && "text-neon-pink border-neon-pink/30"
              )}
            >
              <Filter size={16} />
            </Button>
          </div>
          
          {/* Project Counter */}
          <div className="text-sm text-gray-400">
            Showing <span className="text-white">{filteredProjects.length}</span> {activeTab === 'backend' ? 'Python' : activeTab === 'webgames' ? 'Web Game' : 'Full-Stack'} projects
            {searchTerm && <span> matching "<span className="text-neon-blue">{searchTerm}</span>"</span>}
          </div>
        </div>
        
        {/* Project Type Tabs - Using shadcn/ui Tabs component */}
        <Tabs 
          defaultValue="webgames" 
          value={activeTab} 
          onValueChange={handleTabChange} 
          className="w-full"
        >
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
            {/* Backend Projects Categories */}
            <div className="relative">
              {/* Carousel Navigation */}
              <div className="absolute -top-12 right-0 flex gap-2">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 rounded-full bg-[#1a103d]/80 border border-[#8c52ff]/30 hover:bg-[#1a103d]"
                  onClick={() => scrollCarousel('left')}
                >
                  <ChevronLeft size={16} />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 rounded-full bg-[#1a103d]/80 border border-[#8c52ff]/30 hover:bg-[#1a103d]"
                  onClick={() => scrollCarousel('right')}
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
              
              {/* Categories Carousel */}
              <div 
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-none scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
              >
                {['Beginner', 'Intermediate', 'Intermediate+', 'Advanced', 'Authentication'].map((category, index) => (
                  <div 
                    key={category} 
                    className={cn(
                      "flex-shrink-0 rounded-lg p-3 transition-all cursor-pointer min-w-[180px]",
                      hoveredSection === category 
                        ? "bg-[#1a103d]/80 border border-neon-blue shadow-[0_0_10px_rgba(0,255,255,0.2)]" 
                        : "bg-[#1a103d]/30 border border-[#8c52ff]/20"
                    )}
                    onMouseEnter={() => setHoveredSection(category)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "p-2 rounded-md",
                        index % 2 === 0 ? "bg-neon-blue/10 text-neon-blue" : "bg-neon-pink/10 text-neon-pink"
                      )}>
                        {index % 2 === 0 ? <Database size={16} /> : <Code size={16} />}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{category}</h4>
                        <p className="text-xs text-gray-400">
                          {index === 0 && "Basic Programming"}
                          {index === 1 && "OOP & APIs"}
                          {index === 2 && "Web Integration"}
                          {index === 3 && "Data Science"}
                          {index === 4 && "Advanced APIs"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Beginner Projects */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredSection("Beginner")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className={cn(
                "text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors duration-300",
                hoveredSection === "Beginner" ? "text-neon-blue" : "text-neon-blue/80"
              )}>
                <Database size={20} />
                Beginner - Python Programming Basics
                <span className="text-sm font-normal text-gray-400 ml-2">(September 2024 - ongoing)</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.beginner
                  .filter(project => 
                    !searchTerm || 
                    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={`${index + 1}: ${project.name}`}
                      description={project.description}
                      isBackend={true}
                    />
                  ))
                }
              </div>
            </div>
            
            {/* Intermediate Projects */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredSection("Intermediate")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className={cn(
                "text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors duration-300",
                hoveredSection === "Intermediate" ? "text-neon-pink" : "text-neon-pink/80"
              )}>
                <Database size={20} />
                Intermediate - Object-Oriented Programming and APIs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.intermediate
                  .filter(project => 
                    !searchTerm || 
                    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={`${index + 1}: ${project.name}`}
                      description={project.description}
                      isBackend={true}
                    />
                  ))
                }
              </div>
            </div>
            
            {/* Intermediate+ Projects */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredSection("Intermediate+")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className={cn(
                "text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors duration-300",
                hoveredSection === "Intermediate+" ? "text-neon-blue" : "text-neon-blue/80"
              )}>
                <Database size={20} />
                Intermediate+ - APIs, JSON, Web Scraping
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.intermediatePlus
                  .filter(project => 
                    !searchTerm || 
                    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={`${index + 1}: ${project.name}`}
                      description={project.description}
                      isBackend={true}
                    />
                  ))
                }
              </div>
            </div>
            
            {/* Advanced Projects */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredSection("Advanced")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className={cn(
                "text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors duration-300",
                hoveredSection === "Advanced" ? "text-neon-pink" : "text-neon-pink/80"
              )}>
                <Database size={20} />
                Advanced - GUI, Data Science, Plotting
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.advanced
                  .filter(project => 
                    !searchTerm || 
                    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={`${index + 1}: ${project.name}`}
                      description={project.description}
                      isBackend={true}
                    />
                  ))
                }
              </div>
            </div>
            
            {/* Advanced Authentication Projects */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredSection("Authentication")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className={cn(
                "text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors duration-300",
                hoveredSection === "Authentication" ? "text-neon-blue" : "text-neon-blue/80"
              )}>
                <Database size={20} />
                Advanced - Authentication, Databases, REST APIs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.backendProjects.advancedAuth
                  .filter(project => 
                    !searchTerm || 
                    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={`${index + 1}: ${project.name}`}
                      description={project.description}
                      isBackend={true}
                    />
                  ))
                }
              </div>
            </div>
          </TabsContent>
          
          {/* Web Games Tab Content */}
          <TabsContent value="webgames" className="mt-0">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
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
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a103d]/50 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-300 mb-2">No projects found</h3>
                <p className="text-gray-400">Try adjusting your search criteria</p>
                {searchTerm && (
                  <Button 
                    variant="outline" 
                    className="mt-4 border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10"
                    onClick={handleClearSearch}
                  >
                    Clear search
                  </Button>
                )}
              </div>
            )}
          </TabsContent>
          
          {/* Full Stack Projects Tab Content */}
          <TabsContent value="fullstack" className="mt-0">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-10">
                {filteredProjects.map((project, index) => (
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
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a103d]/50 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-300 mb-2">No projects found</h3>
                <p className="text-gray-400">Try adjusting your search criteria</p>
                {searchTerm && (
                  <Button 
                    variant="outline" 
                    className="mt-4 border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10"
                    onClick={handleClearSearch}
                  >
                    Clear search
                  </Button>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
