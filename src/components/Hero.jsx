import Button from './ui/Button'
import SmartImg from './ui/SmartImg'
import { BADGES, HERO, PHOTOS } from '../data/content'
import { useVideo } from '../context/VideoContext'

export default function Hero() {
  const { open } = useVideo()

  return (
    <section id="inicio" className="hero-glow relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-data mb-4 inline-flex items-center gap-2 rounded-full card-ring bg-ink-800/70 px-4 py-2 text-xs font-medium uppercase text-gold-400/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {HERO.kicker}
          </p>

          <h1 className="font-display text-4xl leading-[1.05] text-gold-400 uppercase sm:text-5xl lg:text-6xl">
            El jiu-jitsu que se enseña en Austin, explicado en{' '}
            <span className="text-accent">tu idioma</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gold-400/70 sm:text-lg">
            {HERO.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#gratis" size="lg">
              {HERO.primaryCta}
            </Button>
            <Button href="#membresia" variant="ghost" size="lg">
              {HERO.secondaryCta}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <li
                key={badge}
                className="font-data rounded-md bg-ink-800 px-3 py-1.5 text-xs font-bold text-gold-400/80 card-ring"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <SmartImg
              src={PHOTOS.hero.url}
              alt={PHOTOS.hero.alt}
              aspect="aspect-video"
              eager
            />
            <button
              type="button"
              onClick={() => open(0)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Reproducir video gratuito"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/90 shadow-[0_0_40px_rgba(224,36,44,0.8)] transition-transform group-hover:scale-110">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
            <div className="relative flex items-center justify-between gap-4 border-t border-white/10 bg-ink-900/90 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gold-400">
                  Pasajes fundamentales de Bodylock
                </p>
                <p className="text-xs text-gold-400/50">Video gratuito · sin registro</p>
              </div>
              <span className="font-data shrink-0 rounded bg-ink-700 px-2 py-1 text-xs font-bold text-gold-400/80">
                4:22
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}