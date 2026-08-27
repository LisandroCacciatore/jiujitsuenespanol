import { useState } from 'react'
import { FAQ_ITEMS } from '../data/content'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-anchor mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Preguntas frecuentes</p>
        <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">FAQ</h2>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="card-ring overflow-hidden rounded-xl bg-ink-800/50">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-gold-400 sm:text-base">{item.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-gold-400/70">{item.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}