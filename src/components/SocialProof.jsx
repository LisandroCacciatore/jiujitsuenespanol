import { useState, useEffect } from 'react'

const NOTIFICATIONS = [
  { name: 'Martín', location: 'Córdoba, Argentina', action: 'se unió a la Membresía Base', time: 2 },
  { name: 'Lucía', location: 'Bogotá, Colombia', action: 'compró el curso de Bodylock', time: 5 },
  { name: 'Diego', location: 'Monterrey, México', action: 'se unió a la Membresía Base', time: 8 },
  { name: 'Ana', location: 'Buenos Aires, Argentina', action: 'compró 3 cursos con 20% off', time: 12 },
  { name: 'Carlos', location: 'Lima, Perú', action: 'se unió a la Membresía Base', time: 15 },
]

export default function SocialProof() {
  const [current, setCurrent] = useState(-1)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const showRandom = () => {
      const idx = Math.floor(Math.random() * NOTIFICATIONS.length)
      setCurrent(idx)
      setVisible(true)
      setTimeout(() => setVisible(false), 4000)
    }

    const timer = setTimeout(showRandom, 8000)
    const interval = setInterval(showRandom, 25000)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  if (current === -1) return null

  const n = NOTIFICATIONS[current]

  return (
    <div
      className={`fixed bottom-20 left-4 z-30 max-w-xs transition-all duration-500 sm:bottom-24 sm:left-6 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/95 px-4 py-3 shadow-xl backdrop-blur-md">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
          {n.name[0]}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-gold-400">
            {n.name} <span className="font-normal text-gold-400/50">de {n.location}</span>
          </p>
          <p className="text-[11px] text-gold-400/60">{n.action}</p>
        </div>
      </div>
    </div>
  )
}
