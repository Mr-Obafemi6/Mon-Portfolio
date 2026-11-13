import { FaFacebookF, FaGithub, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'
import { socials } from '../data/site'
import { cn } from '../lib/styles'

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
}

const sizes = {
  sm: 'h-9 w-9 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-11 w-11 text-lg',
}

export default function SocialLinks({ size = 'md', className, itemClassName }) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)} aria-label="Réseaux sociaux">
      {socials.map((social) => {
        const Icon = icons[social.icon]
        if (!Icon) return null
        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className={cn(
                'inline-flex items-center justify-center rounded-xl border border-gray-200/70 bg-white/70 text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-400/40 dark:hover:text-blue-300',
                sizes[size] ?? sizes.md,
                itemClassName,
              )}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
