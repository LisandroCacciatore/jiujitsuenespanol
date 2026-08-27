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

        <div className="flex items-center gap-3">
          <CurrencyToggle />
          <a
            href="#gratis"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent/90"
          >
            Ver gratis
          </a>
        </div>
      </nav>
    </header>
  )
}