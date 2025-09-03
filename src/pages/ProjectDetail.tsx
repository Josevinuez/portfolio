import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectDetail = () => {
  const { slug } = useParams()

  // In a real app, you'd fetch this data based on the slug
  const project = {
    id: slug,
    name: 'Sample Project',
    description: 'A detailed description of the project...',
    // ... other project data
  }

  return (
    <>
      <Helmet>
        <title>{project.name} - Jose Vinueza</title>
        <meta name="description" content={`Learn more about ${project.name}, a project by Jose Vinueza.`} />
      </Helmet>
      
      <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {project.name}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              {project.description}
            </p>
            
            {/* Project content would go here */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Project details and case study content would be implemented here...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail
