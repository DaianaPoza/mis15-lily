import { useState } from 'react'
import './Regalos.css'

const ALIAS = '008.ly'

const copiarTexto = async (texto) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(texto)
    return
  }
  const campo = document.createElement('textarea')
  campo.value = texto
  campo.setAttribute('readonly', '')
  campo.style.position = 'absolute'
  campo.style.left = '-9999px'
  document.body.appendChild(campo)
  campo.select()
  document.execCommand('copy')
  document.body.removeChild(campo)
}

export default function Regalos() {
  const [abierto, setAbierto] = useState(false)
  const [copiado, setCopiado] = useState(false)

  const handleCopiar = async () => {
    try {
      await copiarTexto(ALIAS)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      // si falla, el alias igual queda visible para copiarlo a mano
    }
  }

  return (
    <section className="seccion seccion--clara regalos">
      <h2 className="seccion__titulo texto-rosegold">Regalos</h2>

      <div className="icono-circulo" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
             stroke="currentColor" strokeWidth="1.3"
             strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="4" rx="1" />
          <path d="M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8" />
          <path d="M12 8v13" />
          <path d="M12 8C10.5 5 7 4.5 7 6.8 7 8 9 8 12 8z" />
          <path d="M12 8c1.5-3 5-3.5 5-1.2C17 8 15 8 12 8z" />
        </svg>
      </div>

      <p className="frase regalos__frase">
        ¡Tu presencia es mi mejor regalo! <br />Si además querés hacerme un obsequio,
        podés traerlo el día de la fiesta <br />o te dejo mi alias como otra opción
      </p>

      <button
        className={`boton regalos__toggle ${abierto ? 'regalos__toggle--abierto' : ''}`}
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        aria-controls="regalos-datos"
      >
        Alias <span className="regalos__chevron">⌄</span>
      </button>

      <div
        id="regalos-datos"
        className={`regalos__desplegable ${abierto ? 'regalos__desplegable--abierto' : ''}`}
      >
        <div className="regalos__desplegable-interior">
          <div className="tarjeta regalos__datos">
            <p className="regalos__alias">{ALIAS}</p>

            <button
              className={`boton regalos__boton ${copiado ? 'regalos__boton--copiado' : ''}`}
              onClick={handleCopiar}
              tabIndex={abierto ? 0 : -1}
            >
              <span aria-live="polite">{copiado ? '¡Copiado!' : 'Copiar alias'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}