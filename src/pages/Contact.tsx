import { Helmet } from 'react-helmet-async'
import Contact from '@components/sections/Contact'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Jose Vinueza</title>
        <meta name="description" content="Get in touch with Jose Vinueza for web development projects, collaborations, or just to say hello!" />
      </Helmet>
      
      <div className="pt-20">
        <Contact />
      </div>
    </>
  )
}

export default ContactPage
