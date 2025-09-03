import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

// Mock the lazy components
vi.mock('../pages/Home', () => ({
  default: () => <div>Home Page</div>
}))

vi.mock('../pages/About', () => ({
  default: () => <div>About Page</div>
}))

vi.mock('../pages/Projects', () => ({
  default: () => <div>Projects Page</div>
}))

vi.mock('../pages/Contact', () => ({
  default: () => <div>Contact Page</div>
}))

vi.mock('../pages/Blog', () => ({
  default: () => <div>Blog Page</div>
}))

vi.mock('../pages/ProjectDetail', () => ({
  default: () => <div>Project Detail Page</div>
}))

// Mock components
vi.mock('../components/Layout', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>
}))

vi.mock('../components/ui/LoadingSpinner', () => ({
  default: () => <div data-testid="loading-spinner">Loading...</div>
}))

vi.mock('../components/ErrorBoundary', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="error-boundary">{children}</div>
}))

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    expect(screen.getByTestId('layout')).toBeInTheDocument()
  })

  it('renders home page by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })
})
