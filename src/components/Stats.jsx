import { useState, useEffect, useRef } from 'react'

function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!startOnView) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, startOnView])

  return { count, ref }
}

export default function Stats() {
  const videos = useCountUp(118, 2000)
  const systems = useCountUp(8, 1500)
  const golds = useCountUp(30, 1800)

  return (
    <section className="border-y border-white/5 bg-ink-900/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div ref={videos.ref}>
            <p className="font-data text-4xl font-bold text-accent sm:text-5xl">{videos.count}+</p>
            <p className="mt-2 text-sm text-gold-400/60">videos en la biblioteca</p>
          </div>
          <div ref={systems.ref}>
            <p className="font-data text-4xl font-bold text-accent sm:text-5xl">{systems.count}</p>
            <p className="mt-2 text-sm text-gold-400/60">sistemas completos</p>
          </div>
          <div ref={golds.ref}>
            <p className="font-data text-4xl font-bold text-accent sm:text-5xl">{golds.count}+</p>
            <p className="mt-2 text-sm text-gold-400/60">oros IBJJF</p>
          </div>
        </div>
      </div>
    </section>
  )
}
