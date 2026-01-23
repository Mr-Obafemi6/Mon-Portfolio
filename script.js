// Gestion du thème clair/sombre
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script chargé');

    // Chargement de la page
    // Masquer l'écran de chargement
    const loading = document.getElementById('loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
            // Supprimer l'élément après l'animation
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }, 1000);
    }

    const themeToggle = document.getElementById('themeToggle');

    if (!themeToggle) {
        console.error('Bouton de thème non trouvé');
        return;
    }

    const themeIcon = themeToggle.querySelector('i');
    console.log('Bouton de thème trouvé:', themeToggle);

    // Vérifier le thème sauvegardé ou utiliser le thème du système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
        savedTheme = prefersDark ? 'dark' : 'light';
        console.log('Aucun thème sauvegardé, utilisation du thème système:', savedTheme);
    } else {
        console.log('Thème chargé depuis le stockage local:', savedTheme);
    }

    // Appliquer le thème au chargement
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Gérer le clic sur le bouton de thème
    themeToggle.addEventListener('click', toggleTheme);
    console.log('Écouteur d\'événement ajouté au bouton de thème');

    // Mettre à jour l'année du copyright
    updateCopyrightYear();

    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-times');
                icon.classList.toggle('fa-bars');
            }
        });

        // Fermer le menu au clic sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Soumission du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Récupérer les valeurs du formulaire
            const formValues = {
                name: this.querySelector('input[name="name"]')?.value,
                email: this.querySelector('input[name="email"]')?.value,
                message: this.querySelector('textarea[name="message"]')?.value
            };

            console.log('Formulaire soumis :', formValues);

            // Afficher un message de succès
            alert('Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.');

            // Réinitialiser le formulaire
            this.reset();
        });
    }
});

function toggleTheme() {
    console.log('Bouton de thème cliqué');
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    console.log('Changement de thème:', currentTheme, '->', newTheme);
    
    // Mettre à jour le thème
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Mettre à jour l'icône
    updateThemeIcon(newTheme);
    
    console.log('Thème mis à jour vers:', newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-toggle i');
    if (!themeIcon) {
        console.error('Icône de thème non trouvée');
        return;
    }
    
    console.log('Mise à jour de l\'icône pour le thème:', theme);
    
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        console.log('Icône changée en soleil');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        console.log('Icône changée en lune');
    }
}

function updateCopyrightYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Supprimer tout le code après la ligne 143
// C'est-à-dire supprimer tout ce qui vient après :
// Menu mobile
const menuToggle = document.getElementById('menuToggle');
// ... jusqu'à la fin du fichier

    // Animation au défilement
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-in');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter une fois au chargement



// Gestion des likes
document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    
    // Vérifier si les éléments existent
    if (!likeButton || !likeCount) return;
    
    const likeIcon = likeButton.querySelector('i');
    const STORAGE_KEY = 'portfolio_likes';
    const USER_LIKED_KEY = 'portfolio_user_liked';

    // Initialiser le compteur
    let likes = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
    let userLiked = localStorage.getItem(USER_LIKED_KEY) === 'true';

    // Mettre à jour l'interface
    function updateLikeUI() {
        likeCount.textContent = likes;
        if (userLiked) {
            likeButton.classList.add('liked');
            if (likeIcon) {
                likeIcon.classList.remove('far');
                likeIcon.classList.add('fas');
            }
        } else {
            likeButton.classList.remove('liked');
            if (likeIcon) {
                likeIcon.classList.remove('fas');
                likeIcon.classList.add('far');
            }
        }
    }

    // Gérer le clic sur le bouton like
    likeButton.addEventListener('click', function() {
        if (userLiked) {
            // Si l'utilisateur a déjà aimé, on enlève son like
            likes = Math.max(0, likes - 1);
            userLiked = false;
        } else {
            // Sinon on ajoute un like
            likes++;
            userLiked = true;
        }

        // Sauvegarder dans le localStorage
        localStorage.setItem(STORAGE_KEY, likes.toString());
        localStorage.setItem(USER_LIKED_KEY, userLiked.toString());

        // Mettre à jour l'interface
        updateLikeUI();
    });

    // Initialiser l'interface
    updateLikeUI();
});
