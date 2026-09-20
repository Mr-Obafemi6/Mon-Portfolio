document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menu');
    const loading = document.getElementById('loading');

    const updateThemeIcon = theme => {
        const icon = themeToggle?.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-sun', theme === 'dark');
            icon.classList.toggle('fa-moon', theme !== 'dark');
        }
    };

    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    themeToggle?.addEventListener('click', () => {
        const theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    });

    const closeMenu = () => {
        menu?.classList.remove('active');
        menuToggle?.setAttribute('aria-expanded', 'false');
        const icon = menuToggle?.querySelector('i');
        icon?.classList.replace('fa-xmark', 'fa-bars');
        icon?.classList.replace('fa-times', 'fa-bars');
    };

    menuToggle?.addEventListener('click', () => {
        const isOpen = menu?.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
        const icon = menuToggle.querySelector('i');
        icon?.classList.toggle('fa-bars', !isOpen);
        icon?.classList.toggle('fa-xmark', Boolean(isOpen));
    });
    document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));

    document.getElementById('currentYear')?.replaceChildren(String(new Date().getFullYear()));
    loading?.classList.add('hidden');

    const revealItems = document.querySelectorAll('.reveal, .fade-in');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        }), { threshold: 0.12 });
        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('is-visible'));
    }

    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => backToTop?.classList.toggle('visible', window.scrollY > 400), { passive: true });
    backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const assistantPanel = document.getElementById('assistantPanel');
    const setAssistant = open => {
        if (!assistantPanel) return;
        assistantPanel.hidden = !open;
        assistantPanel.classList.toggle('is-open', open);
        if (open) document.getElementById('assistantClose')?.focus();
    };
    document.getElementById('assistantLauncher')?.addEventListener('click', () => setAssistant(true));
    document.getElementById('assistantClose')?.addEventListener('click', () => setAssistant(false));
    document.querySelectorAll('.assistant-actions [data-target]').forEach(button => button.addEventListener('click', () => {
        document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
        setAssistant(false);
    }));

    const projectData = {
        pchome: { label: 'Projet e-commerce', title: 'PCHome', image: 'img/WhatsApp Image 2026-01-20 at 20.31.03.jpeg', description: 'Site de vente et livraison de PC en ligne.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], features: [], github: 'https://github.com/Mr-Obafemi6/Mon-Projet-PCHome' },
        boutique: { label: 'Application de gestion', title: 'Gestion de boutique', image: 'img/image.png', description: 'Application de gestion de stock, ventes et informations de boutique.', tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'], features: ['Stock', 'Ventes', 'Informations'], github: 'https://github.com/Mr-Obafemi6/gestion_boutique.git' },
        tasks: { label: 'Application de gestion', title: 'Gestion de tâches', image: 'img/gest.tâche.jpeg', description: 'Application web de gestion de tâches.', tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'], features: [], github: 'https://github.com/Mr-Obafemi6/Gestion-des-t-ches.git' },
        calculator: { label: 'Application', title: 'Calculatrice Complexe', image: 'img/Calculatrice ℂ - Google Chrome 04_03_2026 18_02_04.png', description: 'Application web de calculatrice complexe.', tags: ['C++', 'C#', 'HTML', 'JavaScript'], features: [], github: 'https://github.com/Mr-Obafemi6/Calculatrice_Complexe.git' },
        sge: { label: 'Système de gestion', title: "SGE - Système de Gestion d'École", image: 'img/image copy.png', description: "Application web de gestion présentée dans le portfolio. Les détails fonctionnels ne sont pas précisés dans les fichiers existants.", tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'], features: [], github: '' }
    };
    const modal = document.getElementById('projectModal');
    const closeModal = () => { modal?.classList.remove('is-open'); modal?.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); };
    document.querySelectorAll('.project-details').forEach(button => button.addEventListener('click', () => {
        const project = projectData[button.dataset.project];
        if (!project || !modal) return;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalImage').alt = `Capture de ${project.title}`;
        document.getElementById('modalLabel').textContent = project.label;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        const tags = document.getElementById('modalTags');
        tags.replaceChildren(...project.tags.map(tag => { const element = document.createElement('span'); element.className = 'tag'; element.textContent = tag; return element; }));
        const features = document.getElementById('modalFeatures');
        features.replaceChildren(...project.features.map(feature => { const element = document.createElement('p'); element.textContent = `• ${feature}`; return element; }));
        const links = document.getElementById('modalLinks');
        links.replaceChildren();
        if (project.github) {
            const github = document.createElement('a'); github.className = 'btn btn-small'; github.href = project.github; github.target = '_blank'; github.rel = 'noopener'; github.textContent = 'Code source'; links.append(github);
        }
        modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); document.getElementById('modalClose')?.focus();
    }));
    document.getElementById('modalClose')?.addEventListener('click', closeModal);
    modal?.addEventListener('click', event => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeModal(); setAssistant(false); closeMenu(); } });

    document.getElementById('contactForm')?.addEventListener('submit', event => {
        event.preventDefault();
        const status = document.getElementById('formStatus');
        if (status) status.textContent = 'Formulaire prêt pour la connexion à un service d’envoi.';
        event.currentTarget.reset();
    });
});

function sendEmail(form) {
    if (window.emailjs?.send) {
        window.emailjs.send('service_1s5qsgc', 'template_wagzsjb', {
            from_name: form.name.value,
            from_email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        }).then(() => {
            document.getElementById('success-message')?.replaceChildren('Message envoyé avec succès !');
            form.reset();
        }).catch(() => {
            window.alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        });
    } else {
        document.getElementById('success-message')?.replaceChildren('Formulaire prêt pour la connexion à un service d’envoi.');
    }
    return false;
}



