import { useState } from 'react'
import { NAV_LINKS } from '../data/content'
import { useCurrency } from '../hooks/useCurrency'

function CurrencyToggle() {
  const { currency, toggle } = useCurrency()
  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-1 rounded-full card-ring bg-ink-800 px-1 py-1 text-xs font-semibold"
      aria-label="Cambiar moneda"
    >
      <span
        className={`rounded-full px-3 py-1 transition-colors ${
          currency === 'ARS' ? 'bg-accent text-white' : 'text-gold-400/60'
        }`}
      >
        ARS $
      </span>
      <span
        className={`rounded-full px-3 py-1 transition-colors ${
          currency === 'USD' ? 'bg-accent text-white' : 'text-gold-400/60'
        }`}
      >
        USD $
      </span>
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="font-display text-lg tracking-wide text-gold-400">
            JIU JITSU
          </span>
          <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
            ES
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gold-400/70 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <CurrencyToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <CurrencyToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="card-ring rounded-lg p-2 text-gold-400"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink-950 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gold-400/80 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}