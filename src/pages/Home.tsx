import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '@components/sections/Hero'
import About from '@components/sections/About'
import Skills from '@components/sections/Skills'
import Projects from '@components/sections/Projects'
import Experience from '@components/sections/Experience'
import Contact from '@components/sections/Contact'
import ScrollProgress from '@components/ScrollProgress'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jose Vinueza - Full Stack Developer & Computer Science Graduate</title>
        <meta 
          name="description" 
          content="Computer Science graduate and Full Stack Developer specializing in React, Node.js, and modern web technologies. Building innovative solutions and digital experiences." 
        />
        <meta name="keywords" content="Jose Vinueza, Full Stack Developer, Computer Science, React, Node.js, JavaScript, TypeScript, Web Development" />
        <meta property="og:title" content="Jose Vinueza - Full Stack Developer" />
        <meta property="og:description" content="Computer Science graduate and Full Stack Developer specializing in modern web technologies." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jose Vinueza - Full Stack Developer" />
        <meta name="twitter:description" content="Computer Science graduate and Full Stack Developer specializing in modern web technologies." />
      </Helmet>

      <ScrollProgress />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </motion.div>
    </>
  )
}

export default Home
