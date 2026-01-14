// Populate icons dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with data-icon attribute and populate them
    document.querySelectorAll('[data-icon]').forEach(element => {
        const iconName = element.getAttribute('data-icon');
        element.innerHTML = getIcon(iconName);
    });

    // Typewriter effect
    const phrases = ['Student Developer', 'Ready to Learn', 'Avid Snowboarder', 'Available for Hire', 'Cat lover', 'Aspiring Intern', 'Car Enthusiast'];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter-text');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    function typeWriter() {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isDeleting) {
            // Delete characters
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;

            if (currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(typeWriter, pauseBeforeType);
                return;
            }
            setTimeout(typeWriter, deletingSpeed);
        } else {
            // Type characters
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;

            if (currentCharIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeWriter, pauseBeforeDelete);
                return;
            }
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start the typewriter effect after a short delay
    setTimeout(typeWriter, 1000);

    // Dark mode toggle
    let vantaEffect = null;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);

    // Initialize Vanta background based on theme
    function initVantaBackground(theme) {
        if (vantaEffect) {
            vantaEffect.destroy();
        }

        if (theme === 'dark') {
            if (typeof VANTA !== 'undefined' && VANTA.CLOUDS) {
                vantaEffect = VANTA.CLOUDS({
                    el: "#vanta-bg",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    skyColor: 0x1a1a2e,
                    cloudColor: 0x16213e,
                    cloudShadowColor: 0x0f3460,
                    sunColor: 0x533483,
                    sunGlareColor: 0x7b2cbf,
                    sunlightColor: 0x9d4edd,
                    speed: 1
                });
            }
            themeIcon.setAttribute('data-icon', 'moon');
            themeIcon.innerHTML = getIcon('moon');
        } else {
            if (typeof VANTA !== 'undefined' && VANTA.CLOUDS) {
                vantaEffect = VANTA.CLOUDS({
                    el: "#vanta-bg",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    skyColor: 0x68b8d7,
                    cloudColor: 0xadc1de,
                    cloudShadowColor: 0x183550,
                    sunColor: 0xff9919,
                    sunGlareColor: 0xff6633,
                    sunlightColor: 0xff9933,
                    speed: 1
                });
            }
            themeIcon.setAttribute('data-icon', 'sun');
            themeIcon.innerHTML = getIcon('sun');
        }
    }

    // Initialize with current theme
    initVantaBackground(currentTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        initVantaBackground(newTheme);
    });
});

// Add smooth scrolling to all links
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
        // Close mobile menu when a link is clicked
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Burger menu toggle
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnBurger = burgerBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnBurger && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
}