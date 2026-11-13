import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiLaravel,
  DiMysql,
  DiPhp,
  DiSymfony,
  DiVisualstudio,
} from 'react-icons/di'
import { SiDiagramsdotnet, SiLaragon, SiReact, SiTailwindcss, SiXampp } from 'react-icons/si'
import { TbBrandReactNative, TbDatabaseCog } from 'react-icons/tb'
import { cn } from '../lib/styles'

const icons = {
  html5: DiHtml5,
  css3: DiCss3,
  javascript: DiJavascript1,
  php: DiPhp,
  mysql: DiMysql,
  git: DiGit,
  github: DiGithubBadge,
  laravel: DiLaravel,
  symfony: DiSymfony,
  react: SiReact,
  'react-native': TbBrandReactNative,
  bootstrap: DiBootstrap,
  tailwind: SiTailwindcss,
  laragon: SiLaragon,
  xampp: SiXampp,
  drawio: SiDiagramsdotnet,
  workbench: TbDatabaseCog,
  vscode: DiVisualstudio,
}

const colors = {
  html5: '#e34f26',
  css3: '#1572b6',
  javascript: '#d6b800',
  php: '#777bb4',
  mysql: '#4479a1',
  git: '#f05032',
  github: 'currentColor',
  laravel: '#ff2d20',
  symfony: 'currentColor',
  react: '#61dafb',
  'react-native': '#61dafb',
  bootstrap: '#7952b3',
  tailwind: '#06b6d4',
  laragon: '#0e83cd',
  xampp: '#fb7a24',
  drawio: '#f08705',
  workbench: '#4479a1',
  vscode: '#007acc',
  cpp: '#00599c',
  csharp: '#239120',
  vite: '#646cff',
  pwa: '#5a0fc8',
}

const monograms = {
  cpp: 'C++',
  csharp: 'C#',
  vite: 'V',
  pwa: 'PWA',
}

/** Icône d'une technologie, avec repli sous forme de monogramme. */
export default function TechIcon({ name, colored = false, className, style }) {
  const Icon = icons[name]

  if (Icon) {
    return (
      <Icon
        aria-hidden="true"
        className={cn('shrink-0', className)}
        style={{ color: colored ? colors[name] ?? 'currentColor' : undefined, ...style }}
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-grid shrink-0 place-items-center rounded-[3px] text-[0.58em] font-black leading-none',
        className,
      )}
      style={{ color: colored ? colors[name] ?? 'currentColor' : 'currentColor', ...style }}
    >
      {monograms[name] ?? '•'}
    </span>
  )
}
