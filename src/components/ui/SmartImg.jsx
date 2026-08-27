import { useState } from 'react'

export default function SmartImg({
  src,
  alt = '',
  aspect = 'aspect-video',
  rounded = '',
  className = '',
  imgClassName = '',
  eager = false,
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const show = loaded && !error

  return (
    <div className={`relative overflow-hidden ${aspect} ${rounded} ${className}`}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-800 to-black"
        aria-hidden="true"
      />
      {!error && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            show ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  )
}