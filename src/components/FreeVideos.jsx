import SmartImg from './ui/SmartImg'
import { FREE_VIDEOS, PHOTOS } from '../data/content'
import Button from './ui/Button'
import { useVideo } from '../context/VideoContext'

export default function FreeVideos() {
  const { open } = useVideo()

  return (
    <section id="gratis" className="section-anchor bg-ink-900/60 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {FREE_VIDEOS.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
            {FREE_VIDEOS.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gold-400/70">{FREE_VIDEOS.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FREE_VIDEOS.videos.map((video, i) => (
            <article
              key={video.title}
              className="card-ring group overflow-hidden rounded-2xl bg-ink-800/50 transition-transform duration-200 hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() => open(i)}
                className="relative aspect-video w-full"
                aria-label={`Reproducir: ${video.title}`}
              >
                <SmartImg
                  src={PHOTOS.freeVideos[i].url}
                  alt={PHOTOS.freeVideos[i].alt}
                  aspect="aspect-video"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 opacity-90 transition-all group-hover:opacity-100 group-hover:scale-110">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute right-3 top-3 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-gold-400/90">
                  {video.duration}
                </span>
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-400/80">
                  {video.category}
                </span>
              </button>
              <div className="p-5">
                <h3 className="text-sm font-semibold leading-snug text-gold-400">{video.title}</h3>
                <p className="mt-1.5 text-xs font-medium text-accent">Gratis · sin registro</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button onClick={() => open(0)} size="lg">
            {FREE_VIDEOS.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}