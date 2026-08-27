import SmartImg from './ui/SmartImg'
import { WATTERS, PHOTOS } from '../data/content'

export default function WattersQuote() {
  return (
    <section className="border-y border-white/5 bg-ink-900/60">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-gold-400 sm:text-2xl">
          “{WATTERS.quote}”
        </p>
        <div className="mt-6 flex flex-col items-center gap-1">
          <div className="h-14 w-14">
            <SmartImg
              src={PHOTOS.testimonials.watters.url}
              alt={PHOTOS.testimonials.watters.alt}
              aspect="aspect-square"
              rounded="rounded-full ring-2 ring-accent"
            />
          </div>
          <p className="mt-2 text-base font-semibold text-gold-400">{WATTERS.name}</p>
          <p className="font-display text-sm uppercase tracking-widest text-accent">
            {WATTERS.role}
          </p>
        </div>
      </div>
    </section>
  )
}