import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Users, Lightbulb, Target } from 'lucide-react'


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, scalable, and well-documented code that stands the test of time.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong believer in teamwork and open communication to deliver exceptional results together.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve problems in creative ways.'
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'Committed to delivering high-quality solutions that exceed expectations and user needs.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
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
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I'm a Technical Application Consultant at PazNetWorks.inc with over 2 years of experience 
                  in software integration and optimization. Computer Engineering Technology graduate from 
                  Algonquin College with a 3.61 GPA and Dean's Honours List recognition.
                </p>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  My expertise spans multiple programming languages including Java, C, C++, Python, and web technologies. 
                  I've successfully led cross-functional teams, increased customer system efficiency by 30%, and 
                  resolved 50+ technical issues weekly, improving customer satisfaction by 25%.
                </p>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I'm passionate about creating innovative solutions, from AI-powered chatbots to SaaS applications. 
                  My recent projects include TradeIn Pro, a mobile device trade-in platform, and AI Agent Chat Bots 
                  with OpenAI API integration for real-time data fetching.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    30%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Efficiency Increase
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    2+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    3.61
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    GPA / 4.0
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Issues Resolved/Week
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                    <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
