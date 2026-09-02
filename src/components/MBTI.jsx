import { mbtiDimensiones, mbtiResultados } from '../data/content'
import { IconBadge } from './Icon'
import Reveal from './Reveal'

function ResultCard({ result, index }) {
  return (
    <Reveal delay={index * 90}>
      <article className="card mbti-card">
        <div className="mbti-avatar-wrap">
          <img className="mbti-avatar" src={result.image} alt={`Ilustración del tipo ${result.nickname}`} loading="lazy" />
        </div>
        <span className="mbti-type-badge">{result.type}</span>
        <h3 className="tight">
          {result.name} · {result.nickname}
        </h3>
        <p className="small">{result.description}</p>
      </article>
    </Reveal>
  )
}

export default function MBTI() {
  return (
    <>
      <section className="hero hero-sm">
        <h1>MBTI</h1>
      </section>

      <section className="section split">
        <Reveal>
          <div className="card panel">
            <h2>¿Qué es el MBTI?</h2>
            <p>
              El MBTI (Myers-Briggs Type Indicator) es un modelo de personalidad que clasifica a
              las personas en 16 tipos, combinando cuatro pares de preferencias: Extravertido o
              Introvertido, Intuitivo u Observador, Pensamiento o Sentimiento, y Juicio o
              Percepción. El resultado se resume en un código de cuatro letras, como ISFJ o ENTJ.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card panel">
            <h2>¿Para qué sirve esta evaluación?</h2>
            <p>
              Ayuda a las personas y a los equipos a entender cómo piensan, se comunican y toman
              decisiones sus integrantes. En un equipo de trabajo permite reconocer fortalezas
              individuales, mejorar la comunicación entre perfiles distintos y orientar mejor la
              asignación de roles según las preferencias naturales de cada persona.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="band dark divider">
        <Reveal as="h2" className="band-title">
          Las dimensiones de la personalidad
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-3">
          {mbtiDimensiones.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <article className="card">
                <IconBadge name={d.icon} tone={i % 2 === 0 ? 'purple' : 'teal'} />
                <h3 className="tight">{d.title}</h3>
                <p className="small muted mbti-poles">{d.poles}</p>
                <p className="small">{d.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Resultados obtenidos
        </Reveal>
      </section>
      <section className="section">
        <p className="centered muted" style={{ maxWidth: 720, margin: '0 auto 32px' }}>
          Cada integrante del equipo realizó el test de personalidad en 16personalities. Estos son
          los resultados que obtuvo cada quien.
        </p>
        <div className="grid grid-3">
          {mbtiResultados.map((r, i) => (
            <ResultCard key={r.name} result={r} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
