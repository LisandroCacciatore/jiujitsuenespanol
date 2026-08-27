export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70'

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-dark active:scale-[0.98] shadow-[0_0_0_1px_rgba(224,36,44,0.3),0_8px_30px_-8px_rgba(224,36,44,0.7)]',
    ghost:
      'card-ring text-gold-400 hover:bg-ink-700/60 active:scale-[0.98]',
    soft: 'bg-ink-700 text-gold-400 hover:bg-ink-600 active:scale-[0.98]',
  }

  const sizes = {
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}