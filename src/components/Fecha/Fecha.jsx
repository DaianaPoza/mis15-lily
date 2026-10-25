import './Fecha.css'

// 20:00 hs Argentina = 23:00 UTC. Fin estimado: 04:00 hs (07:00 UTC)
const LINK_CALENDARIO =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  `&text=${encodeURIComponent('Mis 15 - Lily')}` +
  '&dates=20261212T230000Z/20261213T070000Z' +
  `&details=${encodeURIComponent('¡Te espero para celebrar mis 15!')}`

export default function Fecha() {
  return (
    <section className="seccion seccion--flores fecha">
      <h2 className="seccion__titulo texto-rosegold">¿Cuándo?</h2>

      <div className="fecha__calendario">
        <p className="texto-espaciado">Diciembre</p>

        <div className="fecha__fila">
          <span className="fecha__lateral">Sábado</span>
          <span className="fecha__dia texto-rosegold">12</span>
          <span className="fecha__lateral">20:00 hs</span>
        </div>

        <p className="texto-espaciado">2026</p>
      </div>

      <a
        className="boton fecha__boton"
        href={LINK_CALENDARIO}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agendar fecha
      </a>
    </section>
  )
}