import { FOOTER } from '../data/content'
import { useCurrency } from '../hooks/useCurrency'

export default function Footer() {
  const { currency, toggle } = useCurrency()

  return (
    <footer className="border-t border-white/5 bg-ink-900/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg tracking-wide text-gold-400">JIU JITSU</span>
              <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                ES
              </span>
            </div>
            <p className="mt-3 text-sm text-gold-400/60">{FOOTER.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-400/50">
              Secciones
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gold-400/70 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-400/50">
              Contacto
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gold-400/70 transition-colors hover:text-gold-400"
                  >
                    <span className="text-gold-400/40">{item.label}:</span> {item.value}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={toggle}
              className="mt-4 text-xs font-semibold text-accent underline-offset-2 hover:underline"
            >
              Ver precios en {currency === 'ARS' ? 'USD' : 'ARS'}
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-gold-400/40">
            © {new Date().getFullYear()} {FOOTER.brand} — Ramiro León. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {FOOTER.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs text-gold-400/40 transition-colors hover:text-gold-400/70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}