// ========================================
// CLIPPER WEB DESIGN - SCRIPT.JS
// Vanilla JavaScript (ES6+)
// ========================================

// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================

(function initMobileNav() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle active class on nav menu
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking nav links on mobile
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    navMenu.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
})();

// ========================================
// AUDIT FORM VALIDATION
// ========================================

(function initAuditForm() {
    const auditForm = document.getElementById('auditForm');

    if (auditForm) {
        auditForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form field values
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const websiteUrl = document.getElementById('websiteUrl').value.trim();

            // Validation flags
            let isValid = true;
            let errorMessage = '';

            // Validate full name (not empty)
            if (fullName === '') {
                isValid = false;
                errorMessage += 'Please enter your full name.\n';
            }

            // Validate email (contains @)
            if (email === '' || !email.includes('@')) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }

            // Validate website URL (not empty)
            if (websiteUrl === '') {
                isValid = false;
                errorMessage += 'Please enter your website URL.\n';
            }

            // If validation passes
            if (isValid) {
                // In a real implementation, this would submit to a server
                alert('Thank you! Your audit request has been submitted. We\'ll send your performance report within 48 hours.');
                auditForm.reset();
            } else {
                // Show validation errors
                alert('Please correct the following errors:\n\n' + errorMessage);
            }
        });
    }
})();

// ========================================
// CONTACT FORM VALIDATION
// ========================================

(function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form field values
            const contactName = document.getElementById('contactName').value.trim();
            const contactEmail = document.getElementById('contactEmail').value.trim();
            const contactMessage = document.getElementById('contactMessage').value.trim();

            // Validation flags
            let isValid = true;
            let errorMessage = '';

            // Validate name (not empty)
            if (contactName === '') {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
            }

            // Validate email (contains @)
            if (contactEmail === '' || !contactEmail.includes('@')) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }

            // Validate message (not empty)
            if (contactMessage === '') {
                isValid = false;
                errorMessage += 'Please enter a message.\n';
            }

            // If validation passes
            if (isValid) {
                // In a real implementation, this would submit to a server
                alert('Thank you for your message! We\'ll respond within 24 hours.');
                contactForm.reset();
            } else {
                // Show validation errors
                alert('Please correct the following errors:\n\n' + errorMessage);
            }
        });
    }
})();

// ========================================
// SMOOTH SCROLL ENHANCEMENT (Optional)
// ========================================

(function initSmoothScroll() {
    // This is handled by CSS scroll-behavior: smooth
    // but adding programmatic fallback for older browsers
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#' && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
})();
