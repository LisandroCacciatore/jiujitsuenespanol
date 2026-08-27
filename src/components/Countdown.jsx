import { useState, useEffect } from 'react'
import { LAUNCH } from '../data/content'

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [remaining, setRemaining] = useState(() => calcRemaining())

  function calcRemaining() {
    const diff = new Date(LAUNCH.endDate) - new Date()
    if (diff <= 0) return null
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const id = setInterval(() => {
      const r = calcRemaining()
      setRemaining(r)
      if (!r) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  if (!remaining) return null

  const segments = [
    { label: 'días', value: remaining.days },
    { label: 'hs', value: remaining.hours },
    { label: 'min', value: remaining.minutes },
    { label: 'seg', value: remaining.seconds },
  ]

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold text-accent">{LAUNCH.endsIn}</span>
      <div className="flex gap-1.5">
        {segments.map((s) => (
          <span
            key={s.label}
            className="font-data inline-flex flex-col items-center rounded-md bg-ink-800 px-2.5 py-1.5 text-[10px] font-bold text-gold-400 card-ring"
          >
            <span className="text-sm leading-none">{pad(s.value)}</span>
            <span className="mt-0.5 text-gold-400/50">{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
