import SmartImg from './ui/SmartImg'
import { HIGHLIGHTS, PHOTOS } from '../data/content'

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {HIGHLIGHTS.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
          {HIGHLIGHTS.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gold-400/70">{HIGHLIGHTS.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {HIGHLIGHTS.items.map((item, i) => (
          <article key={item.title} className="card-ring overflow-hidden rounded-2xl bg-ink-800/50">
            <div className="relative aspect-[4/3]">
              <SmartImg
                src={PHOTOS.highlights[i].url}
                alt={PHOTOS.highlights[i].alt}
                aspect="aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  {item.result}
                </p>
                <h3 className="mt-1 font-display text-lg uppercase text-gold-400">{item.title}</h3>
                <p className="mt-1 text-xs text-gold-400/70">{item.event}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}