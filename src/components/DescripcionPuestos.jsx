import { useEffect, useRef, useState } from 'react'
import { orgChart, positions, mbtiResultados } from '../data/content'
import { Icon } from './Icon'
import Reveal from './Reveal'

function scrollToPosition(id) {
  const el = document.getElementById(id)
  if (!el) return
  const nav = document.querySelector('.nav')
  const offset = (nav?.offsetHeight ?? 0) + 16
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

function QuickNavNode({ role, positionId, tier }) {
  const assigned = mbtiResultados.find((m) => m.positionId === positionId)
  return (
    <button type="button" className={`org-node org-node-sm tier-${tier}`} onClick={() => scrollToPosition(positionId)}>
      <span className="org-node-icon">
        <Icon name="people" size={16} />
      </span>
      <strong>{role}</strong>
      {assigned && <span className="org-node-name">{assigned.name}</span>}
    </button>
  )
}

function QuickNav() {
  const { root } = orgChart
  return (
    <div className="org-wrap org-wrap-sm">
      <div className="org-chart">
        <div className="org-row">
          <QuickNavNode role={root.role} positionId={root.positionId} tier="1" />
        </div>
        <div className="org-connector" />
        <div className="org-row">
          <QuickNavNode role={root.child.role} positionId={root.child.positionId} tier="2" />
        </div>
        <div className="org-connector org-connector-wide" />
        <div className="org-row org-row-branch">
          {root.child.children.map((c) => (
            <QuickNavNode key={c.positionId} role={c.role} positionId={c.positionId} tier="3" />
          ))}
        </div>
      </div>
    </div>
  )
}

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
  const assigned = mbtiResultados.find((m) => m.positionId === position.id)

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

        {assigned && (
          <Reveal delay={35}>
            <div className="card panel position-assigned-card">
              <p className="small muted tight">Persona asignada</p>
              <h3 className="position-card-title">{assigned.name}</h3>
              <p className="small">
                <strong>Objetivo del cargo:</strong> {assigned.objetivo}
              </p>
            </div>
          </Reveal>
        )}

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
  const quickNavRef = useRef(null)
  const [showBackButton, setShowBackButton] = useState(false)

  useEffect(() => {
    if (!scrollTarget) return
    scrollToPosition(scrollTarget)
  }, [scrollTarget])

  useEffect(() => {
    const el = quickNavRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setShowBackButton(!entry.isIntersecting))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="hero hero-sm">
        <h1>Descripción de Posiciones</h1>
      </section>

      <section id="mini-organigrama" ref={quickNavRef} className="section" style={{ paddingBottom: 0 }}>
        <p className="centered muted" style={{ maxWidth: 640, margin: '0 auto 20px' }}>
          Usa este mini organigrama para saltar directamente a la descripción de cada cargo.
        </p>
        <QuickNav />
      </section>

      {positions.map((position, index) => (
        <PositionBlock key={position.id} position={position} index={index} />
      ))}

      <button
        type="button"
        className={`back-to-org-btn ${showBackButton ? 'visible' : ''}`}
        onClick={() => scrollToPosition('mini-organigrama')}
      >
        <Icon name="compass" size={18} />
        Volver al Organigrama
      </button>
    </>
  )
}
