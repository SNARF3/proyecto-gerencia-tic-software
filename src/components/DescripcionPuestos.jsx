import { useEffect } from 'react'
import { positions } from '../data/content'
import Reveal from './Reveal'

function ListCard({ title, items }) {
  return (
    <div className="card">
      <h3 className="position-card-title">{title}</h3>
      <ul className="position-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function PositionBlock({ position, index }) {
  const { title, meta, finalidad, eficiencia, funciones, relaciones, responsabilidad, condiciones, riesgos, requerimientos, competencias, pdf } =
    position

  return (
    <>
      <section id={position.id} className="band dark divider">
        <Reveal as="h2" className="band-title">
          {index + 1}. {title}
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="card panel position-meta-card">
            <div className="position-meta-row">
              <span className="chip">Categoría: {meta.categoria}</span>
              <span className="chip">Departamento: {meta.departamento}</span>
              <span className="chip">N° de titulares: {meta.titulares}</span>
              <span className="chip">Jornada: {meta.jornada}</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-2 position-grid">
          <Reveal>
            <ListCard title="Finalidad" items={finalidad} />
          </Reveal>
          <Reveal delay={70}>
            <ListCard title="Áreas de eficiencia / resultado" items={eficiencia} />
          </Reveal>
          <Reveal delay={140}>
            <ListCard title="Funciones específicas del cargo" items={funciones} />
          </Reveal>
          <Reveal delay={140}>
            <div className="card">
              <h3 className="position-card-title">Relaciones</h3>
              <p className="small">
                <strong>Relaciones jerárquicas:</strong> {relaciones.jerarquicas}
              </p>
              <p className="small">
                <strong>Relaciones funcionales:</strong> {relaciones.funcionales}
              </p>
            </div>
          </Reveal>
          <Reveal delay={210}>
            <ListCard title="Responsabilidad" items={responsabilidad} />
          </Reveal>
          <Reveal delay={210}>
            <ListCard title="Condiciones de trabajo" items={condiciones} />
          </Reveal>
          <Reveal delay={280}>
            <ListCard title="Riesgos potenciales" items={riesgos} />
          </Reveal>
          <Reveal delay={280}>
            <ListCard title="Requerimientos del puesto" items={requerimientos} />
          </Reveal>
          <Reveal delay={350}>
            <ListCard title="Competencias profesionales" items={competencias} />
          </Reveal>
        </div>

        <Reveal delay={350}>
          <div className="position-pdf">
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
              Ver descripción completa en PDF ↗
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default function DescripcionPuestos({ scrollTarget }) {
  useEffect(() => {
    if (!scrollTarget) return
    const el = document.getElementById(scrollTarget)
    if (!el) return
    const nav = document.querySelector('.nav')
    const offset = (nav?.offsetHeight ?? 0) + 16
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }, [scrollTarget])

  return (
    <>
      <section className="hero hero-sm">
        <h1>Descripción de Posiciones</h1>
      </section>

      {positions.map((position, index) => (
        <PositionBlock key={position.id} position={position} index={index} />
      ))}
    </>
  )
}
