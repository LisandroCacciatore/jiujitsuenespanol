import SmartImg from './ui/SmartImg'
import { ABOUT, PHOTOS } from '../data/content'

export default function About() {
  return (
    <section id="sobre-mi" className="section-anchor bg-ink-900/60 border-y border-white/5">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/25 to-transparent blur-2xl" />
            <SmartImg
              src={PHOTOS.about.main.url}
              alt={PHOTOS.about.main.alt}
              aspect="aspect-[4/5]"
              rounded="relative rounded-2xl border border-white/10"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {PHOTOS.about.gallery.map((photo) => (
              <SmartImg
                key={photo.url}
                src={photo.url}
                alt={photo.alt}
                aspect="aspect-square"
                rounded="rounded-xl"
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{ABOUT.kicker}</p>
          <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
            {ABOUT.title}
          </h2>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {ABOUT.credentials.map((cred) => (
              <li key={cred} className="flex items-start gap-2.5 text-sm text-gold-400/80">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-accent">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {cred}
              </li>
            ))}
          </ul>

          <p className="mt-6 border-l-2 border-accent pl-5 text-base leading-relaxed text-gold-400/85">
            {ABOUT.story}
          </p>
        </div>
      </div>
    </section>
  )
}