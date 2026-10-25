import './Confirmacion.css'

// PENDIENTE: número de la clienta.
// Formato: 549 + código de área sin el 0 + número sin el 15
// Ejemplo Jujuy (0388) 15 412-3456 → '5493884123456'
const NUMERO_WHATSAPP = ''

const MENSAJE = '¡Hola Lily! Quiero confirmar mi asistencia a tus 15 el 12/12. Mi nombre es: '

const LINK_WHATSAPP = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(MENSAJE)}`

export default function Confirmacion() {
  return (
    <section className="seccion seccion--flores confirmacion">
      <h2 className="seccion__titulo texto-rosegold">Confirmá tu asistencia</h2>

      <p className="frase confirmacion__frase">
        Me encantaría que me acompañes <br /> en esta noche tan especial. <br />
        Por favor, confirmá tu asistencia.
      </p>

      {NUMERO_WHATSAPP ? (
        <a
          className="boton confirmacion__boton"
          href={LINK_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
               stroke="currentColor" strokeWidth="1.4"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.2A8 8 0 1 1 20 11.5z" />
          </svg>
          Confirmar por WhatsApp
        </a>
      ) : (
        <p className="texto-espaciado confirmacion__pendiente">
          Próximamente
        </p>
      )}
    </section>
  )
}