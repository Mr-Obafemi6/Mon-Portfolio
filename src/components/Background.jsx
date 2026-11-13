/** Décor de fond commun à tout le site (halos de couleur + grille). */
export default function Background() {
  return (
    <div aria-hidden="true" className="no-print pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-blue-300/30 blur-[110px] dark:bg-blue-600/20" />
      <div className="absolute -right-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-300/25 blur-[110px] dark:bg-cyan-500/10" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-indigo-300/20 blur-[120px] dark:bg-indigo-600/10" />
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-30" />
    </div>
  )
}
