// Resume JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('data-width') || bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                bar.classList.add('animated');
            }
        });
    };

    // Initialize skill bar widths
    const skills = {
        'React': 90,
        'TypeScript': 85,
        'Next.js': 80,
        'Vue.js': 75,
        'JavaScript (ES6+)': 90,
        'CSS3': 85,
        'Sass/SCSS': 80,
        'Styled-components': 85,
        'Tailwind CSS': 75,
        'Git': 85,
        'Webpack': 70,
        'Storybook': 75,
        'Jest': 70
    };

    skillBars.forEach(bar => {
        const skillName = bar.closest('.skill-item').querySelector('.skill-name span:first-child').textContent;
        const level = skills[skillName] || 70;
        bar.style.width = level + '%';
        bar.setAttribute('data-width', level + '%');
    });

    // Scroll event listener
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Initial check

    // Smooth scrolling for anchor links
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

    // Print functionality
    const printButton = document.querySelector('.btn-print');
    if (printButton) {
        printButton.addEventListener('click', function() {
            // Add a small delay to ensure styles are applied
            setTimeout(() => {
                window.print();
            }, 100);
        });
    }

    // Add fade-in animation for sections
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
});
