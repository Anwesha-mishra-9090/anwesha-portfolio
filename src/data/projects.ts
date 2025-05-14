
export const projectsData = {
  // Backend Python Projects
  backendProjects: {
    beginner: [
      { name: "Band Name Generator", description: "A fun program that generates band names based on user input." },
      { name: "Tip Calculator", description: "Tool for calculating appropriate tips based on bill amount and preferences." },
      { name: "Treasure Island Game", description: "Text-based adventure game with multiple paths and endings." },
      { name: "Password Generator", description: "Creates secure passwords with customizable complexity options." },
      { name: "Reeborg's World Maze", description: "Logic practice solving mazes with Python code instructions." },
      { name: "Hangman Game", description: "Classic word guessing game with illustrated consequences." },
      { name: "Caesar Cipher", description: "Encryption and decryption tool using the classic Caesar shift method." },
      { name: "Blackjack Game", description: "Card game implementation following standard blackjack rules." },
      { name: "Number Guessing Game", description: "Game where players try to guess a random number within a range." },
      { name: "Debugging Project", description: "Practice finding and fixing bugs in Python code." },
      { name: "Higher Lower Game", description: "Comparison game based on Instagram follower counts." },
      { name: "Coffee Machine", description: "OOP practice simulating a coffee machine with various functions." }
    ],
    intermediate: [
      { name: "Quiz Game", description: "OOP-based trivia application with score tracking." },
      { name: "Turtle Graphics Art", description: "Creative drawing program using Python's turtle module." },
      { name: "Etch-A-Sketch App", description: "Digital version of the classic drawing toy." },
      { name: "Turtle Race Game", description: "Simulated race game with multiple turtle contestants." },
      { name: "Turtle Crossing Game", description: "Frogger clone where players navigate traffic." },
      { name: "Mail Merge Project", description: "Automated personalized email generation from templates." },
      { name: "Working with CSV Data", description: "U.S. States Game using data manipulation." },
      { name: "NATO Alphabet App", description: "Converts text input to NATO phonetic alphabet." },
      { name: "Tkinter Miles to Km Converter", description: "GUI for converting between imperial and metric units." },
      { name: "Pomodoro Timer App", description: "Productivity timer following the Pomodoro technique." },
      { name: "Password Manager", description: "Basic tool for storing passwords with file saving." },
      { name: "Password Manager with GUI", description: "Enhanced password manager with graphical interface." }
    ],
    intermediatePlus: [
      { name: "Flash Card App", description: "Learning tool with custom flashcard creation and review." },
      { name: "Automated Birthday Email Sender", description: "Sends birthday wishes automatically on scheduled dates." },
      { name: "ISS Tracker with API", description: "Tracks International Space Station with email notifications." },
      { name: "Quotation Twitter Bot", description: "Automated bot for posting quotes to Twitter." },
      { name: "Rain Alert SMS App", description: "Weather monitoring with Twilio SMS notifications." },
      { name: "Stock News Alert App", description: "Financial tool combining stock and news APIs." },
      { name: "Habit Tracker with Pixela API", description: "Visual habit tracking using the Pixela API." },
      { name: "Exercise Tracker App", description: "Fitness logger using the Nutritionix API." },
      { name: "Flight Deal Finder", description: "Locates travel deals using Sheety and Tequila APIs." },
      { name: "Flight Club", description: "Flight deal subscription system with user management." },
      { name: "Web Scraping Amazon Price Tracker", description: "Monitors product prices on Amazon." },
      { name: "BeautifulSoup Practice", description: "Web scraping tool for finding job listings." },
      { name: "Selenium Cookie Clicker Bot", description: "Automated bot for playing Cookie Clicker." },
      { name: "Selenium Amazon Purchase Bot", description: "Automates the Amazon purchasing process." },
      { name: "Automating Google Form", description: "Script for automatically filling out Google Forms." }
    ],
    advanced: [
      { name: "Job Application Bot", description: "Automates job applications on LinkedIn." },
      { name: "Automated Tinder Swiper Bot", description: "Bot for automating Tinder profile interactions." },
      { name: "Automated Instagram Follower Bot", description: "Tool for managing Instagram following activities." },
      { name: "Spotify Playlist Maker", description: "Creates playlists using web scraping and Spotify API." },
      { name: "Movie Rating Website", description: "Flask app for rating and reviewing movies." },
      { name: "Movie Poster & Rating App", description: "Enhanced movie app with visual elements in Flask." },
      { name: "Bootstrap Intro", description: "Introduction to using Bootstrap with Flask." },
      { name: "Web Design with Flask + Bootstrap", description: "Creating responsive web applications." },
      { name: "Personal Blog Website", description: "Full blog implementation with Flask and database." },
      { name: "Blog Project with Admin Panel", description: "Enhanced blog with administrative features." },
      { name: "Full-featured Blog", description: "Complete blog with user authentication and comments." },
      { name: "RESTful Routing + Flask Forms", description: "Implementing REST principles in Flask." },
      { name: "Cafe & Wifi Website", description: "CRUD operations with Flask Forms." },
      { name: "Advanced Forms and Flask Security", description: "Enhanced form handling with security features." },
      { name: "Finalize Cafe & Wifi App", description: "Complete app with authentication and user management." }
    ],
    advancedAuth: [
      { name: "REST API with Flask", description: "Building RESTful services in Flask." },
      { name: "Advanced REST API", description: "Authentication and authorization in APIs." },
      { name: "BMI Calculator API", description: "Health metric calculation service." },
      { name: "Flight Deals REST API", description: "Travel deal search API with flight information." },
      { name: "Decorators Deep Dive", description: "Advanced Python decorator patterns and uses." },
      { name: "Advanced Decorators + Authentication", description: "Using decorators for authentication flows." },
      { name: "RESTful API Authentication Project", description: "Complete API with robust authentication." },
      { name: "Authentication for Blog App", description: "Adding user authentication to blog platform." },
      { name: "REST API Security", description: "Implementing security best practices in APIs." },
      { name: "Production Deployment", description: "Deploying applications to Heroku platform." },
      { name: "Habit Tracker Full Project", description: "Complete habit tracking application." },
      { name: "Habit Tracker with Data Storage", description: "Enhanced tracker with persistent data." },
      { name: "Full Stack Habit Tracker", description: "Complete app with front-end, back-end, and authentication." }
    ]
  },
  
  // Web Game Projects
  webGames: [
    {
      name: "Rock Paper Scissors",
      description: "Rock, Paper, Scissors is a dynamic, browser-based game where users can challenge the computer in quick matches of strategy and luck. With sleek visuals and real-time feedback, players receive instant results after each round. The game tracks wins, losses, and ties, with animated transitions between states. Players can select their weapon of choice with a simple click, and the interface adapts seamlessly from mobile to desktop. Features include sound effects for wins and losses, a persistent scoreboard using localStorage, and an optional dark mode toggle. The clean UI highlights the player's choice against the computer's with visual cues for winning combinations, making this classic game both engaging and accessible for all ages.",
      link: "https://rock-paper-game-psi.vercel.app/",
      date: "Nov 2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      skills: ["HTML5 & CSS3", "JavaScript DOM Manipulation", "Event Handling", "Conditional Logic", "Responsive Design", "Dark Mode Toggle", "Sound Effects", "LocalStorage"]
    },
    {
      name: "Calculator App",
      description: "This responsive calculator application performs basic arithmetic operations with a clean, intuitive interface. Designed for both precision and ease of use, it features a traditional calculator layout with large buttons and a clear display. Users can perform addition, subtraction, multiplication, and division operations with immediate feedback. The calculator supports both button clicks and keyboard input for accessibility and convenience. Advanced features include memory functions, percentage calculations, and a toggling number sign. The app dynamically adjusts to different screen sizes, ensuring a consistent experience across devices. A theme toggle allows users to switch between light, dark, and high-contrast modes, with preferences saved using localStorage. The calculator also includes visual feedback for button presses and sound effects that can be enabled or disabled according to user preference.",
      link: "https://arcade-math-wizard.vercel.app/",
      date: "Dec 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      skills: ["HTML & CSS", "JavaScript", "DOM Manipulation", "Responsive Design", "Keyboard Event Listeners", "Python Backend", "Theme Toggling", "LocalStorage"]
    },
    {
      name: "Ping-Pong Game",
      description: "This classic 2D Ping-Pong game offers a nostalgic arcade experience with modern implementations. Built using Python with the turtle graphics module, it features responsive paddles controlled by keyboard inputs that move smoothly along the vertical axis. The game physics include realistic ball movement with increasing speed as rallies progress, accurate collision detection with both paddles and walls, and authentic bounce angles based on where the ball hits the paddle. The two-player mode allows friends to compete side-by-side using different keyboard controls, while the intuitive scoring system displays points prominently on the screen. The clean, minimalist design focuses attention on the gameplay, with distinct colors for the background, paddles, and ball. An optional AI opponent provides a challenge for solo players, with difficulty settings that can be adjusted. The game runs smoothly in any Python environment, making it accessible across different platforms.",
      link: "https://ping-pong-game-one-rosy.vercel.app/",
      date: "Nov 2024",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      skills: ["Python Programming", "Game Logic Design", "Event Handling", "Real-time Rendering", "Collision Detection", "Score Tracking"]
    },
    {
      name: "Snake Game",
      description: "This retro-style Snake Game revives the classic arcade experience with modern programming techniques. Players control a snake that grows longer each time it consumes food, while avoiding collisions with walls and its own body. The game features intuitive keyboard controls for smooth navigation in four directions, with the snake's movement continuously updating at consistent intervals. The procedurally generated food appears at random valid locations, and a clearly visible score counter increases with each successful catch. The game implements precise collision detection for both the walls and the snake's body segments, immediately triggering a game-over state when collisions occur. A high score system using localStorage preserves the best performances across sessions. The clean visual design uses contrastive colors with a grid-based layout, making the game elements easily distinguishable. Sound effects accompany food consumption, collisions, and game-over events, enhancing the nostalgic gaming experience.",
      link: "https://snake-game-online-three.vercel.app/",
      date: "Dec 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      skills: ["Core Python Programming", "Game Loop Logic", "Object-Oriented Design", "Event Handling", "Collision Detection", "Score Management", "Turtle Graphics"]
    },
    {
      name: "Weather App",
      description: "This sleek weather application provides real-time meteorological data for locations worldwide through seamless API integration. Users can search for any city to instantly view current conditions, including temperature, weather descriptions, humidity levels, wind speed, and atmospheric pressure. The app features a dynamic interface that changes based on weather conditions, with unique backgrounds and icons representing sunny, cloudy, rainy, or snowy states. The responsive design ensures optimal viewing across all devices, automatically adjusting layouts for desktop, tablet, and mobile screens. A five-day forecast provides extended weather predictions, helping users plan ahead. Geolocation functionality allows users to quickly access weather information for their current position with a single click. The app implements robust error handling for invalid searches or API failures, with clear user feedback. Temperature units can be toggled between Celsius and Fahrenheit according to user preference, with selections saved to localStorage for future visits.",
      link: "https://weather-app-ruddy-zeta.vercel.app/",
      date: "Jan 2025",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      skills: ["HTML/CSS/JavaScript", "API Integration", "DOM Manipulation", "Responsive Design", "Error Handling", "Backend Integration"]
    },
    {
      name: "To-Do List",
      description: "This intuitive to-do list application helps users organize and manage their daily tasks with efficiency and simplicity. The clean, minimalist interface allows for quick task creation, with options to add titles, descriptions, due dates, and priority levels. Tasks can be edited after creation, marked as complete with a visual strikethrough, or deleted entirely when no longer needed. The application implements dynamic filtering options, enabling users to view all tasks, only active items, or completed tasks. Categories and tags can be assigned to each task for better organization, with color-coding based on priority or category. The drag-and-drop functionality allows for easy reordering of tasks based on importance or sequence. All data persists between sessions using localStorage, ensuring users never lose their task lists. The responsive design works seamlessly across devices, with optimized layouts for both touch and mouse interactions. Optional features include reminder notifications, search functionality to quickly locate specific tasks, and dark/light theme options for comfortable viewing in different environments.",
      link: "https://to-do-list-steel-alpha-59.vercel.app/",
      date: "Feb 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      skills: ["HTML/CSS/JavaScript", "DOM Manipulation", "LocalStorage", "Responsive Design", "CRUD Operations", "Backend Integration"]
    },
    {
      name: "Angry Birds Clone",
      description: "This 2D web-based game recreates the popular Angry Birds experience directly in the browser. Players use a slingshot mechanism to launch birds at structures sheltering enemy targets. The game features realistic physics with gravity affecting all objects, accurate collision detection between birds and structures, and satisfying structural collapse animations. The intuitive controls allow players to aim by dragging the slingshot backward, with the launch velocity determined by how far they pull. Each level presents unique architectural challenges requiring strategic aiming and timing. The scoring system awards points based on destruction efficiency and remaining birds, with star ratings indicating performance. Players progress through increasingly difficult levels, with new bird types introducing special abilities like splitting into multiple projectiles or explosive impacts. Sound effects enhance the gameplay experience, with distinct sounds for launching, collisions, and structure collapses. The responsive design ensures the game plays well on both desktop and mobile browsers, with touch controls automatically enabled on touch-capable devices.",
      link: "#",
      date: "May 2025",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      skills: ["JavaScript ES6", "HTML5 Canvas", "Matter.js Physics", "Event Handling", "Game Design", "Animation", "Responsive Web Design", "Version Control"]
    },
    {
      name: "Candy Crush",
      description: "This browser-based match-3 puzzle game captures the addictive essence of Candy Crush with bright, colorful visuals and satisfying gameplay mechanics. Players interact with a grid of various candy types, swapping adjacent pieces to create matches of three or more identical candies. Successful matches clear the candies from the board with sparkling animations, triggering cascading effects as new candies fall from the top to fill empty spaces. The game tracks scores based on match size and combo chains, with special rewards for larger matches. Creating matches of four or more candies generates special power-ups with unique effects, such as row or column clearers, while specific pattern matches create even more powerful candies. Players face the challenge of limited moves per level, requiring strategic planning to meet objectives like reaching a target score, clearing specific candy types, or removing obstacles. Progressive difficulty introduces blockers, locked candies, and other challenges that require specific strategies to overcome. The responsive interface adapts to any device, with both click and touch controls supported for intuitive gameplay across platforms.",
      link: "https://candy-crush-smoky.vercel.app/",
      date: "May 2025",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      skills: ["JavaScript ES6+", "DOM Manipulation", "Event Handling", "Grid-Based Design", "Animation", "Responsive Design", "Game UI", "Debugging & Testing"]
    },
    {
      name: "Word Puzzle Game",
      description: "This engaging word puzzle game challenges players' vocabulary and quick thinking as they create valid English words from a set of randomly generated letters. The core gameplay revolves around selecting letters to form words, with points awarded based on word length and the complexity of letters used. A real-time dictionary API validates submissions, providing instant feedback on word acceptance. The game features a countdown timer that creates exciting pressure, forcing players to think quickly and strategically about which words will maximize their score before time expires. The clean, intuitive interface displays the letter grid prominently, with clear indicators for selected letters and formed words. Visual and audio feedback acknowledge successful submissions, with special animations for particularly impressive words. The scoring system rewards longer words exponentially, encouraging players to stretch their vocabulary. Multiple game modes include timed challenges, word quotas, and daily puzzles with persistent leaderboards. The responsive design ensures comfortable play on any device, with both touch and keyboard input supported. Advanced features include hints for struggling players and optional categories that restrict valid words to specific themes like animals or foods.",
      link: "https://word-puzzle-game-orpin.vercel.app/",
      date: "May 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      skills: ["JavaScript ES6+", "HTML5 & CSS3", "API Integration", "DOM Manipulation", "Responsive Design", "Timer & Game Loops", "User Feedback", "Event Handling"]
    }
  ],
  
  // Full Stack Projects
  fullStackProjects: [
    {
      name: "TaskFlow Dashboard",
      description: "TaskFlow Dashboard is a comprehensive task management application inspired by Trello, designed for individuals and teams to efficiently organize and track their workflows. The intuitive drag-and-drop interface allows users to create task boards with customizable columns representing different stages of work (e.g., To Do, In Progress, Review, Complete). Tasks can be created with detailed information including titles, descriptions, due dates, priority levels, attachments, and assigned team members. The real-time collaboration features enable multiple team members to simultaneously update tasks and see changes instantly, fostering better teamwork and transparency. The application includes robust filtering and sorting capabilities, allowing users to organize tasks by due date, priority, assignee, or custom tags. The dashboard view provides visual analytics on project progress and team productivity through charts and statistics. User authentication is implemented with secure JWT tokens, with role-based permissions controlling access to different features. The responsive design ensures a seamless experience across desktop and mobile devices, with offline capabilities allowing limited functionality even without an internet connection. Data is securely stored in MongoDB, with regular backups and encryption for sensitive information.",
      link: "https://taskflow-dashboard-craft.vercel.app/",
      date: "March 2025",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      skills: ["React", "Node.js/Express", "MongoDB", "JWT Authentication", "Drag & Drop", "Real-time Updates", "Charts & Analytics", "Responsive Design"]
    },
    {
      name: "Balance Track Hub",
      description: "Balance Track Hub is a sophisticated personal finance manager that empowers users to take control of their financial health through comprehensive tracking and visualization tools. The application enables users to log and categorize both income and expenses with custom categories and tags, providing a detailed breakdown of spending patterns. Interactive charts and graphs visualize financial data in multiple formats, including pie charts for expense categories, line graphs for income trends over time, and bar charts for month-to-month comparisons. Users can set and track budgets for different categories, with customizable alerts when approaching or exceeding limits. The dashboard presents key financial metrics at a glance, including current balance, monthly spending patterns, savings rate, and progress toward financial goals. Transaction data can be manually entered or automatically imported from bank accounts through secure API connections, with machine learning algorithms suggesting appropriate categories based on transaction descriptions. The application includes goal-setting features for saving targets, with visual progress indicators and projected completion dates based on current savings rates. Reports can be generated in various formats (PDF, CSV, Excel) for specific date ranges, categories, or accounts. Advanced security measures include encryption for all financial data, two-factor authentication, and compliance with financial data protection standards.",
      link: "https://balance-track-hub-viny.vercel.app/",
      date: "April 2025",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      skills: ["React", "Node.js", "MongoDB", "Chart.js", "Authentication", "Data Visualization", "Export Functionality", "RESTful API"]
    },
    {
      name: "E-Commerce Store",
      description: "This comprehensive e-commerce platform delivers a complete online shopping experience with features rivaling major marketplaces. The product catalog is organized with intuitive navigation through categories, tags, and filters, helping customers quickly find items based on price range, ratings, features, or brand. Each product page includes high-resolution images, detailed descriptions, specifications, pricing information, availability status, and customer reviews. The shopping cart system allows users to add multiple items, adjust quantities, save for later, and proceed to checkout with secure payment processing through Stripe integration. User accounts provide personalized experiences with saved shipping addresses, payment methods, order history, and product recommendations based on browsing and purchase history. The search functionality includes autocomplete suggestions, spellcheck corrections, and relevant results ranking. Administrative features enable store owners to manage inventory, process orders, track shipments, and analyze sales data through a secure dashboard. Customer service tools include a chatbot for common questions, support ticket system, and order tracking capabilities. The platform implements SEO best practices for better product discoverability in search engines. Security measures include encrypted payment processing, secure user authentication, and protection against common e-commerce vulnerabilities.",
      link: "https://ecommerce-seven-eta-21.vercel.app/",
      date: "May 2025",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      skills: ["Next.js/React", "Node.js", "MongoDB/MySQL", "Stripe Integration", "Authentication", "Admin Dashboard", "Order Management", "Search Functionality"]
    }
  ]
};
