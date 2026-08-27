import { QUALIFYING } from '../data/content'

export default function QualifyingSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {QUALIFYING.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
          {QUALIFYING.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
          <h3 className="mb-4 text-lg font-semibold text-accent">{QUALIFYING.title}</h3>
          <ul className="flex flex-col gap-3">
            {QUALIFYING.yes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gold-400/85">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-accent">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-ink-800/30 p-6">
          <h3 className="mb-4 text-lg font-semibold text-gold-400/60">{QUALIFYING.noTitle}</h3>
          <ul className="flex flex-col gap-3">
            {QUALIFYING.no.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gold-400/60">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-gold-400/40">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
