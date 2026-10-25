import './Footer.css'

// Cada pétalo con posición, tamaño, duración y retraso distintos
// para que el movimiento se vea natural y no sincronizado
const PETALOS = [
  { x: '8%',  tamano: '12px', duracion: '9s',  retraso: '0s' },
  { x: '22%', tamano: '9px',  duracion: '11s', retraso: '3s' },
  { x: '35%', tamano: '14px', duracion: '10s', retraso: '6s' },
  { x: '50%', tamano: '10px', duracion: '12s', retraso: '1.5s' },
  { x: '64%', tamano: '13px', duracion: '9.5s', retraso: '4.5s' },
  { x: '78%', tamano: '9px',  duracion: '11.5s', retraso: '7s' },
  { x: '90%', tamano: '12px', duracion: '10.5s', retraso: '2.5s' },
]

export default function Footer() {
  return (
    <footer className="seccion footer">
      <div className="footer__petalos" aria-hidden="true">
        {PETALOS.map((petalo, i) => (
          <span
            key={i}
            className="footer__petalo"
            style={{
              '--x': petalo.x,
              '--tamano': petalo.tamano,
              '--duracion': petalo.duracion,
              '--retraso': petalo.retraso,
            }}
          />
        ))}
      </div>

     <div className="footer__contenido">
  <p className="frase footer__frase">
    Porque los mejores momentos... <br /> se viven acompañados
  </p>

  <p className="texto-mis15 texto-rosegold footer__espero">Te espero</p>
  <p className="texto-nombre texto-rosegold footer__nombre">Lily</p>
</div>
    </footer>
  )
}