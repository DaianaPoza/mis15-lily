import './Portada.css'
import ramito from '../../assets/images/ramito.webp'

export default function Portada({ onIngresar, saliendo }) {
  return (
    <section className={`portada ${saliendo ? 'portada--saliendo' : ''}`}>
      <div className="portada__contenido animar-aparecer">

        <div className="portada__monograma">
          <img src={ramito} alt="" aria-hidden="true" className="portada__ramito" />
          <span className="titulo portada__letra">L</span>
        </div>

   <p className="texto-mis15 texto-rosegold portada__subtitulo">Mis 15</p>

<h1 className="texto-nombre texto-rosegold portada__nombre">Lily</h1>

      

        <p className="frase portada__frase">
          Me gustaría que seas parte de este momento tan importante para mí
        </p>

        <button className="boton portada__boton" onClick={onIngresar}>
          Ingresar <span className="boton__flecha">›</span>
        </button>

      </div>
    </section>
  )
}