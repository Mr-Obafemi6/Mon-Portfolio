import { FiClipboard, FiMonitor } from 'react-icons/fi'
import TechIcon from './TechIcon'

const uiIcons = {
  clipboard: FiClipboard,
  monitor: FiMonitor,
}

/** Icône de service : technologie (Devicon) ou icône d'interface. */
export default function ServiceIcon({ name, className }) {
  const Icon = uiIcons[name]
  if (Icon) return <Icon aria-hidden="true" className={className} />
  return <TechIcon name={name} colored className={className} />
}
