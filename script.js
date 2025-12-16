// Smooth scroll and intersection observer for animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for fade-in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe all sections - they start hidden
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        // Add delay based on index for staggered effect
        setTimeout(() => {
            observer.observe(section);
        }, index * 100);
    });
    
    // Show first section immediately if it's in viewport
    if (sections.length > 0) {
        const firstSection = sections[0];
        const rect = firstSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            firstSection.classList.add('visible');
        }
    }

    // Smooth hover effects for cards
    const cards = document.querySelectorAll('.app-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Experience items hover effect
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'background-color 0.2s ease';
        });
    });

    // Research items hover effect
    const researchItems = document.querySelectorAll('.research-item');
    researchItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'background-color 0.2s ease';
        });
    });

    // Add click handlers for interactive elements
    const interactiveElements = document.querySelectorAll('.experience-item');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // Add ripple effect
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

    // Parallax effect for header (subtle) - only if scrolled past header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    function handleHeaderParallax() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down - hide header slightly
            header.style.transform = 'translateY(-10px)';
            header.style.opacity = '0.95';
            header.style.transition = 'all 0.3s ease';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
            header.style.transition = 'all 0.3s ease';
        }
        
        lastScrollTop = scrollTop;
    }
    
    window.addEventListener('scroll', handleHeaderParallax, { passive: true });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.1);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .experience-item {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});

// Additional smooth reveal for items within sections
function revealItemsOnScroll() {
    const items = document.querySelectorAll('.experience-item, .education-item, .research-item, .app-item, .achievement-item');
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const itemVisible = 200;
        
        if (itemTop < window.innerHeight - itemVisible && !item.classList.contains('animated')) {
            item.classList.add('animated');
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
}

// Initial check - reveal all items that are in viewport
setTimeout(() => {
    revealItemsOnScroll();
    // Also check if all achievement items exist and are visible
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight + 500) { // More generous threshold
            item.classList.add('animated');
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
}, 500);

window.addEventListener('scroll', revealItemsOnScroll);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close any modals or reset states
    if (e.key === 'Escape') {
        // Add any modal closing logic here
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler for performance
const optimizedScrollHandler = debounce(function() {
    revealItemsOnScroll();
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

