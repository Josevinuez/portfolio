// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Sticky Navigation with Active Section Highlighting
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active navigation link based on scroll position
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Dark/Light Theme Toggle
const currentTheme = localStorage.getItem('theme') || 'dark';
body.classList.toggle('light-theme', currentTheme === 'light');

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('light-theme')) {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

updateThemeIcon();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Services Carousel
class ServicesCarousel {
    constructor() {
        this.carouselTrack = document.querySelector('.carousel-track');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.serviceItems = document.querySelectorAll('.service-item');
        this.currentIndex = 0;
        this.totalItems = this.serviceItems.length;
        this.itemWidth = 250; // min-width from CSS
        this.gap = 20; // gap from CSS
        this.itemsPerView = 3;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.updateItemsPerView();
        this.updateCarousel();
        this.setupEventListeners();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.updateItemsPerView();
            this.updateCarousel();
        });
    }
    
    updateItemsPerView() {
        const width = window.innerWidth;
        if (width < 768) {
            this.itemsPerView = 1;
        } else if (width < 1024) {
            this.itemsPerView = 2;
        } else {
            this.itemsPerView = 3;
        }
    }
    
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Touch/swipe support
        let startX = 0;
        let endX = 0;
        
        this.carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.carouselTrack.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
        
        // Mouse drag support
        let isDragging = false;
        let startMouseX = 0;
        
        this.carouselTrack.addEventListener('mousedown', (e) => {
            isDragging = true;
            startMouseX = e.clientX;
            this.carouselTrack.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        document.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            this.carouselTrack.style.cursor = 'grab';
            this.handleSwipe(startMouseX, e.clientX);
        });
    }
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    updateCarousel() {
        if (this.isAnimating) return;
        
        const itemWidthWithGap = this.itemWidth + this.gap;
        const translateX = -this.currentIndex * itemWidthWithGap;
        
        this.carouselTrack.style.transform = `translateX(${translateX}px)`;
        
        // Update button states
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.totalItems - this.itemsPerView;
    }
    
    nextSlide() {
        if (this.isAnimating) return;
        
        if (this.currentIndex < this.totalItems - this.itemsPerView) {
            this.currentIndex++;
            this.updateCarousel();
        } else {
            // Loop back to beginning
            this.currentIndex = 0;
            this.updateCarousel();
        }
    }
    
    prevSlide() {
        if (this.isAnimating) return;
        
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        } else {
            // Loop to end
            this.currentIndex = Math.max(0, this.totalItems - this.itemsPerView);
            this.updateCarousel();
        }
    }
}

// Project Data
const projects = [
    {
        slug: "next-venture",
        name: "Next Ventures",
        blurb: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
        features: [
            "Leveraged Partial Prerendering and modern routing for faster loading.",
            "Simplified idea submission with a clean, intuitive design.",
            "Enhanced browsing with seamless performance optimization.",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Sanity CMS", "Auth.js", "Markdown", "GROQ", "Sentry"],
        accent: "text-pink-600"
    },
    {
        slug: "zenith-minds",
        name: "Zenith Minds",
        blurb: "Connects learners and instructors with rich profiles, messaging, and curated courses.",
        features: [
            "Role-based onboarding and content discovery.",
            "Calendar-integrated scheduling.",
            "Mobile-first layouts with offline fallbacks.",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
        accent: "text-blue-600"
    },
    {
        slug: "snippix",
        name: "Snippix",
        blurb: "Create, tag, and embed code snippets with first-class DX and social sharing.",
        features: [
            "Syntax-highlighted editing with copy and import flows.",
            "Collaborative collections and private workspaces.",
            "Powerful search with tags and languages.",
        ],
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
        accent: "text-teal-600"
    },
    {
        slug: "portfolio",
        name: "Personal Portfolio",
        blurb: "A fast, accessible personal site with case studies, writing, and a CMS-backed blog.",
        features: [
            "Content modeled for long-form case studies.",
            "Image optimization and responsive art direction.",
            "SEO-friendly metadata and Open Graph.",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        accent: "text-purple-600"
    },
    {
        slug: "star-forge",
        name: "StarForge",
        blurb: "A conversion-focused marketing site with pricing, FAQs, and product demos.",
        features: [
            "A/B-testable hero and CTA blocks.",
            "CMS-driven testimonials and logos.",
            "Fast, edge-cached deployment.",
        ],
        stack: ["Next.js", "Tailwind CSS", "TypeScript"],
        accent: "text-pink-600"
    }
];

// Project Card Interactions
const projectCards = document.querySelectorAll('[data-project]');
let selectedProject = 0;

function updateProjectDetails(projectIndex) {
    const project = projects[projectIndex];
    if (!project) return;

    // Update project name
    document.getElementById('project-name').textContent = project.name;
    
    // Update project blurb
    document.getElementById('project-blurb').textContent = project.blurb;
    
    // Update project features
    const featuresContainer = document.getElementById('project-features');
    featuresContainer.innerHTML = project.features.map(feature => `
        <li class="flex items-start text-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="mr-2 mt-0.5 size-5 shrink-0 fill-pink-600 text-pink-600" aria-hidden>
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
            </svg>
            ${feature}
        </li>
    `).join('');
    
    // Update project stack
    const stackContainer = document.getElementById('project-stack');
    stackContainer.innerHTML = project.stack.map(tech => `
        <span class="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/90">${tech}</span>
    `).join('');
}

// Add hover interactions
projectCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        selectedProject = index;
        updateProjectDetails(selectedProject);
    });
    
    card.addEventListener('focus', () => {
        selectedProject = index;
        updateProjectDetails(selectedProject);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.tech-item, .service-item, .grid-card, [data-project]');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize carousel
    new ServicesCarousel();
});

// Add hover effects to project cards
document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Copy email functionality
document.querySelector('.btn-secondary')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('jose.vinueza@email.com').then(() => {
        const btn = e.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#10b981';
        btn.style.borderColor = '#10b981';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 2000);
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.ring');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.1);
        element.style.transform = `translate(-50%, -50%) translateY(${scrolled * speed}px)`;
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Responsive carousel adjustments
window.addEventListener('resize', () => {
    const carousel = document.querySelector('.services-carousel');
    if (carousel) {
        const width = window.innerWidth;
        if (width < 768) {
            carousel.querySelector('.carousel-track').style.setProperty('--items-per-view', '1');
        } else if (width < 1024) {
            carousel.querySelector('.carousel-track').style.setProperty('--items-per-view', '2');
        } else {
            carousel.querySelector('.carousel-track').style.setProperty('--items-per-view', '3');
        }
    }
});

console.log('Portfolio website loaded successfully! 🚀');