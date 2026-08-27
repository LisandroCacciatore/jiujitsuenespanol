import { createContext, useContext, useState, useCallback } from 'react'

const VideoContext = createContext(null)

export { VideoContext }

export function VideoProvider({ children }) {
  const [videoIndex, setVideoIndex] = useState(null)

  const open = useCallback((index) => setVideoIndex(index), [])
  const close = useCallback(() => setVideoIndex(null), [])

  return (
    <VideoContext.Provider value={{ videoIndex, open, close }}>
      {children}
    </VideoContext.Provider>
  )
}

export function useVideo() {
  const ctx = useContext(VideoContext)
  if (!ctx) throw new Error('useVideo debe usarse dentro de <VideoProvider>')
  return ctx
}
