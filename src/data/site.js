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
  { label: 'React', tech: 'react' },
  { label: 'Tailwind CSS', tech: 'tailwind' },
  { label: 'PHP', tech: 'php' },
  { label: 'Laravel', tech: 'laravel' },
  { label: 'MySQL', tech: 'mysql' },
  { label: 'Git', tech: 'git' },
  { label: 'GitHub', tech: 'github' },
  { label: 'PWA', tech: 'pwa' },
  { label: 'React Native · apprentissage', tech: 'react-native' },
  { label: 'Symfony · apprentissage', tech: 'symfony' },
]

export const services = [
  {
    title: 'Développement Web',
    icon: 'html5',
    description:
      "Création de sites et d'interfaces web responsives avec React, HTML, CSS et JavaScript.",
    techs: ['react', 'html5', 'css3', 'javascript'],
  },
  {
    title: 'Applications Web',
    icon: 'javascript',
    description: "Développement d'applications web interactives en JavaScript et PHP.",
    techs: ['javascript', 'php'],
  },
  {
    title: 'Applications de gestion',
    icon: 'clipboard',
    description: "Conception de solutions de gestion pour les besoins d'une organisation.",
    techs: ['php', 'laravel', 'mysql'],
  },
  {
    title: 'Bases de données',
    icon: 'mysql',
    description: 'Modélisation, organisation et exploitation des données avec MySQL.',
    techs: ['mysql', 'laragon'],
  },
  {
    title: 'Interfaces responsives',
    icon: 'monitor',
    description: 'Interfaces claires et adaptables aux écrans mobiles, tablettes et desktop.',
    techs: ['tailwind', 'bootstrap', 'react'],
  },
  {
    title: 'Versioning',
    icon: 'git',
    description: 'Suivi des évolutions de projet avec Git et partage sur GitHub.',
    techs: ['git', 'github'],
  },
]

export const techGroups = [
  {
    title: 'Frontend',
    subtitle: 'Interfaces et expérience utilisateur',
    items: [
      { name: 'HTML5', key: 'html5', description: 'Structure sémantique des pages.' },
      { name: 'CSS3', key: 'css3', description: 'Mise en forme et responsive.' },
      { name: 'JavaScript', key: 'javascript', description: 'Interactions et logique côté client.' },
      { name: 'React', key: 'react', description: 'Applications web par composants.' },
      { name: 'Tailwind CSS', key: 'tailwind', description: 'Styles utilitaires et design system.' },
      { name: 'Bootstrap', key: 'bootstrap', description: 'Composants d’interface prêts à l’emploi.' },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'Logique et services côté serveur',
    items: [
      { name: 'PHP', key: 'php', description: 'Logique serveur et API.' },
      { name: 'Laravel', key: 'laravel', description: 'Framework PHP structuré (MVC).' },
    ],
  },
  {
    title: 'Base de données',
    subtitle: 'Stockage et gestion des données',
    items: [
      { name: 'MySQL', key: 'mysql', description: 'Modélisation et requêtes SQL.' },
      { name: 'Laragon', key: 'laragon', description: 'Environnement local Apache, PHP et MySQL.' },
    ],
  },
  {
    title: 'Outils',
    subtitle: 'Développement et collaboration',
    items: [
      { name: 'Git', key: 'git', description: 'Gestion des versions.' },
      { name: 'GitHub', key: 'github', description: 'Dépôts et collaboration.' },
      { name: 'VS Code', key: 'vscode', description: 'Éditeur de code.' },
    ],
  },
]

/** Liste à plat, utilisée par le CV et les statistiques. */
export const technologies = techGroups.flatMap((group) => group.items)

export const tools = techGroups.find((group) => group.title === 'Outils').items

export const learning = [
  {
    name: 'React Native',
    key: 'react-native',
    description:
      'Développement d’applications mobiles avec React, en progression continue et sans le présenter comme maîtrisé.',
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
  {
    label: 'Front-end moderne',
    title: 'React & Tailwind CSS',
    detail: 'Interfaces web par composants et styles utilitaires',
    icon: 'react',
  },
  {
    label: 'En apprentissage',
    title: 'React Native',
    detail: 'Applications mobiles, progression continue',
    icon: 'react-native',
  },
]

export const stats = [
  { value: 6, label: 'Projets présentés' },
  { value: technologies.length, label: 'Technologies listées' },
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
