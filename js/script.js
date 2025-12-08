// Cargo Plus Custom Scripts

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeaderScroll();
    initTrackingDemo();
    initContactForm();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('#header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });
}

// Tracking Demo Animation
function initTrackingDemo() {
    const progress = document.getElementById('tracker-progress');
    const checkpoints = document.querySelectorAll('.checkpoint');

    if (!progress || checkpoints.length === 0) return;

    let currentStage = 1;

    // Initial State
    updateTracker(1);

    setInterval(() => {
        currentStage++;
        if (currentStage > 3) currentStage = 1;
        updateTracker(currentStage);
    }, 3000);

    function updateTracker(stage) {
        // Progress Bar
        let percent = 0;
        if (stage === 1) percent = 0;
        if (stage === 2) percent = 50;
        if (stage === 3) percent = 100;

        if (window.innerWidth <= 768) {
            progress.style.height = `${percent}%`;
            progress.style.width = '100%';
        } else {
            progress.style.width = `${percent}%`;
            progress.style.height = '100%';
        }

        // Checkpoints
        checkpoints.forEach(cp => {
            const step = parseInt(cp.dataset.step);
            if (step <= stage) {
                cp.classList.add('active');
            } else {
                cp.classList.remove('active');
            }
        });
    }
}

// Contact Form Validation (Mock)
function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic Validation
        const phone = form.querySelector('input[name="phone"]');
        if (phone && phone.value.length < 10) {
            alert('Please enter a valid phone number.');
            return;
        }

        const btn = form.querySelector('.submit-btn');
        const originalText = btn.innerHTML;

        // Simulating submission
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Quote Requested!';
            btn.style.backgroundColor = 'var(--success)';

            setTimeout(() => {
                form.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = '';
                alert('Thank you! We will contact you shortly.');
            }, 2000);
        }, 1500);
    });
}
