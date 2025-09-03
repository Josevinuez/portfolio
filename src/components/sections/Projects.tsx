import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Debug function to ensure state updates
  const handleProjectHover = (index: number) => {
    console.log('Hovering over project:', index, projects[index].name)
    setSelectedProject(index)
    triggerUpdate()
  }

  // Add click handler for better mobile support
  const handleProjectClick = (index: number) => {
    console.log('Clicked on project:', index, projects[index].name)
    setSelectedProject(index)
    triggerUpdate()
  }

  // Function to render custom project representations
  const renderProjectVisual = (imageType: string) => {
    switch (imageType) {
      case 'ai-chat-code':
        return (
          <div className="w-full h-full bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-400 ml-2">ai_chat_bot.py</span>
            </div>
            <div className="space-y-2">
              <div className="text-purple-400">import openai</div>
              <div className="text-purple-400">import json</div>
              <div className="text-purple-400">from typing import Dict, List</div>
              <div className="text-slate-300 mt-4">class <span className="text-blue-400">AIChatBot</span>:</div>
              <div className="text-slate-300 ml-4">def <span className="text-green-400">__init__</span>(self):</div>
              <div className="text-slate-300 ml-8">self.client = openai.OpenAI()</div>
              <div className="text-slate-300 ml-4">def <span className="text-green-400">process_message</span>(self, message: str):</div>
              <div className="text-slate-300 ml-8">response = self.client.chat.completions.create(</div>
              <div className="text-slate-300 ml-12">model=<span className="text-yellow-300">"gpt-4"</span>,</div>
              <div className="text-slate-300 ml-12">messages=[{'{'}<span className="text-yellow-300">"role"</span>: <span className="text-yellow-300">"user"</span>, <span className="text-yellow-300">"content"</span>: message{'}'}]</div>
              <div className="text-slate-300 ml-8">)</div>
              <div className="text-slate-300 ml-8">return response.choices[0].message.content</div>
            </div>
          </div>
        )
      
      case 'zoho-integration':
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <span className="font-semibold text-slate-800">Zoho CRM Integration</span>
              </div>
              
              {/* Integration Flow */}
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm font-medium text-slate-700 mb-2">Integration Flow</div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
                      <span className="text-white text-xs">A</span>
                    </div>
                    <span className="text-slate-600">App A</span>
                  </div>
                  <div className="flex-1 h-px bg-slate-300 mx-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 h-px animate-pulse"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mb-1">
                      <span className="text-white text-xs font-bold">Z</span>
                    </div>
                    <span className="text-slate-600">Zoho CRM</span>
                  </div>
                  <div className="flex-1 h-px bg-slate-300 mx-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 h-px animate-pulse"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mb-1">
                      <span className="text-white text-xs">B</span>
                    </div>
                    <span className="text-slate-600">App B</span>
                  </div>
                </div>
              </div>

              {/* API Status */}
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm font-medium text-slate-700 mb-2">API Status</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Zoho CRM API</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600">Connected</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Third-party APIs</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600">3 Active</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Data Sync</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-600">Real-time</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Python Code Snippet */}
              <div className="bg-slate-900 rounded-lg p-3 text-xs font-mono">
                <div className="text-slate-400 mb-1"># Python Integration</div>
                <div className="text-orange-400">import requests</div>
                <div className="text-orange-400">import json</div>
                <div className="text-slate-300 mt-1">def <span className="text-green-400">sync_data</span>():</div>
                <div className="text-slate-300 ml-2">response = requests.post(</div>
                <div className="text-slate-300 ml-4">url=<span className="text-yellow-300">"zoho_api_endpoint"</span>,</div>
                <div className="text-slate-300 ml-4">data=json.dumps(payload)</div>
                <div className="text-slate-300 ml-2">)</div>
              </div>
            </div>
          </div>
        )
      
      case 'tradein-mockup':
        return (
          <div className="w-full h-full bg-white rounded-lg p-4 shadow-lg">
            <div className="border-2 border-slate-200 rounded-lg p-4 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-semibold text-slate-800">TradeIn Pro</span>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-slate-700">Device Valuation</div>
                  <div className="text-xs text-slate-500">iPhone 13 Pro Max</div>
                  <div className="text-lg font-bold text-green-600">$650</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-slate-700">Trade-in Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600">Approved</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-700">Next Steps</div>
                  <div className="text-xs text-blue-600">Schedule pickup or drop-off</div>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'ml-recommendation':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">ML</span>
                </div>
                <span className="font-semibold text-slate-800">Recommendation Engine</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm font-medium text-slate-700 mb-2">User Preferences</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Formal Style</span>
                    <div className="w-16 h-2 bg-slate-200 rounded-full">
                      <div className="w-12 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Color Preference</span>
                    <div className="w-16 h-2 bg-slate-200 rounded-full">
                      <div className="w-10 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Budget Range</span>
                    <div className="w-16 h-2 bg-slate-200 rounded-full">
                      <div className="w-14 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-sm font-medium text-slate-700 mb-2">Recommended Items</div>
                <div className="space-y-1">
                  <div className="text-xs text-slate-600">• Navy Blue Tuxedo (95% match)</div>
                  <div className="text-xs text-slate-600">• Black Oxford Shoes (92% match)</div>
                  <div className="text-xs text-slate-600">• Silver Cufflinks (88% match)</div>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'battleship-game':
        return (
          <div className="w-full h-full bg-slate-800 rounded-lg p-4">
            <div className="text-center mb-3">
              <span className="text-white font-bold text-sm">BATTLESHIP</span>
            </div>
            <div className="grid grid-cols-10 gap-1 mb-3">
              {Array.from({ length: 100 }, (_, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${
                  i === 15 || i === 16 || i === 17 || i === 18 ? 'bg-red-500' :
                  i === 25 || i === 35 || i === 45 ? 'bg-blue-500' :
                  i === 67 || i === 68 || i === 69 ? 'bg-green-500' :
                  i === 82 || i === 83 ? 'bg-yellow-500' :
                  i === 91 ? 'bg-purple-500' :
                  'bg-slate-600'
                }`}></div>
              ))}
            </div>
            <div className="space-y-1 text-xs text-slate-300">
              <div>Player: 3 hits, 2 misses</div>
              <div>Computer: 2 hits, 1 miss</div>
              <div className="text-green-400">Ships: Carrier (5), Battleship (4), Cruiser (3)</div>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center">
            <span className="text-slate-500">Project Visual</span>
          </div>
        )
    }
  }

  // Function to get tech stack logo and styling
  const getTechLogo = (tech: string) => {
    const techLower = tech.toLowerCase()
    
    if (techLower.includes('python')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('javascript') || techLower.includes('js')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('react')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('node') || techLower.includes('nodejs')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('sql') || techLower.includes('postgresql') || techLower.includes('database')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('git')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('openai')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('zoho') || techLower.includes('crm')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zoho/zoho-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('rest') || techLower.includes('api')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('json')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('automation')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('java')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('html')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('css')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('php')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('cobol')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('c++') || techLower.includes('c')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('machine learning')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('data analysis')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    if (techLower.includes('game development')) {
      return { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
      }
    }
    
    // Default fallback for unknown technologies
    return { 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
      color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
    }
  }

  const projects = [
    {
      id: 'ai-agent-chat',
      name: 'AI Agent Chat Bots',
      tagline: 'Advanced AI-powered chatbots with OpenAI API integration for real-time data fetching and actions.',
      blurb: 'Curated AI chatbots with OpenAI API and tool calling for real-time data fetching and actions, integrated with a variety of applications for enhanced user experience.',
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      shadow: 'shadow-[0_0_40px_rgba(168,85,247,0.4)]',
      image: 'ai-chat-code',
      features: [
        'OpenAI API integration with advanced tool calling capabilities.',
        'Real-time data fetching and processing for dynamic responses.',
        'Multi-application integration for seamless user experience.',
        'Intelligent conversation flow with context awareness.'
      ],
      stack: ['Python', 'OpenAI API', 'JavaScript', 'React', 'Node.js', 'SQL'],
      accent: 'text-purple-300',
      links: {
        live: '#',
        github: 'https://github.com/josevinueza/ai-agent-chat'
      }
    },
    {
      id: 'zoho-crm-integration',
      name: 'Zoho CRM Multi-Platform Integration',
      tagline: 'Comprehensive integration solution connecting Zoho CRM with multiple third-party applications through custom APIs and Python automation.',
      blurb: 'Developed a sophisticated integration platform that seamlessly connects Zoho CRM with various business applications lacking direct integration capabilities. Built using Python, REST APIs, and custom middleware to enable real-time data synchronization and workflow automation.',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      shadow: 'shadow-[0_0_40px_rgba(251,146,60,0.4)]',
      image: 'zoho-integration',
      features: [
        'Custom Python middleware for API communication and data transformation.',
        'Real-time data synchronization between Zoho CRM and multiple third-party applications.',
        'Automated workflow triggers and business process optimization.',
        'Error handling and data validation for reliable integration performance.',
        'Scalable architecture supporting multiple application suites and data formats.'
      ],
      stack: ['Python', 'Zoho CRM API', 'REST APIs', 'JSON', 'SQL', 'Automation'],
      accent: 'text-orange-300',
      links: {
        live: '#',
        github: 'https://github.com/josevinueza/zoho-crm-integration'
      }
    },
    {
      id: 'tradein-pro',
      name: 'TradeIn Pro',
      tagline: 'SaaS Application serving as a mobile device trade-in site with flows, automation, and comprehensive management.',
      blurb: 'A comprehensive SaaS application that serves as a mobile device trade-in site, featuring automated flows, staff dashboard, detailed reports, and content management system.',
      gradient: 'from-blue-600 via-cyan-600 to-teal-600',
      shadow: 'shadow-[0_0_40px_rgba(59,130,246,0.4)]',
      image: 'tradein-mockup',
      features: [
        'Automated trade-in flows with instant valuation.',
        'Comprehensive staff dashboard for management.',
        'Detailed reporting and analytics system.',
        'Content management system for easy updates.',
        'Mobile-responsive design for all devices.'
      ],
      stack: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'CSS', 'HTML'],
      accent: 'text-blue-300',
      links: {
        live: '#',
        github: 'https://github.com/josevinueza/tradein-pro'
      }
    },
    {
      id: 'prom-planner',
      name: 'Prom Planner Recommendation System',
      tagline: 'Machine learning-powered recommendation system for personalized prom planning experiences.',
      blurb: 'Collaborative project developing a recommendation system for the Prom Planner app using machine learning models in Python and responsive JavaScript interface.',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.4)]',
      image: 'ml-recommendation',
      features: [
        'Machine learning models for personalized recommendations.',
        'Responsive user interface with JavaScript integration.',
        'Data collection and pre-processing from multiple sources.',
        'Data privacy measures and collaborative Git development.',
        'Enhanced recommendation accuracy through advanced algorithms.'
      ],
      stack: ['Python', 'JavaScript', 'Machine Learning', 'Git', 'Data Analysis'],
      accent: 'text-emerald-300',
      links: {
        live: '#',
        github: 'https://github.com/josevinueza/prom-planner'
      }
    },
    {
      id: 'battleship-game',
      name: 'Battleship Game',
      tagline: 'Functional Battleship game with intuitive controls and engaging user experience.',
      blurb: 'A fully functional Battleship game developed using Java and Java Swing, featuring intuitive controls, visual feedback, and interactive gameplay elements.',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      shadow: 'shadow-[0_0_40px_rgba(99,102,241,0.4)]',
      image: 'battleship-game',
      features: [
        'Complete game logic with accurate ship placement and hit detection.',
        'Intuitive user interface with visual feedback.',
        'Interactive gameplay elements and victory conditions.',
        'Thorough testing and bug fixing for stability.',
        'Version control with Git for collaborative development.'
      ],
      stack: ['Java', 'Java Swing', 'Git', 'Game Development', 'Object-Oriented Programming'],
      accent: 'text-indigo-300',
      links: {
        live: '#',
        github: 'https://github.com/josevinueza/battleship-game'
      }
    }
  ]

  // Get the active project
  const activeProject = projects[selectedProject]
  
  // Debug: Log the current active project
  console.log('Current active project:', activeProject.name, 'Index:', selectedProject)
  
  // Force re-render when selectedProject changes
  const [forceUpdate, setForceUpdate] = useState(0)
  const triggerUpdate = () => setForceUpdate(prev => prev + 1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </motion.div>

          <div className="projects-container relative mx-auto w-full">
            {/* Cards grid */}
            <div className="projects-grid mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:flex-col lg:gap-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="flex w-full flex-row"
                  onMouseEnter={() => handleProjectHover(index)}
                  onFocus={() => handleProjectHover(index)}
                  onClick={() => handleProjectClick(index)}
                >
                  <div className="flex w-full flex-col lg:mx-10">
                    <div className={`relative cursor-pointer overflow-hidden rounded-2xl border p-1.5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] lg:h-[560px] lg:rounded-3xl lg:p-2 ${
                      selectedProject === index 
                        ? `border-2 border-white/60 bg-gradient-to-br from-white/30 to-white/20 dark:border-white/60 dark:from-white/20 dark:to-white/10 ${project.shadow} ring-2 ring-white/20` 
                        : 'border border-white/20 bg-gradient-to-br from-white/10 to-white/5 dark:border-white/20 dark:from-white/5 dark:to-white/2'
                    }`}>
                      {/* shimmering top border */}
                      <div 
                        className="absolute inset-x-0 top-0 h-px opacity-70" 
                        style={{
                          background: 'linear-gradient(90deg, rgba(0,0,0,0) 20%, rgba(255,255,255,1) 50%, rgba(0,0,0,0) 80%)'
                        }}
                        aria-hidden
                      />
                      
                      {/* gradient canvas */}
                      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.gradient} opacity-20`} aria-hidden />
                      
                      {/* Mobile project title */}
                      <div className={`lg:hidden w-full items-center justify-between px-4 py-4 flex ${project.accent}`}>
                        <h3 className="max-w-[90%] font-serif text-lg tracking-wide">
                          {project.name}
                        </h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="size-5"
                          aria-hidden
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>

                      {/* Desktop overlay copy */}
                      <div className={`hidden w-full items-center justify-between px-12 py-8 lg:flex ${project.accent}`}>
                        <h3 className="max-w-[90%] font-serif text-3xl tracking-wide">
                          {project.tagline}
                        </h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="size-6"
                          aria-hidden
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>

                      {/* Project Visual */}
                      <div className={`w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border border-white/30 transition-all duration-300 will-change-transform lg:mx-auto lg:block lg:rotate-0 lg:hover:scale-[1.08] lg:hover:-rotate-3 ${project.shadow} h-64 lg:h-80`}>
                        {renderProjectVisual(project.image)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sticky sidebar (desktop) */}
            <aside className="projects-sidebar projects-sticky-sidebar hidden lg:block">
              <div className={`my-4 mr-4 h-1 w-6 rounded-full bg-gradient-to-r ${activeProject.gradient}`} aria-hidden />
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                Project {selectedProject + 1} of {projects.length} (Debug: {forceUpdate})
              </div>
              <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl backdrop-blur-sm dark:border-white/20 dark:from-white/5 dark:to-white/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
                        {activeProject.name}
                      </h3>
                    </div>
                    
                    <p className="my-3 text-base font-light text-slate-600 dark:text-slate-300">
                      {activeProject.blurb}
                    </p>

                    <ul className="mt-4 flex list-none flex-col gap-y-3 text-base">
                      {activeProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                          <div className={`mr-3 mt-0.5 size-5 shrink-0 rounded-full bg-gradient-to-r ${activeProject.gradient} flex items-center justify-center`}>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              className="text-white"
                              aria-hidden
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map((tech) => {
                          const { logo, color } = getTechLogo(tech)
                          return (
                            <span
                              key={tech}
                              className={`inline-flex items-center gap-2 rounded-lg ${color} px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                            >
                              <img 
                                src={logo} 
                                alt={`${tech} logo`}
                                className="w-4 h-4"
                              />
                              {tech}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="mt-8 flex gap-4">
                      <a
                        href={activeProject.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${activeProject.gradient} hover:opacity-90 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={activeProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 text-sm font-medium rounded-lg transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </aside>
          </div>

          {/* Mobile Project Details */}
          <div className="lg:hidden mt-12">
            <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl backdrop-blur-sm dark:border-white/20 dark:from-white/5 dark:to-white/2">
              <div className={`my-4 h-1 w-6 rounded-full bg-gradient-to-r ${activeProject.gradient}`} aria-hidden />
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Project {selectedProject + 1} of {projects.length}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                      {activeProject.name}
                    </h3>
                  </div>
                  
                  <p className="my-3 text-base font-light text-slate-600 dark:text-slate-300">
                    {activeProject.blurb}
                  </p>

                  <ul className="mt-4 flex list-none flex-col gap-y-3 text-base">
                    {activeProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                        <div className={`mr-3 mt-0.5 size-5 shrink-0 rounded-full bg-gradient-to-r ${activeProject.gradient} flex items-center justify-center`}>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            className="text-white"
                            aria-hidden
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((tech) => {
                        const { logo, color } = getTechLogo(tech)
                        return (
                          <span
                            key={tech}
                            className={`inline-flex items-center gap-2 rounded-lg ${color} px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                          >
                            <img 
                              src={logo} 
                              alt={`${tech} logo`}
                              className="w-4 h-4"
                            />
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href={activeProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${activeProject.gradient} hover:opacity-90 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={activeProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 text-sm font-medium rounded-lg transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* View All Projects Link */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <a
              href="/projects"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <Eye className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
