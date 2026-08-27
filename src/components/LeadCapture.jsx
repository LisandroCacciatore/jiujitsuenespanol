import { useState } from 'react'
import { LEAD_CAPTURE } from '../data/content'

export default function LeadCapture() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
  }

  return (
    <section className="border-y border-white/5 bg-ink-900/60">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {LEAD_CAPTURE.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
          {LEAD_CAPTURE.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gold-400/70">
          {LEAD_CAPTURE.subtitle}
        </p>

        {!done && (
          <div className="mx-auto mt-8 max-w-xl overflow-hidden rounded-xl border border-white/10 bg-ink-800/50">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-gold-400/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold-400/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold-400/20" />
              </div>
              <span className="text-[10px] text-gold-400/40">Vista previa del email</span>
            </div>
            <div className="px-5 py-4 text-left">
              <p className="text-[10px] uppercase text-gold-400/40">De: Ramiro León &lt;hola@jiujitsuenespanol.com&gt;</p>
              <p className="mt-0.5 text-[10px] uppercase text-gold-400/40">Asunto: Tu técnica semanal #1</p>
              <div className="mt-3 rounded-lg border border-white/5 bg-ink-900/60 p-4">
                <p className="text-xs text-gold-400/70">Hola,</p>
                <p className="mt-2 text-xs text-gold-400/70">
                  Esta semana te comparto un fragmento de la biblioteca: <strong className="text-gold-400">Pasajes fundamentales de Bodylock</strong>.
                </p>
                <div className="mt-3 flex aspect-video items-center justify-center rounded-lg bg-ink-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-accent/60">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-3 text-[10px] text-gold-400/50">
                  Cada semana te mando una técnica nueva, igual a las de la biblioteca. Sin spam.
                </p>
              </div>
            </div>
          </div>
        )}

        {done ? (
          <div className="mx-auto mt-8 flex max-w-xl items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 p-5 text-left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-accent">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <p className="text-sm font-medium text-gold-400">{LEAD_CAPTURE.success}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="lead-email" className="sr-only">
              Email
            </label>
            <input
              id="lead-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={LEAD_CAPTURE.placeholder}
              className="w-full flex-1 rounded-lg border border-white/10 bg-ink-800 px-4 py-3 text-sm text-gold-400 placeholder-gold-400/40 outline-none transition-colors focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              {LEAD_CAPTURE.button}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-gold-400/50">{LEAD_CAPTURE.privacy}</p>
      </div>
    </section>
  )
}