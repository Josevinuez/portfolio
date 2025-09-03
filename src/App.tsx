import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Lazy load components for better performance
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Projects = lazy(() => import('@pages/Projects'))
const Contact = lazy(() => import('@pages/Contact'))
const Blog = lazy(() => import('@pages/Blog'))
const ProjectDetail = lazy(() => import('@pages/ProjectDetail'))

// Components
import Layout from '@components/Layout'
import LoadingSpinner from '@components/ui/LoadingSpinner'
import ErrorBoundary from '@components/ErrorBoundary'

function App() {
  const location = useLocation()

  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
