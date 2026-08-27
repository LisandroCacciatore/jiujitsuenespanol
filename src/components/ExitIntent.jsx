import { useState, useEffect } from 'react'
import { useCheckout } from '../context/CheckoutContext'

export default function ExitIntent() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { open } = useCheckout()

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShow(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [dismissed])

  useEffect(() => {
    if (!show) return
    function onKey(e) {
      if (e.key === 'Escape') {
        setShow(false)
        setDismissed(true)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [show])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={() => { setShow(false); setDismissed(true) }}
      role="presentation"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass card-ring relative w-full max-w-lg rounded-2xl p-8 text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={() => { setShow(false); setDismissed(true) }}
          className="absolute right-4 top-4 rounded-lg p-2 text-gold-400/60 transition-colors hover:bg-ink-700 hover:text-gold-400"
          aria-label="Cerrar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase text-accent">
          Antes de irte...
        </span>

        <h2 className="mt-4 font-display text-2xl uppercase text-gold-400 sm:text-3xl">
          ¿Te vas sin probar?
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gold-400/70">
          Mirá los 3 videos gratis ahora. Sin registro, sin tarjeta. Si te sirven, el resto está acá.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => { setShow(false); setDismissed(true); open('membership') }}
            className="rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Ver los 3 videos gratis
          </button>
          <button
            type="button"
            onClick={() => { setShow(false); setDismissed(true) }}
            className="text-sm text-gold-400/50 transition-colors hover:text-gold-400"
          >
            No gracias, ya vuelvo
          </button>
        </div>
      </div>
    </div>
  )
}
