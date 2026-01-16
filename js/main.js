/**
 * Fichier : js/main.js
 * Gestion de la navigation, du filtrage, de la barre de progression et de l'avatar
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DES ONGLETS DE NAVIGATION ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-target');

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            window.scrollTo(0, 0);
        });
    });

    // --- 2. GESTION DU FILTRAGE DU PORTFOLIO ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');

                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                projectItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        item.classList.add('active');
                        item.style.display = "block";
                    } else {
                        item.classList.remove('active');
                        item.style.display = "none";
                    }
                });
            });
        });
    }

    // --- 3. BARRE DE PROGRESSION DYNAMIQUE (SKILLS) ---
    const skillsBanner = document.querySelector('.skills-banner');
    const scrollFill = document.querySelector('.skills-scrollbar-fill');

    if (skillsBanner && scrollFill) {
        skillsBanner.addEventListener('scroll', () => {
            const maxScroll = skillsBanner.scrollWidth - skillsBanner.clientWidth;
            const scrollPercentage = (skillsBanner.scrollLeft / maxScroll) * 100;
            scrollFill.style.left = (scrollPercentage * 0.7) + "%";
        });
    }

    // --- 4. GESTION DU FLIP DE L'AVATAR (AJOUTÉ) ---
    // Cette partie détecte le clic sur l'id "avatar-flip" que nous avons mis dans le HTML
    const avatarFlip = document.getElementById('avatar-flip');

    if (avatarFlip) {
        avatarFlip.addEventListener('click', () => {
            // Ajoute ou retire la classe .is-flipped à chaque clic
            avatarFlip.classList.toggle('is-flipped');
        });
    }
});