import { useEffect, useRef } from 'react'
import { useCheckout } from '../context/CheckoutContext'
import { useCurrency } from '../hooks/useCurrency'
import { CHECKOUT, COURSE_CARD, MEMBERSHIP_CARD, PRICES } from '../data/content'
import PaymentIcons from './PaymentIcons'

const PRODUCTS = {
  course: {
    tag: COURSE_CARD.tag,
    title: COURSE_CARD.priceNote,
    description: COURSE_CARD.description,
    price: PRICES.courseSeminario,
    priceSuffix: 'pago único',
    guarantee: COURSE_CARD.guarantee,
    cta: COURSE_CARD.cta,
  },
  membership: {
    tag: MEMBERSHIP_CARD.tag,
    title: MEMBERSHIP_CARD.density,
    description: MEMBERSHIP_CARD.description,
    price: PRICES.baseMonthly,
    priceSuffix: '/mes',
    guarantee: MEMBERSHIP_CARD.guarantee,
    cta: MEMBERSHIP_CARD.cta,
  },
}

export default function CheckoutModal() {
  const { product, close } = useCheckout()
  const { format } = useCurrency()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!product) return
    closeRef.current?.focus()
  }, [product])

  useEffect(() => {
    if (!product) return
    function onKey(e) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [product, close])

  if (!product) return null

  const data = PRODUCTS[product]
  if (!data) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      onClick={close}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={CHECKOUT.title}
        onClick={(e) => e.stopPropagation()}
        className="glass card-ring relative my-auto w-full max-w-md rounded-2xl p-7 shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="absolute right-4 top-4 rounded-lg p-2 text-gold-400/60 transition-colors hover:bg-ink-700 hover:text-gold-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={CHECKOUT.closeLabel}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <p className="font-data text-xs font-bold uppercase text-accent">{data.tag}</p>
        <h3 className="mt-2 font-display text-2xl uppercase text-gold-400">{CHECKOUT.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gold-400/70">{data.title}</p>

        <div className="mt-6 rounded-xl border border-white/10 bg-ink-950/70 p-5">
          <p className="font-data text-3xl font-bold text-gold-400">
            {format(data.price)}
            <span className="ml-2 text-sm font-medium text-gold-400/50">{data.priceSuffix}</span>
          </p>
          <p className="font-data mt-1 text-xs text-gold-400/60">{data.description}</p>
        </div>

        <div className="mt-5">
          <p className="font-data text-xs font-bold uppercase text-gold-400/50">
            {CHECKOUT.payTitle}
          </p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {CHECKOUT.payMethods.map((method) => (
              <li key={method} className="flex items-center gap-2 text-sm text-gold-400/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {method}
              </li>
            ))}
          </ul>
        </div>

        <PaymentIcons />

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={close}
            className="rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {CHECKOUT.cta}
          </button>
          <p className="flex items-center gap-1.5 text-xs text-gold-400/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
            </svg>
            {data.guarantee}
          </p>
        </div>

        <p className="mt-4 text-center text-[11px] text-gold-400/40">{CHECKOUT.note}</p>
      </div>
    </div>
  )
}