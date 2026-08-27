import { COMPARISON } from '../data/content'

export default function ComparisonSection() {
  return (
    <section className="bg-ink-900/60 border-y border-white/5">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {COMPARISON.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
            {COMPARISON.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gold-400/70">
            {COMPARISON.subtitle}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-ink-800/80">
                <th className="px-5 py-4 text-left text-sm font-semibold text-gold-400/60">Característica</th>
                <th className="px-5 py-4 text-center text-sm font-semibold text-accent">Membresía</th>
                <th className="px-5 py-4 text-center text-sm font-semibold text-gold-400/60">Cursos</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-ink-800/30' : 'bg-ink-800/10'}`}
                >
                  <td className="px-5 py-4 text-sm font-medium text-gold-400/80">{row.feature}</td>
                  <td className="px-5 py-4 text-center text-sm text-gold-400">{row.membership}</td>
                  <td className="px-5 py-4 text-center text-sm text-gold-400/70">{row.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
