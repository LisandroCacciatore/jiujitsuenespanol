import { useState } from 'react'
import { QUIZ, QUESTIONS, getDrillsForAnswers, getScheduleForAnswers, AREA_LABELS } from '../data/quiz'
import { useVideo } from '../context/VideoContext'
import Button from './ui/Button'
import SmartImg from './ui/SmartImg'

function ProgressBar({ step }) {
  return (
    <div className="flex items-center gap-2">
      {QUIZ.steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                i < step
                  ? 'bg-accent text-white'
                  : i === step
                    ? 'bg-accent/20 text-accent ring-2 ring-accent'
                    : 'bg-ink-700 text-gold-400/40'
              }`}
            >
              {i < step ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                i + 1
              )}
            </span>
            <span className={`hidden text-xs font-medium sm:inline ${i === step ? 'text-gold-400' : 'text-gold-400/40'}`}>
              {label}
            </span>
          </div>
          {i < QUIZ.steps.length - 1 && (
            <div className={`h-px w-6 sm:w-10 ${i < step ? 'bg-accent' : 'bg-ink-700'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

function QuizStep({ question, onAnswer, onBack, step }) {
  return (
    <div>
      {step > 0 && (
        <button
          type="button"
          onClick={onBack}
          className="mb-6 flex items-center gap-1.5 text-xs font-medium text-gold-400/50 transition-colors hover:text-gold-400"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Atrás
        </button>
      )}

      <h3 className="font-display text-2xl uppercase text-gold-400 sm:text-3xl">
        {question.question}
      </h3>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onAnswer(opt.id)}
            className="card-ring group flex flex-col items-center gap-3 rounded-xl bg-ink-800/50 p-6 text-center transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-ink-800 hover:shadow-[0_0_20px_rgba(224,36,44,0.15)]"
          >
            <span className="text-3xl">{opt.icon}</span>
            <div>
              <p className="text-sm font-semibold text-gold-400 group-hover:text-accent transition-colors">{opt.label}</p>
              {opt.desc && <p className="mt-0.5 text-xs text-gold-400/50">{opt.desc}</p>}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function DrillCard({ drill, index, onPlay }) {
  if (drill.free) {
    return (
      <div className="card-ring overflow-hidden rounded-2xl bg-ink-800/50">
        <div className="relative aspect-video">
          <SmartImg src={drill.image} alt={drill.title} aspect="aspect-video" />
          <button
            type="button"
            onClick={() => onPlay()}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label={`Reproducir: ${drill.title}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 shadow-[0_0_30px_rgba(224,36,44,0.6)] transition-transform group-hover:scale-110">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Gratis
          </span>
          <span className="absolute right-3 top-3 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-gold-400/90">
            {drill.duration}
          </span>
        </div>
        <div className="p-5">
          <h4 className="text-sm font-semibold text-gold-400">{drill.title}</h4>
          <p className="mt-1.5 text-xs leading-relaxed text-gold-400/60">{drill.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="card-ring overflow-hidden rounded-2xl bg-ink-800/50 opacity-80">
      <div className="relative aspect-video overflow-hidden">
        <SmartImg src={drill.image} alt={drill.title} aspect="aspect-video" className="blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-800/80 ring-1 ring-white/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-400/70">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-ink-700/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-400/70">
          Premium
        </span>
        <span className="absolute right-3 top-3 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-gold-400/90">
          {drill.duration}
        </span>
      </div>
      <div className="p-5">
        <h4 className="text-sm font-semibold text-gold-400">{drill.title}</h4>
        <p className="mt-1.5 text-xs leading-relaxed text-gold-400/60">{drill.description}</p>
        <a
          href="#membresia"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent-dark"
        >
          Ver en la membresía
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function SchedulePreview({ schedule, drillNames }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-6">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">{schedule.label}</h4>
      <p className="mt-1 text-xs text-gold-400/50">Tu schedule semanal de drills</p>

      <div className="mt-5 flex flex-col gap-2">
        {schedule.days.map((d) => (
          <div
            key={d.day}
            className="flex items-center gap-3 rounded-lg bg-ink-900/60 px-4 py-3"
          >
            <span className="w-20 text-xs font-semibold text-gold-400">{d.day}</span>
            <div className="flex flex-wrap gap-1.5">
              {d.drills.map((di, i) => {
                if (di === -1) return <span key={i} className="rounded-full bg-ink-700 px-2.5 py-1 text-[10px] font-medium text-gold-400/60">Sparring</span>
                if (di === -2) return <span key={i} className="rounded-full bg-ink-700 px-2.5 py-1 text-[10px] font-medium text-gold-400/60">Técnica libre</span>
                return (
                  <span key={i} className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium text-accent">
                    {drillNames[di] || `Drill ${di + 1}`}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gold-400/50">{schedule.note}</p>
    </div>
  )
}

export default function TrainingQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ frequency: null, level: null, problem: null })
  const { open } = useVideo()

  function handleAnswer(value) {
    const key = QUESTIONS[step].id
    const newAnswers = { ...answers, [key]: value }
    setAnswers(newAnswers)
    if (step < 2) {
      setStep(step + 1)
    } else {
      setStep(3)
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1)
  }

  function handleRestart() {
    setStep(0)
    setAnswers({ frequency: null, level: null, problem: null })
  }

  const drills = step === 3 ? getDrillsForAnswers(answers) : []
  const schedule = step === 3 ? getScheduleForAnswers(answers) : null
  const areaLabel = AREA_LABELS[answers.problem] || ''

  return (
    <section id="diagnostico" className="section-anchor mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{QUIZ.kicker}</p>
        <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
          {QUIZ.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gold-400/70">{QUIZ.subtitle}</p>
      </div>

      <div className="mt-10">
        {step < 3 && (
          <div className="mb-8 flex justify-center">
            <ProgressBar step={step} />
          </div>
        )}

        {step < 3 ? (
          <QuizStep
            question={QUESTIONS[step]}
            onAnswer={handleAnswer}
            onBack={handleBack}
            step={step}
          />
        ) : (
          <div>
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Resultado</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-gold-400 sm:text-3xl">
                Tus 3 drills para {areaLabel}
              </h3>
              <p className="mt-2 text-sm text-gold-400/60">
                Basado en tu nivel {answers.level} y {answers.frequency} de entrenamiento
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {drills.map((drill, i) => (
                <DrillCard
                  key={drill.title}
                  drill={drill}
                  index={i}
                  onPlay={() => drill.embedUrl && open(0)}
                />
              ))}
            </div>

            {schedule && (
              <div className="mt-10">
                <SchedulePreview
                  schedule={schedule}
                  drillNames={drills.map((d) => d.title)}
                />
              </div>
            )}

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="#membresia" size="lg">
                Empezar con Base →
              </Button>
              <button
                type="button"
                onClick={handleRestart}
                className="text-sm font-medium text-gold-400/50 transition-colors hover:text-gold-400"
              >
                Hacer el quiz de nuevo
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
