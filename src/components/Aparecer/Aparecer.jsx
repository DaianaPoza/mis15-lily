import { useEffect, useRef, useState } from 'react'

export default function Aparecer({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento) return

    // Navegadores muy viejos: se muestra directo, sin animación
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observador.unobserve(entrada.target) // se anima una sola vez
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observador.observe(elemento)
    return () => observador.disconnect()
  }, [])

  return (
    <div ref={ref} className={`aparecer ${visible ? 'aparecer--visible' : ''}`}>
      {children}
    </div>
  )
}