import { Helmet } from 'react-helmet-async'
import About from '@components/sections/About'
import Skills from '@components/sections/Skills'
import Experience from '@components/sections/Experience'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - Jose Vinueza</title>
        <meta name="description" content="Learn more about Jose Vinueza, a Computer Science graduate and Full Stack Developer passionate about creating innovative digital solutions." />
      </Helmet>
      
      <About />
      <Skills />
      <Experience />
    </>
  )
}

export default AboutPage
