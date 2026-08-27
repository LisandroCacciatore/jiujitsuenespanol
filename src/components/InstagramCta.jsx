import { FOOTER } from '../data/content'

const instagram = FOOTER.social.find((s) => s.label === 'Instagram')

export default function InstagramCta() {
  return (
    <section className="border-y border-white/5 bg-ink-900/60">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-ink-800 px-4 py-2 card-ring">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="text-sm font-semibold text-gold-400">Seguime en Instagram</span>
        </div>
        <h2 className="mt-4 font-display text-2xl uppercase text-gold-400 sm:text-3xl">
          Entrenamiento, competencia y técnica diaria
        </h2>
        <p className="mt-3 text-sm text-gold-400/60">
          Clips de entrenamiento en Kingsway, análisis de competencias y tips que no están en la biblioteca.
        </p>
        <a
          href={instagram?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          {instagram?.value}
        </a>
      </div>
    </section>
  )
}
