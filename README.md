# Portfolio — TCHALLA Obafemi Gérard

Portfolio personnel reconstruit avec **React**, **Vite**, **Tailwind CSS** et **React Router**.

Le design reprend l’identité du site d’origine (glassmorphism, hero animé, thème clair/sombre,
assistant flottant) avec une structure moderne en composants, un meilleur responsive et une page CV
imprimable.

## Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **React Router 7** — routage en `HashRouter` (compatible GitHub Pages, Vercel, Netlify…)
- **React Icons** (Feather + Font Awesome + Devicons)

## Démarrage

```bash
npm install
npm run dev
```

Le site s’ouvre sur `http://localhost:5173`.

```bash
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
```

## Structure

```text
src/
  components/     Navbar, Footer, cartes projets, modal, assistant, thème, etc.
  context/        ThemeContext (thème clair/sombre persistant)
  data/
    site.js       Profil, liens, compétences, services, parcours, EmailJS
    projects.js   Liste complète des projets
  lib/            Utilitaires (assets, styles de boutons, métadonnées, icônes)
  pages/          Home, About, Expertise, Projects, ProjectsFull, Journey, Cv, Contact, NotFound
  App.jsx         Routes
  index.css       Tailwind + design system (glass, tags, animations, impression)
public/
  img/            Images du portfolio et captures des projets
  cv/             CV PDF (facultatif, voir plus bas)
```

## Personnaliser le contenu

- **Profil, contact, réseaux, compétences, parcours** : `src/data/site.js`
- **Projets, tags, dates, liens GitHub/démo** : `src/data/projects.js`
- **Images** : `public/img/` — les chemins sont référencés dans `projects.js`
- **CV** : la page `/parcours/cv` génère un CV HTML imprimable.
  Pour activer le téléchargement et la visionneuse PDF, déposez le fichier ici :
  `public/cv/cv-gerard-tchalla.pdf`.

## Formulaire de contact (EmailJS)

Le formulaire utilise l’API REST d’EmailJS. Les identifiants par défaut sont ceux de l’ancien site.
Pour utiliser votre propre compte, créez un fichier `.env` à la racine :

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Le template doit recevoir : `from_name`, `from_email`, `subject`, `message`.
En cas d’échec, un lien `mailto:` de secours est proposé.

## Déploiement

### Vercel / Netlify

- Build command : `npm run build`
- Output directory : `dist`

### GitHub Pages

Le déploiement est automatique : chaque push sur `main` déclenche le workflow
`.github/workflows/deploy.yml` (build + publication sur GitHub Pages).

1. **Une seule fois** : dans **Settings → Pages → Build and deployment**,
   choisissez **Source = GitHub Actions**.
   (Le workflow ne peut pas activer Pages lui-même : cela demande les droits admin.)
2. Poussez sur `main` ; le site est publié sur
   `https://mr-obafemi6.github.io/Mon-Portfolio/`.
3. Pour relancer manuellement : onglet **Actions → Déploiement GitHub Pages →
   Re-run all jobs**.

Le site utilise des chemins relatifs (`base: './'`), un `HashRouter` et un fichier
`public/.nojekyll`, ce qui évite les erreurs de routes et de chemins sur GitHub Pages.

## Notes

- Le thème clair/sombre suit la préférence système puis mémorise le choix de l’utilisateur.
- Les animations respectent `prefers-reduced-motion`.
