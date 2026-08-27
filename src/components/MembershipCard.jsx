import { MEMBERSHIP_CARD, PRICES, LAUNCH } from '../data/content'
import { useCurrency } from '../hooks/useCurrency'
import { useCheckout } from '../context/CheckoutContext'
import Button from './ui/Button'
import Countdown from './Countdown'

export default function MembershipCard() {
  const { format } = useCurrency()
  const { open } = useCheckout()

  return (
    <article
      id="membresia"
      className="section-anchor card-ring glow-edge relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-ink-800 to-ink-900 p-7 shadow-[0_0_0_1px_rgba(224,36,44,0.25),0_20px_60px_-20px_rgba(224,36,44,0.35)]"
    >
      <div className="absolute right-5 top-5 flex items-center gap-2">
        <span className="font-data rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
          Todo el sistema
        </span>
        <span className="font-data rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold uppercase text-accent">
          {LAUNCH.badge}
        </span>
      </div>
      <span className="font-data mb-4 self-start rounded-full bg-ink-700 px-3 py-1 text-xs font-bold uppercase text-gold-400/80">
        {MEMBERSHIP_CARD.tag}
      </span>
      <h3 className="font-display text-2xl uppercase text-gold-400">Reconstruí tu juego completo</h3>
      <p className="mt-3 text-sm leading-relaxed text-gold-400/70">{MEMBERSHIP_CARD.description}</p>
      <p className="mt-3 text-sm leading-relaxed text-gold-400/70">{MEMBERSHIP_CARD.density}</p>

      <ul className="mt-5 flex flex-col gap-2.5">
        {MEMBERSHIP_CARD.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5 text-sm text-gold-400/85">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-accent">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-1">
        <div className="flex items-baseline gap-2">
          <span className="font-data text-lg text-gold-400/40 line-through">
            {format(LAUNCH.monthlyOriginal)}
          </span>
          <span className="font-data text-3xl font-bold text-gold-400">
            {format(PRICES.baseMonthly)}
          </span>
          <span className="text-sm font-medium text-gold-400/50">/mes</span>
        </div>
        <p className="text-sm text-gold-400/60">
          Anual: <span className="line-through text-gold-400/40">{format(LAUNCH.annualOriginal)}</span>{' '}
          <span className="font-semibold text-gold-400">{format(PRICES.baseAnnual)}</span> — {MEMBERSHIP_CARD.annualNote}
          <span className="font-semibold text-accent">{format(PRICES.baseAnnualSaving)}</span>
        </p>
      </div>

      <div className="mt-4">
        <Countdown />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <Button onClick={() => open('membership')}>{MEMBERSHIP_CARD.cta}</Button>
        <p className="flex items-center gap-1.5 text-xs text-gold-400/60">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
          </svg>
          {MEMBERSHIP_CARD.guarantee}
        </p>
      </div>
    </article>
  )
}