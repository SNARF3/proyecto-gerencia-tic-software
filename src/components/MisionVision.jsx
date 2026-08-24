import { IconBadge } from './Icon'
import Reveal from './Reveal'

export default function MisionVision() {
  return (
    <>
      <section className="hero hero-sm">
        <h1>Misión y Visión</h1>
      </section>

      <section className="section split">
        <Reveal>
          <div className="card panel">
            <h2>¿Qué son la misión y la visión?</h2>
            <p>
              La misión es la razón de ser de una organización: describe qué hace, para quién
              trabaja y cómo genera valor en el presente. La visión, en cambio, es la imagen del
              futuro que la organización aspira a alcanzar a largo plazo, el punto hacia el cual
              se dirigen todos sus esfuerzos.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card panel">
            <h2>¿Por qué son importantes?</h2>
            <p>
              Juntas le dan dirección y coherencia al trabajo de un equipo: la misión guía las
              decisiones del día a día y la visión inspira las metas a futuro. Tenerlas claras
              ayuda a alinear a las personas alrededor de un mismo propósito, facilita la
              planeación estratégica y permite evaluar si el trabajo realizado realmente acerca a
              la organización a lo que quiere llegar a ser.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="band dark divider">
        <Reveal as="h2" className="band-title">
          Videos explicativos
        </Reveal>
      </section>

      <section className="section">
        <div className="grid grid-2">
          <Reveal>
            <div className="card video-card">
              <h3>¿Qué es la misión?</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/d-IqjXIgyJg"
                  title="¿Qué es la misión de una empresa?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card video-card">
              <h3>¿Qué es la visión?</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/Lk6OfqndH1k"
                  title="¿Qué es la visión de una empresa?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Nuestra Misión y Visión
        </Reveal>
      </section>

      <section className="section">
        <div className="grid grid-2">
          <Reveal>
            <div className="card">
              <IconBadge name="target" tone="purple" size={48} />
              <h2>Misión</h2>
              <p>
                Desarrollar soluciones basadas en software garantizando calidad tanto en
                funcionalidad como en seguridad para generar resultados de alto valor en el área
                médica.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card">
              <IconBadge name="compass" tone="teal" size={48} />
              <h2>Visión</h2>
              <p>
                Ser un estándar en el desarrollo de herramientas digitales de alto impacto médico
                apoyando las necesidades del área de la salud.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
