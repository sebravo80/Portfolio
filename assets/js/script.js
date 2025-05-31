window.addEventListener('load', function() {
    document.body.classList.add('render-complete');
    void document.body.offsetHeight;
});

// Función principal de inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Mi setup inicial
    initNavigation();
    initTypewriterEffect();
    initModalTriggers();
    initAnimations();
    initHoverEffects();
    initIntersectionObservers();
    initGlobalEventListeners();
    initParticles();
    
    document.body.classList.add('dom-loaded');
    document.body.classList.add('render-complete');
    
    // Inicio de animación del hero
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    if (heroContent) heroContent.style.opacity = '1';
    if (heroVisual) heroVisual.style.opacity = '1';
});

// Se simplifica la función initModals para evitar conflictos
function initModalTriggers() {
    const profilePhoto = document.getElementById('profilePhoto');
    const photoModal = document.getElementById('photoModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');

    if (profilePhoto && photoModal) {
        profilePhoto.addEventListener('click', () => {
            photoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', () => {
            if (photoModal) {
                photoModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (photoModal) {
                photoModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Funciones individuales para cada componente
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Scroll suave para enlaces
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
}

function initTypewriterEffect() {
    const dynamicTextElement = document.querySelector('.dynamic-text');
    if (!dynamicTextElement) return;
    
    // Mis frases para la animación de escritura
    const texts = [
        'Ing. en Informática en Proceso',
        'Desarrollador en Proceso',
        'Programador en Proceso',
        'Un vio',
        'El Papá del Johan'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    
    function typeWriter() {
        const fullText = texts[textIndex];
        
        // Lógica de escritura/borrado
        if (isDeleting) {
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!dynamicTextElement) return;
        
        // Actualizar el texto con mi estilo
        dynamicTextElement.innerHTML = `
            <span class="typed-text">${currentText}</span>
            <span class="cursor">|</span>
        `;
        
        // Control de velocidad y timing
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === fullText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
}

function initAnimations() {
    // Animación de números en estadísticas
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = stat.textContent;
            if (!isNaN(target) && target !== '∞') {
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current);
                }, 20);
            }
        });
    };
    
    // Observar la sección about para animar estadísticas
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
}

function initModals() {
    const profilePhoto = document.getElementById('profilePhoto');
    const photoModal = document.getElementById('photoModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');

    if (profilePhoto && photoModal && modalBackdrop && modalClose) {
        profilePhoto.addEventListener('click', () => {
            photoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        modalBackdrop.addEventListener('click', closeModal);
        modalClose.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && photoModal.classList.contains('active')) {
                closeModal();
            }
        });

        function closeModal() {
            photoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

function initHoverEffects() {
    // Efecto hover para proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto hover para categorías de habilidades
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.3}s`;
        
        category.addEventListener('mouseenter', () => {
            const skillItems = category.querySelectorAll('.skill-item');
            skillItems.forEach((item, itemIndex) => {
                setTimeout(() => {
                    item.style.transform = 'scale(1.05) translateY(-5px)';
                }, itemIndex * 50);
            });
        });
        
        category.addEventListener('mouseleave', () => {
            const skillItems = category.querySelectorAll('.skill-item');
            skillItems.forEach((item) => {
                item.style.transform = 'scale(1) translateY(0)';
            });
        });
    });
    
    // Efecto hover para tarjetas de inspiración
    const inspirationCards = document.querySelectorAll('.inspiration-card');
    inspirationCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.4}s`;
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initIntersectionObservers() {
    // Animación de aparición de elementos al hacer scroll
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

    // Observar elementos que necesitan animación
    document.querySelectorAll('.project-card, .skill-category, .inspiration-card').forEach(el => {
        observer.observe(el);
    });
}

function initGlobalEventListeners() {
    // Navbar transparente al hacer scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
        
        // Efecto parallax en hero
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent && scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Función para manejar el resize de la ventana
    window.addEventListener('resize', () => {
        const heroContainer = document.querySelector('.hero-container');
        if (heroContainer && window.innerWidth <= 768) {
            heroContainer.style.gridTemplateColumns = '1fr';
        } else if (heroContainer) {
            heroContainer.style.gridTemplateColumns = '1fr 1fr';
        }
    });
    
    // Konami Code Easter Egg, idea sacada de Internet
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join('') === konamiSequence.join('')) {
            document.body.style.filter = 'hue-rotate(180deg)';
            
            setTimeout(() => {
                document.body.style.filter = '';
                alert('¡Código Konami activado! 🎮 - Desarrollado con ❤️ por Sebastián');
            }, 1000);
            
            konamiCode = [];
        }
    });
}

// Función para crear partículas dinámicamente
function createParticles(containerId, numberOfParticles = 5) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let particlesContainer = container.querySelector('.floating-particles');
    if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        container.appendChild(particlesContainer);
    }
    
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        particle.style.top = `${top}%`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${5 + Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

function initParticles() {
    // Determinar la cantidad de partículas según el ancho de pantalla
    const isMobile = window.innerWidth <= 768;
    const particleCount = {
        hero: isMobile ? 4 : 8,
        about: isMobile ? 3 : 5,
        inspiration: isMobile ? 3 : 6,
        projects: isMobile ? 3 : 6,
        skills: isMobile ? 2 : 5,
        footer: isMobile ? 3 : 7
    };
    
    // Aplicar partículas a varias secciones
    createParticles('hero', particleCount.hero);
    createParticles('about', particleCount.about);
    createParticles('inspiration', particleCount.inspiration);
    createParticles('projects', particleCount.projects);
    createParticles('skills', particleCount.skills);
    createParticles('footer', particleCount.footer);
    
    // Re-crear partículas al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        const isMobileNow = window.innerWidth <= 768;
        if ((isMobile && !isMobileNow) || (!isMobile && isMobileNow)) {
            // Solo recalcular si cambia entre móvil y escritorio
            initParticles();
        }
    });
}
