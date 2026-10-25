import './Lugar.css'

const LUGAR = {
  nombre: 'Cantaré',
  tipo: 'Salón de Fiestas',
  direccion: 'Av. San Martín, casi esq. Gral. Güemes',
  ciudad: 'Perico, Jujuy',
  linkMapa: 'https://maps.app.goo.gl/mwGyimw71297dCHY9',
}

export default function Lugar() {
  return (
    <section className="seccion seccion--clara lugar">
      <h2 className="seccion__titulo texto-rosegold">¿Dónde?</h2>

      <div className="icono-circulo" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
             stroke="currentColor" strokeWidth="1.4"
             strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      </div>

      <p className="titulo texto-rosegold lugar__nombre">{LUGAR.nombre}</p>
      <p className="texto-espaciado lugar__tipo">{LUGAR.tipo}</p>

      <p className="lugar__direccion">
        {LUGAR.direccion}
        <br />
        {LUGAR.ciudad}
      </p>

      <a
        className="boton lugar__boton"
        href={LUGAR.linkMapa}
        target="_blank"
        rel="noopener noreferrer"
      >
        Cómo llegar <span className="boton__flecha">›</span>
      </a>
    </section>
  )
}