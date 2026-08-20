export default function Nav({ tabs, activeTab, onChange }) {
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
      </div>
    </header>
  )
}
