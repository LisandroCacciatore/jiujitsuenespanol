import SmartImg from './ui/SmartImg'
import { TESTIMONIALS, PHOTOS } from '../data/content'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {TESTIMONIALS.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
          {TESTIMONIALS.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {TESTIMONIALS.items.map((t) => (
          <article key={t.name} className="card-ring flex flex-col rounded-2xl bg-ink-800/50 p-6">
            <p className="flex-1 text-sm leading-relaxed text-gold-400/85">“{t.quote}”</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-11 w-11 shrink-0">
                <SmartImg
                  src={PHOTOS.testimonials[t.photoKey].url}
                  alt={PHOTOS.testimonials[t.photoKey].alt}
                  aspect="aspect-square"
                  rounded="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gold-400">{t.name}</p>
                <p className="text-xs text-gold-400/50">{t.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}