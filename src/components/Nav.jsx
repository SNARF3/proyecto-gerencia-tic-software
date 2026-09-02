import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 880

export default function Nav({ tabs, activeTab, onChange }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    if (!open) return
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    function handleResize() {
      if (window.innerWidth > MOBILE_BREAKPOINT) setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [open])

  function handleSelect(id) {
    onChange(id)
    setOpen(false)
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <span className="nav-brand-mark" />
          Silk Road <span className="nav-brand-sub">Software</span>
        </div>

        <nav className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={`nav-burger ${open ? 'active' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile-backdrop ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />

      <nav className={`nav-mobile-menu ${open ? 'open' : ''}`}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            className={`nav-mobile-tab ${activeTab === tab.id ? 'active' : ''}`}
            style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            onClick={() => handleSelect(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
