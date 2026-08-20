import {
  gestionComponentes,
  gestionProcesos,
  gestionHerramientas,
  gestionBeneficios,
  gestionIntroImage,
} from '../data/content'
import { IconBadge, CardPhoto, IntroPhoto } from './Icon'
import Reveal from './Reveal'

export default function GestionTecnologia() {
  return (
    <>
      <section className="hero hero-sm">
        <h1>Gestión de Tecnologías</h1>
      </section>

      <section className="section split">
        <Reveal>
          <IntroPhoto src={gestionIntroImage} alt="Sala de monitoreo tecnológico" />
        </Reveal>
        <Reveal delay={120}>
          <div className="card panel">
            <h2>¿Qué es la Gestión de Tecnologías?</h2>
            <p>
              La gestión de tecnología consiste en garantizar que las herramientas tecnológicas
              estén alineadas con las metas del negocio. Esto implica planificar, implementar y
              optimizar los recursos tecnológicos para sacarles el mayor provecho posible mientras
              se reducen los riesgos asociados.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="band dark divider">
        <Reveal as="h2" className="band-title">
          Componentes clave de la gestión de la tecnología
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-4">
          {gestionComponentes.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="card">
                <CardPhoto src={c.image} alt={c.title} />
                <IconBadge name={c.icon} tone="teal" />
                <h3>{c.title}</h3>
                <p className="small">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          ¿Cuáles son los procesos de la gestión de la tecnología?
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-3">
          {gestionProcesos.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="card centered">
                <CardPhoto src={p.image} alt={p.title} />
                <IconBadge name={p.icon} tone="purple" />
                <h3>{p.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band dark divider">
        <Reveal as="h2" className="band-title">
          Herramientas para la gestión de la tecnología
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-4">
          {gestionHerramientas.map((h, i) => (
            <Reveal key={h.title} delay={i * 70}>
              <article className="card centered">
                <CardPhoto src={h.image} alt={h.title} />
                <IconBadge name={h.icon} tone="teal" />
                <h3 className="tight">{h.title}</h3>
                {h.sub && <p className="small muted">{h.sub}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band dark divider">
        <Reveal as="h2" className="band-title">
          Beneficios de la gestión efectiva de la tecnología
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-3">
          {gestionBeneficios.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <article className="card centered">
                <CardPhoto src={b.image} alt={b.title} />
                <IconBadge name={b.icon} tone="purple" />
                <h3>{b.title}</h3>
                <p className="small">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
