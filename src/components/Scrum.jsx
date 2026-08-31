import { scrumCaracteristicas, scrumEventos, scrumRoles, scrumArtefactos } from '../data/content'
import { Icon, IconBadge } from './Icon'
import Reveal from './Reveal'

function Steps({ steps }) {
  return (
    <div className="grid grid-4">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 70}>
          <div className="card centered step-card">
            <span className="step-number">{i + 1}</span>
            <IconBadge name={s.icon} tone={i % 2 === 0 ? 'purple' : 'teal'} size={48} />
            <h3 className="tight">{s.title}</h3>
            <p className="small">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function Scrum() {
  return (
    <>
      <section className="hero hero-sm">
        <h1>Scrum</h1>
      </section>

      <section className="section split">
        <Reveal>
          <div className="hero-visual" aria-hidden="true">
            <span className="scrum-glyph tone-a">
              <Icon name="cycle" size={30} />
            </span>
            <span className="scrum-glyph tone-b">
              <Icon name="rocket" size={30} />
            </span>
            <span className="scrum-glyph tone-c">
              <Icon name="target" size={30} />
            </span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card panel">
            <h2>¿Qué es Scrum?</h2>
            <p>
              Scrum es un marco de trabajo ágil para desarrollar y sostener productos complejos.
              Organiza el trabajo en ciclos cortos llamados sprints, en los que un equipo
              autoorganizado planifica, construye, revisa y mejora de forma continua, entregando
              valor de manera frecuente en lugar de esperar a un único lanzamiento final.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="band dark divider">
        <Reveal as="h2" className="band-title">
          Características de Scrum
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-3">
          {scrumCaracteristicas.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="card">
                <IconBadge name={c.icon} tone={i % 2 === 0 ? 'purple' : 'teal'} />
                <h3>{c.title}</h3>
                <p className="small">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Tipos de reuniones (eventos de Scrum)
        </Reveal>
      </section>
      <section className="section">
        <Steps steps={scrumEventos} />
      </section>

      <section className="band dark divider">
        <Reveal as="h2" className="band-title">
          Elementos de Scrum
        </Reveal>
      </section>
      <section className="section">
        <h2 className="centered card-title-standalone">Roles</h2>
        <div className="grid grid-3">
          {scrumRoles.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <article className="card centered">
                <IconBadge name={r.icon} tone="purple" size={64} />
                <h3>{r.title}</h3>
                <p className="small">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="centered card-title-standalone">Artefactos</h2>
        <div className="grid grid-3">
          {scrumArtefactos.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <article className="card centered">
                <IconBadge name={a.icon} tone="teal" size={64} />
                <h3>{a.title}</h3>
                <p className="small">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
