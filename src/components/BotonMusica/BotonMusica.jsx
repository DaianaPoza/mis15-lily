import { useEffect, useState } from 'react'
import './BotonMusica.css'

export default function BotonMusica({ audioRef }) {
  const [sonando, setSonando] = useState(false)

  // Escucha al audio real: el botón siempre muestra el estado correcto
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    setSonando(!audio.paused)

    const alReproducir = () => setSonando(true)
    const alPausar = () => setSonando(false)

    audio.addEventListener('play', alReproducir)
    audio.addEventListener('pause', alPausar)

    return () => {
      audio.removeEventListener('play', alReproducir)
      audio.removeEventListener('pause', alPausar)
    }
  }, [audioRef])

  const alternarMusica = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <button
      className={`boton-musica ${sonando ? 'boton-musica--sonando' : ''}`}
      onClick={alternarMusica}
      aria-label={sonando ? 'Pausar música' : 'Reproducir música'}
    >
      {sonando ? (
        // Pausa
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        // Play
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
        </svg>
      )}
    </button>
  )
}