import { FINAL_CTA } from '../data/content'
import Button from './ui/Button'
import { useVideo } from '../context/VideoContext'

export default function FinalCta() {
  const { open } = useVideo()

  return (
    <section className="hero-glow border-t border-white/5">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl uppercase text-gold-400 sm:text-4xl">
          {FINAL_CTA.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gold-400/70">
          {FINAL_CTA.subtitle}
        </p>
        <div className="mt-8">
          <Button onClick={() => open(0)} size="lg">
            {FINAL_CTA.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}