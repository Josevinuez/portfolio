import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building2, Award } from 'lucide-react'


const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: 'Technical Application Consultant',
      company: 'PazNetWorks.inc',
      location: 'Charlotte, NC, USA',
      period: 'Dec 2022 - Present',
      type: 'Full-time',
      description: 'Collaborate with customers to integrate and optimize software products, ensuring seamless functionality and maximum efficiency. Lead cross-functional teams and provide technical solutions.',
      achievements: [
        'Led a cross-functional team of 5 to integrate and optimize software products, increasing customer system efficiency by 30%',
        'Resolved an average of 50+ technical issues per week, providing prompt solutions that improved customer satisfaction ratings by 25%',
        'Managed the end-to-end development and testing of 3 new product releases, enhancing product functionality and aligning with 10+ customer specifications',
        'Fostered strong partnerships by working closely with 4 development teams and coordinating with 20+ customers, resulting in a 15% increase in successful project deliveries',
        'Authored 20+ comprehensive technical documents, including user guides and troubleshooting manuals, which reduced incoming customer support tickets by 20%',
        'Utilized analytical skills to deconstruct and solve complex technical challenges, resulting in a 40% reduction in issue resolution time'
      ],
      technologies: ['Java', 'Python', 'SQL', 'PostgreSQL', 'Eclipse', 'VMWare', 'Microsoft Office']
    }
  ]

  const education = [
    {
      degree: 'Computer Engineering Technology - Computer Science',
      school: 'Algonquin College',
      location: 'Ottawa, ON, Canada',
      period: '2022 - 2024',
      gpa: '3.61/4.0',
      honors: 'Dean\'s Honours List 2022 Spring Term',
      relevant: [
        'Application Development',
        'Data Structures and Algorithms',
        'Computer Systems and Networks',
        'Database Systems',
        'Software Development Methodologies',
        'Programming Languages (Java, C, C++, COBOL)'
      ]
    }
  ]

  const certifications = [
    {
      name: 'IBM Cybersecurity Analyst Specialization',
      issuer: 'IBM',
      date: 'Mar 2023',
      credential: 'IBM-CYB-001',
      description: 'Proficiency in cybersecurity analyst tools, data protection techniques, endpoint protection strategies, SIEM systems, and network fundamentals'
    }
  ]

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
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
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
              <span className="gradient-text">Experience & Education</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My professional journey and academic background
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <Building2 className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full" />
                    
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                            {exp.title}
                          </h4>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location} • {exp.type}
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Education & Certifications
              </h3>
              
              {/* Education */}
              <div className="mb-12">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Education
                </h4>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                    className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg mb-6"
                  >
                    <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {edu.degree}
                    </h5>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.school}
                    </p>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location} • {edu.period} • GPA: {edu.gpa}
                      {edu.honors && (
                        <span className="ml-2 px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                          {edu.honors}
                        </span>
                      )}
                    </div>
                    
                    <div>
                      <h6 className="font-medium text-slate-900 dark:text-white mb-2">
                        Relevant Coursework:
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Certifications
                </h4>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                      className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-slate-900 dark:text-white">
                            {cert.name}
                          </h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                        <span className="text-xs text-primary-600 dark:text-primary-400 font-mono">
                          {cert.credential}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
