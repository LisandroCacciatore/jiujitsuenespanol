import { BLOG } from '../data/blog'
import SmartImg from './ui/SmartImg'

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function Blog() {
  return (
    <section id="blog" className="section-anchor bg-ink-900/60 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{BLOG.kicker}</p>
          <h2 className="mt-3 font-display text-3xl uppercase text-gold-400 sm:text-4xl">
            {BLOG.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gold-400/70">{BLOG.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG.posts.map((post) => (
            <article
              key={post.title}
              className="card-ring group overflow-hidden rounded-2xl bg-ink-800/50 transition-transform duration-200 hover:-translate-y-1"
            >
              <a href={post.url} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SmartImg
                    src={post.image}
                    alt={post.title}
                    aspect="aspect-[16/10]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-accent/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-gold-400/50">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readTime} lectura</span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-gold-400 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gold-400/60">{post.excerpt}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
