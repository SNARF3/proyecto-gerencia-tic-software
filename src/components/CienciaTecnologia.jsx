import {
  metodoCientifico,
  ramasCiencia,
  ejemplosCiencia,
  tiposTecnologia,
  procesosTecnologia,
  tiposInnovacion,
  procesosInnovacion,
  cienciaIntroImage,
  tecnologiaIntroImage,
  innovacionIntroImage,
} from '../data/content'
import { IconBadge, CardPhoto, IntroPhoto } from './Icon'
import Reveal from './Reveal'

function Steps({ steps }) {
  return (
    <div className="grid grid-4">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 70}>
          <div className="card centered step-card">
            <span className="step-number">{i + 1}</span>
            <CardPhoto src={s.image} alt={s.title} />
            {!s.image && <IconBadge name="check" tone="purple" size={44} />}
            <h3 className="tight">{s.title}</h3>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function CienciaTecnologia() {
  return (
    <>
      <section className="hero hero-sm">
        <h1>
          Ciencia, Tecnología
          <br />e Innovación
        </h1>
      </section>

      <section className="band dark split">
        <Reveal>
          <IntroPhoto src={cienciaIntroImage} alt="Ciencia" round />
        </Reveal>
        <Reveal delay={100}>
          <div>
            <h2 className="light">Ciencia</h2>
            <p className="light">Conocimiento sistemático y verificable mediante el método científico.</p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <h2 className="centered card-title-standalone">Método científico</h2>
        <Steps steps={metodoCientifico} />
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Ramas
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-3">
          {ramasCiencia.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <article className="card">
                <CardPhoto src={r.image} alt={r.title} />
                <IconBadge name={r.icon} tone="teal" />
                <h3>{r.title}</h3>
                <p className="small">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Ejemplos
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-2">
          {ejemplosCiencia.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <article className="card centered">
                <CardPhoto src={e.image} alt={e.title} />
                <IconBadge name={e.icon} tone="purple" size={64} />
                <h3>{e.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band dark split">
        <Reveal>
          <IntroPhoto src={tecnologiaIntroImage} alt="Tecnología" round />
        </Reveal>
        <Reveal delay={100}>
          <div>
            <h2 className="light">Tecnología</h2>
            <p className="light">Aplicación del conocimiento científico para resolver problemas prácticos.</p>
          </div>
        </Reveal>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Tipos
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-3">
          {tiposTecnologia.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <article className="card">
                <CardPhoto src={t.image} alt={t.title} />
                <IconBadge name={t.icon} tone="purple" />
                <h3>{t.title}</h3>
                <p className="small">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Procesos
        </Reveal>
      </section>
      <section className="section">
        <Steps steps={procesosTecnologia} />
      </section>

      <section className="band dark split">
        <Reveal>
          <IntroPhoto src={innovacionIntroImage} alt="Innovación" round />
        </Reveal>
        <Reveal delay={100}>
          <div>
            <h2 className="light">Innovación</h2>
            <p className="light">Creación e implementación de ideas, productos o procesos nuevos.</p>
          </div>
        </Reveal>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Tipos
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-3">
          {tiposInnovacion.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <article className="card">
                <CardPhoto src={t.image} alt={t.title} />
                <IconBadge name={t.icon} tone="purple" />
                <h3>{t.title}</h3>
                <p className="small">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band teal divider">
        <Reveal as="h2" className="band-title light">
          Procesos
        </Reveal>
      </section>
      <section className="section">
        <div className="grid grid-5">
          {procesosInnovacion.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="card centered step-card">
                <span className="step-number">{i + 1}</span>
                <CardPhoto src={p.image} alt={p.title} />
                {!p.image && <IconBadge name="check" tone="purple" size={40} />}
                <h3 className="tight">{p.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
