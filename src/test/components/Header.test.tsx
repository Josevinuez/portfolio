import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header'

// Mock the useTheme hook
vi.mock('../../hooks/useTheme', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: vi.fn(),
    isDark: false,
    isLight: true
  })
}))

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Header', () => {
  it('renders the logo and navigation', () => {
    renderWithRouter(<Header />)
    
    expect(screen.getByText('Jose Vinueza')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    renderWithRouter(<Header />)
    
    const menuButton = screen.getByLabelText('Toggle menu')
    fireEvent.click(menuButton)
    
    // Mobile menu should be visible
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders social links', () => {
    renderWithRouter(<Header />)
    
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders theme toggle button', () => {
    renderWithRouter(<Header />)
    
    expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument()
  })
})
