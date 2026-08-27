import { COURSE_CARD, PRICES, LAUNCH } from '../data/content'
import { useCurrency } from '../hooks/useCurrency'
import { useCheckout } from '../context/CheckoutContext'
import Button from './ui/Button'
import Countdown from './Countdown'

export default function ProductCard() {
  const { format } = useCurrency()
  const { open } = useCheckout()

  return (
    <article className="glass card-ring glow-edge flex flex-col rounded-2xl p-7">
      <div className="mb-4 flex items-center gap-2 self-start">
        <span className="font-data rounded-full bg-ink-700 px-3 py-1 text-xs font-bold uppercase text-gold-400/80">
          {COURSE_CARD.tag}
        </span>
        <span className="font-data rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
          {LAUNCH.badge}
        </span>
      </div>
      <h3 className="font-display text-2xl uppercase text-gold-400">Arreglá un punto puntual</h3>
      <p className="mt-3 text-sm leading-relaxed text-gold-400/70">{COURSE_CARD.description}</p>

      <ul className="mt-5 flex flex-col gap-2">
        {COURSE_CARD.examples.map((ex) => (
          <li key={ex} className="flex items-center gap-2 text-sm text-gold-400/80">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {ex}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-1">
        <div className="flex items-baseline gap-2">
          <span className="font-data text-lg text-gold-400/40 line-through">
            {format(LAUNCH.courseOriginal)}
          </span>
          <span className="font-data text-3xl font-bold text-gold-400">
            {format(PRICES.courseSeminario)}
          </span>
          <span className="text-sm font-medium text-gold-400/50">pago único</span>
        </div>
        <p className="text-sm font-medium text-accent">{COURSE_CARD.priceNote}</p>
      </div>

      <div className="mt-4">
        <Countdown />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <Button onClick={() => open('course')}>{COURSE_CARD.cta}</Button>
        <p className="text-xs text-gold-400/50">{COURSE_CARD.discount}</p>
        <p className="flex items-center gap-1.5 text-xs text-gold-400/60">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
          </svg>
          {COURSE_CARD.guarantee}
        </p>
      </div>
    </article>
  )
}