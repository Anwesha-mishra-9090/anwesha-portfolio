
import React, { useState, useEffect, useRef } from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Code, Link as LinkIcon, ArrowRight, Filter, Calendar, BarChart2, Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Project data containing all 100 projects
const projects = [
  { id: 1, name: "Band Name Generator", description: "A fun program that generates a band name based on city and pet names.", link: "#", category: "beginner", difficulty: 1, stars: 3, dateCompleted: "2024-01-05" },
  { id: 2, name: "Tip Calculator", description: "A tool to calculate tips based on the total bill and percentage.", link: "#", category: "tools", difficulty: 1, stars: 4, dateCompleted: "2024-01-10" },
  { id: 3, name: "Treasure Map", description: "A game where users find a treasure based on coordinates.", link: "#", category: "games", difficulty: 2, stars: 4, dateCompleted: "2024-01-15" },
  { id: 4, name: "Rock, Paper, Scissors", description: "Classic Rock, Paper, Scissors game played against the computer.", link: "#" },
  { id: 5, name: "Password Generator", description: "Generates strong passwords with a mix of characters.", link: "#" },
  { id: 6, name: "Blackjack", description: "A card game where players try to get as close to 21 points as possible without going over.", link: "#" },
  { id: 7, name: "Hangman", description: "A word-guessing game where players try to guess the word before running out of attempts.", link: "#" },
  { id: 8, name: "Caesar Cipher", description: "A cipher where letters are shifted by a set number, used for encoding messages.", link: "#" },
  { id: 9, name: "Secret Auction", description: "An auction system where users bid on an item and the highest bid wins.", link: "#" },
  { id: 10, name: "Calculator", description: "A simple calculator that can perform basic arithmetic operations.", link: "#" },
  { id: 11, name: "Blackjack Game (Revisited)", description: "A more advanced version of the Blackjack game with additional features like multiple players.", link: "#" },
  { id: 12, name: "Pong Game", description: "A simple two-player game where paddles bounce a ball back and forth.", link: "#" },
  { id: 13, name: "Snake Game", description: "A classic snake game where the snake grows longer each time it eats food.", link: "#" },
  { id: 14, name: "Higher Lower Game", description: "A game where users try to guess if the next card will be higher or lower.", link: "#" },
  { id: 15, name: "Quiz Game", description: "A quiz app that asks multiple-choice questions and tracks scores.", link: "#" },
  { id: 16, name: "Countdown Timer", description: "A timer that counts down from a set time and alerts when time is up.", link: "#" },
  { id: 17, name: "Alarm Clock", description: "A program that plays a sound or shows an alert at a specific time.", link: "#" },
  { id: 18, name: "Weather App", description: "An app that fetches and displays weather information using an API.", link: "#" },
  { id: 19, name: "Currency Converter", description: "A program that converts currency using real-time exchange rates.", link: "#" },
  { id: 20, name: "Budget Tracker", description: "An app to track income, expenses, and calculate remaining balance.", link: "#" },
  { id: 21, name: "Web Scraper", description: "A program to scrape and extract information from websites.", link: "#" },
  { id: 22, name: "Countdown App", description: "An app where users can set a countdown for any event.", link: "#" },
  { id: 23, name: "Flashcards App", description: "An app to create and review flashcards for studying purposes.", link: "#" },
  { id: 24, name: "Mad Libs Game", description: "A word game where players fill in blanks to create funny stories.", link: "#" },
  { id: 25, name: "Birthday Reminder", description: "An app that reminds you of upcoming birthdays and important dates.", link: "#" },
  { id: 26, name: "Digital Clock", description: "A digital clock that displays the current time on the screen.", link: "#" },
  { id: 27, name: "Web Crawler", description: "A program that crawls through websites and collects specific data.", link: "#" },
  { id: 28, name: "Alarm System", description: "A security system that monitors and triggers an alarm if suspicious activity is detected.", link: "#" },
  { id: 29, name: "To-Do List App", description: "A basic app to add, remove, and view tasks to manage daily activities.", link: "#" },
  { id: 30, name: "Twitter Bot", description: "A bot that automatically tweets messages or retweets posts.", link: "#" },
  { id: 31, name: "Email Slicer", description: "A program that extracts the username and domain from an email address.", link: "#" },
  { id: 32, name: "Message Encryptor", description: "A program that encrypts messages using a key to make them unreadable.", link: "#" },
  { id: 33, name: "Face Detection App", description: "A simple app that uses machine learning to detect faces in images.", link: "#" },
  { id: 34, name: "Voice Assistant", description: "A basic voice assistant that responds to voice commands.", link: "#" },
  { id: 35, name: "Speech to Text", description: "An app that converts speech to text using voice recognition.", link: "#" },
  { id: 36, name: "Number Guessing Game", description: "A game where users try to guess a random number.", link: "#" },
  { id: 37, name: "Tic Tac Toe Game", description: "A simple Tic Tac Toe game for two players.", link: "#" },
  { id: 38, name: "Guess the Word Game", description: "A game where players guess a randomly chosen word by guessing letters.", link: "#" },
  { id: 39, name: "Contact Book", description: "An app to manage and search through a list of contacts.", link: "#" },
  { id: 40, name: "Anagram Solver", description: "A program that checks if two words are anagrams of each other.", link: "#" },
  { id: 41, name: "Instagram Photo Downloader", description: "A tool that lets users download Instagram photos using a URL.", link: "#" },
  { id: 42, name: "Sudoku Solver", description: "A program that solves Sudoku puzzles automatically.", link: "#" },
  { id: 43, name: "Age Calculator", description: "An app that calculates a person's age based on their birthdate.", link: "#" },
  { id: 44, name: "Magic 8 Ball", description: "A program that answers users' questions with random answers.", link: "#" },
  { id: 45, name: "Web Scraping for Product Prices", description: "A script that scrapes online stores for product prices and shows the best deal.", link: "#" },
  { id: 46, name: "Flashcard Quiz App", description: "A flashcard-based app to help users memorize information.", link: "#" },
  { id: 47, name: "Movie Ticket Booking System", description: "A simple system to book movie tickets and check showtimes.", link: "#" },
  { id: 48, name: "Traffic Light Simulator", description: "A program that simulates traffic light changes and behaviors.", link: "#" },
  { id: 49, name: "Postcode Finder", description: "A program that fetches information about a given postal code.", link: "#" },
  { id: 50, name: "Game Score Tracker", description: "An app that tracks and stores scores for games or sports.", link: "#" },
  { id: 51, name: "Typing Speed Test", description: "A game where users can test how fast they can type words.", link: "#" },
  { id: 52, name: "Random Quote Generator", description: "A program that generates random quotes from a list.", link: "#" },
  { id: 53, name: "News App", description: "A basic app that pulls the latest news from an API.", link: "#" },
  { id: 54, name: "BMI Calculator", description: "A program that calculates your Body Mass Index (BMI) based on height and weight.", link: "#" },
  { id: 55, name: "Portfolio Website", description: "A website to showcase your projects and resume.", link: "#" },
  { id: 56, name: "Expense Tracker", description: "A tool to track and categorize personal expenses.", link: "#" },
  { id: 57, name: "Weather Forecast", description: "A weather app that provides weather information for a specified location.", link: "#" },
  { id: 58, name: "Budgeting App", description: "A tool to create budgets and track spending.", link: "#" },
  { id: 59, name: "Event Calendar", description: "An app to manage and schedule upcoming events or meetings.", link: "#" },
  { id: 60, name: "Unit Converter", description: "A program that converts units (e.g., kilometers to miles, etc.)", link: "#" },
  { id: 61, name: "Budget Planner App", description: "A tool to plan and visualize monthly budgets, with income and expenses.", link: "#" },
  { id: 62, name: "Flashcard App (Advanced)", description: "A flashcard app that includes advanced features such as spaced repetition.", link: "#" },
  { id: 63, name: "Cryptocurrency Price Checker", description: "A program that fetches and displays real-time cryptocurrency prices.", link: "#" },
  { id: 64, name: "Food Delivery App (Mock)", description: "A simple simulation of a food delivery system with menu and delivery status.", link: "#" },
  { id: 65, name: "Weight Tracker App", description: "A program to log and track weight over time with visual graphs.", link: "#" },
  { id: 66, name: "Notes App", description: "An app that lets users create, update, and delete notes for tasks or ideas.", link: "#" },
  { id: 67, name: "GitHub Activity Tracker", description: "A program that tracks and displays the user's GitHub activity.", link: "#" },
  { id: 68, name: "QR Code Generator", description: "A tool to generate QR codes for URLs or text.", link: "#" },
  { id: 69, name: "Personal Diary App", description: "A private diary to log thoughts, ideas, and daily experiences.", link: "#" },
  { id: 70, name: "Countdown Timer (Revisited)", description: "A more advanced countdown timer with custom notifications.", link: "#" },
  { id: 71, name: "Memory Game", description: "A game where players match pairs of cards that are flipped over.", link: "#" },
  { id: 72, name: "Fitness Tracker App", description: "A program to log workouts, set fitness goals, and track progress.", link: "#" },
  { id: 73, name: "Note-Taking App with Markdown", description: "A note-taking app with support for Markdown formatting.", link: "#" },
  { id: 74, name: "Movie Recommendation System", description: "A system that suggests movies based on user preferences.", link: "#" },
  { id: 75, name: "Audio Book App", description: "A basic app that lets users listen to audiobooks with features like bookmarks.", link: "#" },
  { id: 76, name: "Plant Care Tracker", description: "An app to track watering and maintenance schedules for plants.", link: "#" },
  { id: 77, name: "Grocery List App", description: "An app to create shopping lists and track grocery items.", link: "#" },
  { id: 78, name: "Personal Finance Manager", description: "An app to track income, expenses, and investments for personal finance.", link: "#" },
  { id: 79, name: "Task Management App", description: "A system to organize tasks and set deadlines.", link: "#" },
  { id: 80, name: "Recipe Finder", description: "An app to find recipes based on available ingredients.", link: "#" },
  { id: 81, name: "HTML Formatter", description: "A tool to clean and format HTML code.", link: "#" },
  { id: 82, name: "Math Quiz App", description: "An app that generates random math questions for practice.", link: "#" },
  { id: 83, name: "Customizable Timer App", description: "A timer app with customization options like alarm sounds and intervals.", link: "#" },
  { id: 84, name: "Local Weather App", description: "A weather app focused on fetching the local weather using geolocation.", link: "#" },
  { id: 85, name: "Time Zone Converter", description: "A tool to convert time across different time zones.", link: "#" },
  { id: 86, name: "Cryptocurrency Portfolio Tracker", description: "A system to track the performance of your cryptocurrency investments.", link: "#" },
  { id: 87, name: "Auto Image Resizer", description: "A tool that automatically resizes images to fit specified dimensions.", link: "#" },
  { id: 88, name: "Expense Splitter", description: "An app to divide shared expenses among a group of people.", link: "#" },
  { id: 89, name: "Flashcard Review App", description: "A system that helps you review your flashcards based on difficulty and frequency.", link: "#" },
  { id: 90, name: "Journal Entry App", description: "A simple app to write and save journal entries.", link: "#" },
  { id: 91, name: "Interactive Story App", description: "A game where the user makes choices that affect the story's outcome.", link: "#" },
  { id: 92, name: "Stopwatch App", description: "A stopwatch that allows users to track elapsed time with start, stop, and reset features.", link: "#" },
  { id: 93, name: "Weather Alerts", description: "An app that sends weather alerts based on user preferences (e.g., rainfall, temperature).", link: "#" },
  { id: 94, name: "Flashcard with Quiz Function", description: "A flashcard app that quizzes the user on the material they are reviewing.", link: "#" },
  { id: 95, name: "Task Prioritizer", description: "An app that helps you prioritize tasks using a scoring system.", link: "#" },
  { id: 96, name: "Pomodoro Timer", description: "A timer that helps you work in intervals using the Pomodoro Technique.", link: "#" },
  { id: 97, name: "Book Finder App", description: "A tool to search for books and track reading progress.", link: "#" },
  { id: 98, name: "URL Shortener", description: "A tool to shorten long URLs for easy sharing.", link: "#" },
  { id: 99, name: "Personal Dashboard", description: "A dashboard that displays useful information like the weather, to-do list, and news.", link: "#" },
  { id: 100, name: "Markdown Editor", description: "A text editor that supports Markdown syntax for formatting text.", link: "#" }
];

type SortOption = 'newest' | 'oldest' | 'nameAsc' | 'nameDesc' | 'difficulty' | 'stars';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [difficulty, setDifficulty] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  
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
  
  // Filter projects based on search term, category, and difficulty
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category === 'all' || 
                            (category === 'games' && project.category === 'games') || 
                            (category === 'tools' && project.category === 'tools') ||
                            (category === 'web' && project.category === 'web');
    
    const matchesDifficulty = difficulty === null || project.difficulty === difficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime();
      case 'oldest':
        return new Date(a.dateCompleted).getTime() - new Date(b.dateCompleted).getTime();
      case 'nameAsc':
        return a.name.localeCompare(b.name);
      case 'nameDesc':
        return b.name.localeCompare(a.name);
      case 'difficulty':
        return b.difficulty - a.difficulty;
      case 'stars':
        return b.stars - a.stars;
      default:
        return 0;
    }
  });
  
  const openProjectDialog = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };
  
  const renderStars = (count: number) => {
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
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="text-white">My </span>
              <span className="text-neon-blue">Projects</span>
            </h1>
            
            <p className="text-xl text-center text-gray-300 mb-12">
              Explore my collection of 100 coding projects
            </p>
          </motion.div>
          
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
                <Tabs defaultValue="grid" className="h-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.length > 0 ? (
                sortedProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div 
                      className="galaxy-card group hover:border-neon-blue transition-all duration-300 cursor-pointer"
                      onClick={() => openProjectDialog(project)}
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
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-300 mb-4">No projects found</h3>
                    <p className="text-gray-400">Try adjusting your search criteria</p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setCategory('all');
                        setDifficulty(null);
                        setSortOption('newest');
                      }}
                      className="mt-4 py-2 px-4 border border-neon-blue text-neon-blue rounded-md hover:bg-neon-blue/10 transition-colors"
                    >
                      Reset Filters
                    </button>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Project Details Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-3xl bg-[#0f0f2a] border-neon-blue/30">
              {selectedProject && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                      <Code className="text-neon-blue" />
                      {selectedProject.name}
                      <span className="text-sm font-normal text-gray-400 ml-2">
                        Project #{selectedProject.id}
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  
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
                      
                      <div className="flex justify-end">
                        <button 
                          onClick={() => setIsDialogOpen(false)}
                          className="px-4 py-2 text-gray-300 hover:text-white"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;
