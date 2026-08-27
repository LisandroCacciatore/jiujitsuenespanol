import { WAYS } from '../data/content'
import ProductCard from './ProductCard'
import MembershipCard from './MembershipCard'

export default function TwoWays() {
  return (
    <section id="cursos" className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{WAYS.kicker}</p>
        <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
          {WAYS.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gold-400/70">{WAYS.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <ProductCard />
        <MembershipCard />
      </div>
    </section>
  )
}