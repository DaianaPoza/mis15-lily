import { useEffect, useState } from 'react'

const calcularTiempo = (fechaObjetivo) => {
  const diferencia = new Date(fechaObjetivo) - new Date()

  if (diferencia <= 0) return null // ya llegó el día

  return {
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferencia / (1000 * 60)) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  }
}

export default function useCuentaRegresiva(fechaObjetivo) {
  const [tiempo, setTiempo] = useState(() => calcularTiempo(fechaObjetivo))

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo(fechaObjetivo))
    }, 1000)

    return () => clearInterval(intervalo) // limpia el intervalo al desmontar
  }, [fechaObjetivo])

  return tiempo
}