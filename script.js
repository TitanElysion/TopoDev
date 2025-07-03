document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    
    let currentSlide = 0;
    let interval;

    // Initialisation
    slides[currentSlide].classList.add('active');

    // Création des boutons de navigation
    const navigation = document.createElement('div');
    navigation.className = 'slider-navigation';

    slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = index === 0 ? 'active' : '';
        button.addEventListener('click', () => goToSlide(index));
        navigation.appendChild(button);
    });

    slider.appendChild(navigation);

    // Fonctions de navigation
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        
        currentSlide = index;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    // Démarrage du slider automatique avec une durée de 5 secondes
    interval = setInterval(nextSlide, 5000);

    // Pause le slider pendant l'interaction
    slider.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    slider.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 5000);
    });

    // Navigation responsive
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Gestion du formulaire
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Ici vous pouvez ajouter la logique d'envoi du formulaire
            alert('Merci pour votre message ! Nous vous répondrons rapidement.');
            contactForm.reset();
        });
    }
});
