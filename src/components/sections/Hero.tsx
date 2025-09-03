import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Github, Linkedin, Mail, Download, Loader2 } from 'lucide-react'
import { cn } from '@utils/cn'
import { generateFullSitePDF } from '@utils/generatePDF'
import { useState } from 'react'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const handleDownloadResume = async () => {
    setIsGeneratingPDF(true)
    try {
      await generateFullSitePDF()
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setIsGeneratingPDF(false)
    }
  }

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

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Josevinuez', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jose-vinueza-agq', icon: Linkedin },
    { name: 'Email', href: 'mailto:vinu0002@algonquinlive.com', icon: Mail },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[url('/src/assets/images/grid-pattern.svg')] opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200/30 dark:bg-secondary-800/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-200/30 dark:bg-accent-800/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />



      {/* Coding Background with Typing Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* First Code Block - Portfolio Object */}
        <div className="absolute top-1/4 left-1/4 opacity-20 dark:opacity-12 animate-code-float" style={{ animationDelay: '0s' }}>
          <div className="font-mono text-xs lg:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <div className="typing-line typing-delay-1">
              <span className="text-purple-500 animate-rainbow-glow">const</span>
              <span className="text-blue-500 animate-rainbow-glow"> portfolio</span>
              <span className="text-green-500 animate-rainbow-glow"> =</span>
              <span className="text-yellow-500"> {'{'}</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
            <div className="typing-line typing-delay-2">
              <span className="ml-4 text-cyan-500 animate-rainbow-glow">name:</span>
              <span className="text-red-500 animate-rainbow-glow"> 'Jose Vinueza'</span>
              <span className="typing-cursor text-red-500"></span>
            </div>
            <div className="typing-line typing-delay-3">
              <span className="ml-4 text-cyan-500 animate-rainbow-glow">skills:</span>
              <span className="text-yellow-500 animate-rainbow-glow"> ['Java', 'React', 'Python']</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
            <div className="typing-line typing-delay-4">
              <span className="text-yellow-500">{'}'}</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
          </div>
        </div>
        
        {/* Second Code Block - Function */}
        <div className="absolute top-1/3 right-1/4 opacity-20 dark:opacity-12 animate-code-float" style={{ animationDelay: '2s' }}>
          <div className="font-mono text-xs lg:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <div className="typing-line typing-delay-5">
              <span className="text-purple-500 animate-rainbow-glow">function</span>
              <span className="text-blue-500 animate-rainbow-glow"> buildProject</span>
              <span className="text-yellow-500">()</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
            <div className="typing-line typing-delay-6">
              <span className="text-yellow-500"> {'{'}</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
            <div className="typing-line typing-delay-7">
              <span className="ml-4 text-cyan-500 animate-rainbow-glow">return</span>
              <span className="text-green-500 animate-rainbow-glow"> 'Amazing'</span>
              <span className="typing-cursor text-green-500"></span>
            </div>
            <div className="typing-line typing-delay-8">
              <span className="text-yellow-500">{'}'}</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
          </div>
        </div>

        {/* Third Code Block - Import */}
        <div className="absolute bottom-1/3 left-1/3 opacity-20 dark:opacity-12 animate-code-float" style={{ animationDelay: '4s' }}>
          <div className="font-mono text-xs lg:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <div className="typing-line typing-delay-9">
              <span className="text-purple-500 animate-rainbow-glow">import</span>
              <span className="text-blue-500 animate-rainbow-glow"> React</span>
              <span className="text-green-500 animate-rainbow-glow"> from</span>
              <span className="text-red-500 animate-rainbow-glow"> 'react'</span>
              <span className="typing-cursor text-red-500"></span>
            </div>
          </div>
        </div>

        {/* Fourth Code Block - Class */}
        <div className="absolute top-1/2 right-1/3 opacity-20 dark:opacity-12 animate-code-float" style={{ animationDelay: '6s' }}>
          <div className="font-mono text-xs lg:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <div className="typing-line typing-delay-10">
              <span className="text-purple-500 animate-rainbow-glow">class</span>
              <span className="text-blue-500 animate-rainbow-glow"> Developer</span>
              <span className="text-yellow-500"> {'{'}</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
            <div className="typing-line typing-delay-1">
              <span className="ml-4 text-cyan-500 animate-rainbow-glow">constructor</span>
              <span className="text-yellow-500">()</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
            <div className="typing-line typing-delay-2">
              <span className="text-yellow-500"> {'{'}</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
            <div className="typing-line typing-delay-3">
              <span className="ml-8 text-green-500 animate-rainbow-glow">this.skills</span>
              <span className="text-green-500 animate-rainbow-glow"> = 'Expert'</span>
              <span className="typing-cursor text-green-500"></span>
            </div>
            <div className="typing-line typing-delay-4">
              <span className="ml-4 text-yellow-500">{'}'}</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
            <div className="typing-line typing-delay-5">
              <span className="text-yellow-500">{'}'}</span>
              <span className="typing-cursor text-yellow-500"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-slate-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              Jose Vinueza
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-600 dark:text-slate-300 mb-4">
              Technical Application Consultant & 
              <span className="block text-primary-600 dark:text-primary-400 font-semibold">
                Computer Science Graduate
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
                    I build reliable software, solve complex technical challenges, and deliver customer-focused solutions that make systems faster, more efficient, and easier to use.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.a>
            
            <motion.button
              onClick={handleDownloadResume}
              disabled={isGeneratingPDF}
              whileHover={{ scale: isGeneratingPDF ? 1 : 1.05 }}
              whileTap={{ scale: isGeneratingPDF ? 1 : 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGeneratingPDF ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Download className="w-5 h-5 mr-2" />
              )}
              {isGeneratingPDF ? 'Generating PDF...' : 'Download Resume'}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-lg hover:shadow-xl"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
          </div>

          {/* Right Content - Memoji */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <img 
              src="/memoji.png" 
              alt="Jose Vinueza Memoji" 
              className="w-64 h-64 lg:w-96 lg:h-96 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
