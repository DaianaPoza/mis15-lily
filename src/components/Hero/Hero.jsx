import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__fondo" aria-hidden="true"></div>

      <div className="hero__contenido">
        <div className="animar-aparecer">
          <p className="texto-mis15 texto-rosegold">Mis 15</p>
        </div>

        <div className="animar-aparecer retraso-1">
          <h1 className="texto-nombre texto-rosegold hero__nombre">Lily</h1>
        </div>

        <div className="hero__scroll animar-aparecer retraso-3" aria-hidden="true">
          <span className="texto-espaciado hero__scroll-texto">Deslizá</span>
          <span className="hero__flecha">⌄</span>
        </div>
      </div>
    </section>
  )
}