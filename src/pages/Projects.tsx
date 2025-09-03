import { Helmet } from 'react-helmet-async'
import Projects from '@components/sections/Projects'

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Jose Vinueza</title>
        <meta name="description" content="Explore Jose Vinueza's portfolio of web development projects, including full-stack applications and innovative digital solutions." />
      </Helmet>
      
      <div className="pt-20">
        <Projects />
      </div>
    </>
  )
}

export default ProjectsPage
