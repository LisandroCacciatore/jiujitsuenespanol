import { CONTENT_LIBRARY } from '../data/content'

export default function ContentLibrary() {
  return (
    <section className="bg-ink-900/60 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {CONTENT_LIBRARY.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
            {CONTENT_LIBRARY.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gold-400/70">
            {CONTENT_LIBRARY.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENT_LIBRARY.areas.map((area) => (
            <div
              key={area.name}
              className="card-ring flex flex-col items-center rounded-2xl bg-ink-800/50 p-6 text-center transition-transform hover:-translate-y-1"
            >
              <span className="text-4xl">{area.icon}</span>
              <h3 className="mt-3 text-sm font-semibold text-gold-400">{area.name}</h3>
              <p className="mt-1 font-data text-lg font-bold text-accent">{area.count}</p>
              <p className="text-xs text-gold-400/50">videos</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gold-400/60">
            Total: <span className="font-semibold text-gold-400">118 videos</span> en{' '}
            <span className="font-semibold text-gold-400">8 sistemas completos</span>
          </p>
        </div>
      </div>
    </section>
  )
}
