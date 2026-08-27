import { useEffect, useRef } from 'react'
import { useVideo } from '../context/VideoContext'
import { FREE_VIDEOS } from '../data/content'

export default function VideoModal() {
  const { videoIndex, open, close } = useVideo()
  const closeRef = useRef(null)

  useEffect(() => {
    if (videoIndex === null) return
    closeRef.current?.focus()
  }, [videoIndex])

  useEffect(() => {
    if (videoIndex === null) return
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
  }, [videoIndex, close])

  if (videoIndex === null) return null

  const video = FREE_VIDEOS.videos[videoIndex]
  if (!video) return null

  const total = FREE_VIDEOS.videos.length

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      onClick={close}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
        onClick={(e) => e.stopPropagation()}
        className="glass card-ring relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-10 rounded-lg p-2 text-gold-400/60 transition-colors hover:bg-ink-700 hover:text-gold-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Cerrar video"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <div className="relative aspect-video">
          <iframe
            src={video.embedUrl}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-ink-900/90 px-5 py-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gold-400">{video.title}</p>
            <p className="text-xs text-gold-400/50">{video.category} · Gratis · sin registro</p>
          </div>
          <span className="font-data shrink-0 rounded bg-ink-700 px-2.5 py-1 text-xs font-bold text-gold-400/80">
            {video.duration}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 bg-ink-900/90 px-5 py-3">
          <button
            type="button"
            onClick={() => open(videoIndex > 0 ? videoIndex - 1 : total - 1)}
            className="flex items-center gap-1.5 text-xs font-medium text-gold-400/60 transition-colors hover:text-gold-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Anterior
          </button>
          <span className="text-xs text-gold-400/40">
            {videoIndex + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => open((videoIndex + 1) % total)}
            className="flex items-center gap-1.5 text-xs font-medium text-gold-400/60 transition-colors hover:text-gold-400"
          >
            Siguiente
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
