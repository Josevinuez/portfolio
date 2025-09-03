import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@utils/cn'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
                    { name: 'Java', level: 100, color: 'from-orange-400 to-orange-600' },
        { name: 'C', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'C++', level: 90, color: 'from-blue-600 to-blue-800' },
        { name: 'Python', level: 100, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-yellow-700' },
        { name: 'COBOL', level: 75, color: 'from-gray-500 to-gray-700' }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 90, color: 'from-orange-500 to-orange-700' },
        { name: 'CSS', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'PHP', level: 80, color: 'from-purple-500 to-purple-700' },
        { name: 'SQL', level: 85, color: 'from-indigo-500 to-indigo-700' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'React', level: 75, color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      title: 'Tools & Systems',
      skills: [
        { name: 'Eclipse', level: 90, color: 'from-purple-400 to-purple-600' },
        { name: 'MySQL Workbench', level: 85, color: 'from-orange-500 to-orange-700' },
        { name: 'VMWare Workstation', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'Microsoft Office', level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'Windows', level: 90, color: 'from-blue-600 to-blue-800' },
        { name: 'Linux', level: 75, color: 'from-yellow-500 to-orange-600' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
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
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Scrolling Technologies */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of technologies */}
                {[
                  { 
                    name: 'React', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Next.js', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'TypeScript', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Tailwind CSS', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Node.js', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Python', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Java', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'PostgreSQL', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Git', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Docker', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'AWS', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Figma', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  }
                ].map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className={`flex-shrink-0 mx-4 px-6 py-3 rounded-full ${tech.color} text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-3 shadow-lg hover:scale-105 transition-transform duration-300`}
                  >
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-6 h-6"
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { 
                    name: 'React', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Next.js', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'TypeScript', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Tailwind CSS', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Node.js', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Python', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Java', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'PostgreSQL', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Git', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Docker', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'AWS', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  },
                  { 
                    name: 'Figma', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                    color: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700' 
                  }
                ].map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className={`flex-shrink-0 mx-4 px-6 py-3 rounded-full ${tech.color} text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-3 shadow-lg hover:scale-105 transition-transform duration-300`}
                  >
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-6 h-6"
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={cn(
                            'h-2 rounded-full bg-gradient-to-r',
                            skill.color
                          )}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.1,
                            duration: 1,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Additional Skills
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Software Integration', 'Technical Documentation', 'Problem Solving', 'Team Leadership',
                'Customer Support', 'Quality Assurance', 'Data Analysis', 'System Optimization',
                'Cybersecurity', 'Machine Learning', 'API Development', 'Database Design'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    delay: 1 + index * 0.05,
                    duration: 0.3 
                  }}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
