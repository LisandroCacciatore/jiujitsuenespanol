import { useState, useEffect } from 'react'
import { useCurrency } from '../hooks/useCurrency'
import { useCheckout } from '../context/CheckoutContext'
import { PRICES, LAUNCH } from '../data/content'

export default function StickyCta() {
  const [visible, setVisible] = useState(false)
  const { format } = useCurrency()
  const { open } = useCheckout()

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 800)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-ink-950/95 backdrop-blur-md px-4 py-3 sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-gold-400 truncate">Membresía Base</p>
          <p className="text-xs text-gold-400/60">
            <span className="line-through text-gold-400/40">{format(LAUNCH.monthlyOriginal)}</span>{' '}
            <span className="font-bold text-accent">{format(PRICES.baseMonthly)}/mes</span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => open('membership')}
          className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Empezar
        </button>
      </div>
    </div>
  )
}
