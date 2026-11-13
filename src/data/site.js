export const profile = {
  name: 'TCHALLA Obafemi Gérard',
  firstName: 'Obafemi',
  role: 'Développeur Web & Applications',
  shortBio:
    'Je conçois des applications web modernes, des systèmes de gestion et des solutions numériques adaptées aux besoins des utilisateurs et des entreprises.',
  email: 'gerardtchalla6@gmail.com',
  phone: '+228 91 18 66 37',
  phoneRaw: '+22891186637',
  phoneAlt: '+228 97 89 50 09',
  phoneAltRaw: '+22897895009',
  location: 'Lomé, Togo',
  github: 'https://github.com/Mr-Obafemi6',
  linkedin: 'https://linkedin.com/in/gerard-tchalla-4a0b2b294',
  facebook: 'https://facebook.com/TCHALLAobfemi',
  tiktok: 'https://tiktok.com/@Obafemi_x2',
  avatar: 'img/profile.jpg',
  logo: 'img/logo.png',
  cv: 'cv/cv-gerard-tchalla.pdf',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63428.57083576123!2d1.2000000000000028!3d6.128064099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e3f6f0ca5a5f%3A0x7fd3e7ccd9e2d1f0!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2stg!4v1640000000000!5m2!1sfr!2stg',
}

export const socials = [
  { name: 'GitHub', href: profile.github, icon: 'github' },
  { name: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { name: 'Facebook', href: profile.facebook, icon: 'facebook' },
  { name: 'TikTok', href: profile.tiktok, icon: 'tiktok' },
]

export const navLinks = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/profil', label: 'Profil' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/contact', label: 'Contact' },
]

export const heroBadges = [
  { label: 'HTML', tech: 'html5' },
  { label: 'CSS', tech: 'css3' },
  { label: 'JavaScript', tech: 'javascript' },
  { label: 'PHP', tech: 'php' },
  { label: 'MySQL', tech: 'mysql' },
  { label: 'Git', tech: 'git' },
  { label: 'GitHub', tech: 'github' },
  { label: 'PWA', tech: 'pwa' },
  { label: 'Laravel', tech: 'laravel' },
  { label: 'React · apprentissage', tech: 'react' },
  { label: 'Symfony · apprentissage', tech: 'symfony' },
]

export const services = [
  {
    title: 'Développement Web',
    icon: 'html5',
    description: "Création d'interfaces web responsives avec HTML, CSS et JavaScript.",
  },
  {
    title: 'Applications Web',
    icon: 'javascript',
    description: "Développement d'expériences web interactives adaptées aux utilisateurs.",
  },
  {
    title: 'Applications de gestion',
    icon: 'clipboard',
    description: "Conception de solutions de gestion pour les besoins d'une organisation.",
  },
  {
    title: 'Bases de données',
    icon: 'mysql',
    description: 'Organisation et exploitation de données avec MySQL.',
  },
  {
    title: 'Interfaces responsives',
    icon: 'monitor',
    description: 'Interfaces claires et adaptables aux écrans mobiles, tablettes et desktop.',
  },
  {
    title: 'Versioning',
    icon: 'git',
    description: 'Suivi des évolutions de projet avec Git et partage sur GitHub.',
  },
]

export const technologies = [
  { name: 'HTML5', key: 'html5', description: 'Structure des interfaces web.' },
  { name: 'CSS3', key: 'css3', description: 'Mise en forme responsive.' },
  { name: 'JavaScript', key: 'javascript', description: 'Interactions et logique côté client.' },
  { name: 'PHP', key: 'php', description: 'Applications web côté serveur.' },
  { name: 'MySQL', key: 'mysql', description: 'Données des applications de gestion.' },
  { name: 'Bootstrap', key: 'bootstrap', description: 'Composants utilisés dans plusieurs projets.' },
  { name: 'Laravel', key: 'laravel', description: 'Framework PHP pour applications web.' },
]

export const tools = [
  { name: 'Git', key: 'git', description: 'Gestion des versions.' },
  { name: 'GitHub', key: 'github', description: 'Hébergement des dépôts.' },
  { name: 'VS Code', key: 'vscode', description: 'Éditeur utilisé pour développer.' },
]

export const learning = [
  {
    name: 'React',
    key: 'react',
    description: 'Technologie étudiée progressivement, sans la présenter comme maîtrisée.',
  },
  {
    name: 'Symfony',
    key: 'symfony',
    description: 'Framework PHP étudié progressivement, sans le présenter comme maîtrisé.',
  },
]

export const timeline = [
  { label: 'Formation', title: 'Développement Web & Applications', detail: 'FORMATEC', icon: 'graduation' },
  { label: 'Fondations', title: 'HTML / CSS', detail: 'Bases du web et mise en page responsive', icon: 'code' },
  { label: 'Interactivité', title: 'JavaScript', detail: 'Interactions et logique côté client', icon: 'zap' },
  { label: 'Applications', title: 'PHP / MySQL', detail: 'Applications web et gestion de données', icon: 'database' },
  {
    label: 'Orientation',
    title: 'Applications de gestion, API et PWA',
    detail: 'Des solutions concrètes pour les organisations',
    icon: 'layers',
  },
  { label: 'En apprentissage', title: 'React', detail: 'Progression continue, sans présenter la techno comme maîtrisée', icon: 'react' },
]

export const stats = [
  { value: 6, label: 'Projets présentés' },
  { value: 11, label: 'Technologies listées' },
  { value: 1, label: 'Formation identifiée' },
]

export const aboutDetails = [
  {
    title: 'Formation',
    icon: 'graduation',
    lines: ['Développement Web & Applications'],
    highlight: 'FORMATEC',
  },
  {
    title: 'Localisation',
    icon: 'map-pin',
    lines: ['Lomé, Togo'],
  },
  {
    title: 'Orientation',
    icon: 'target',
    lines: ['Web, mobile et systèmes de gestion'],
  },
]

export const emailjs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1s5qsgc',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wagzsjb',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'mzMc7-Ya4W3h1nn1K',
}
