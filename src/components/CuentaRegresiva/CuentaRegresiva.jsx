import './CuentaRegresiva.css'
import useCuentaRegresiva from '../../hooks/useCuentaRegresiva'

// El "-03:00" fija la hora de Argentina: la cuenta es correcta
// aunque un invitado abra la tarjeta desde otro país
const FECHA_EVENTO = '2026-12-12T20:00:00-03:00'

const dosDigitos = (numero) => String(numero).padStart(2, '0')

export default function CuentaRegresiva() {
  const tiempo = useCuentaRegresiva(FECHA_EVENTO)

  return (
    <section className="seccion seccion--clara cuenta">
      <h2 className="seccion__titulo texto-rosegold">Cuenta regresiva</h2>

      {tiempo ? (
        <>
          <div className="cuenta__grilla" role="timer">
            {[
              { valor: tiempo.dias, etiqueta: 'Días' },
              { valor: tiempo.horas, etiqueta: 'Horas' },
              { valor: tiempo.minutos, etiqueta: 'Min' },
              { valor: tiempo.segundos, etiqueta: 'Seg' },
            ].map(({ valor, etiqueta }) => (
              <div key={etiqueta} className="tarjeta cuenta__item">
                {/* la key cambia cada vez que cambia el número → se re-anima */}
                <span key={valor} className="cuenta__numero">
                  {dosDigitos(valor)}
                </span>
                <span className="cuenta__etiqueta">{etiqueta}</span>
              </div>
            ))}
          </div>

          <p className="frase cuenta__frase">¡Faltan muy poco para celebrar juntos!</p>
        </>
      ) : (
        <p className="frase cuenta__frase">¡Llegó el gran día!</p>
      )}
    </section>
  )
}