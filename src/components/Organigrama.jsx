import { orgChart } from '../data/content'
import { Icon } from './Icon'
import Reveal from './Reveal'

function Node({ role, name, link, tier }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`org-node tier-${tier}`}>
      <span className="org-node-icon">
        <Icon name="people" size={20} />
      </span>
      <strong>{role}</strong>
      <span className="org-node-name">{name}</span>
      <span className="org-node-cta">Ver perfil ↗</span>
    </a>
  )
}

export default function Organigrama() {
  const { root, note } = orgChart

  return (
    <>
      <section className="hero hero-sm">
        <h1>Organigrama</h1>
      </section>

      <section className="section">
        <div className="org-wrap">
          <div className="org-chart">
            <Reveal>
              <div className="org-row">
                <Node role={root.role} name={root.name} link={root.link} tier="1" />
              </div>
            </Reveal>
            <div className="org-connector" />
            <Reveal delay={120}>
              <div className="org-row">
                <Node role={root.child.role} name={root.child.name} link={root.child.link} tier="2" />
              </div>
            </Reveal>
            <div className="org-connector org-connector-wide" />
            <Reveal delay={240}>
              <div className="org-row org-row-branch">
                {root.child.children.map((c) => (
                  <Node key={c.role} role={c.role} name={c.name} link={c.link} tier="3" />
                ))}
              </div>
            </Reveal>
          </div>
          <p className="muted centered note">{note}</p>
        </div>
      </section>
    </>
  )
}
