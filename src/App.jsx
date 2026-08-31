import { useState } from 'react'
import Nav from './components/Nav'
import Inicio from './components/Inicio'
import Organigrama from './components/Organigrama'
import GestionTecnologia from './components/GestionTecnologia'
import CienciaTecnologia from './components/CienciaTecnologia'
import MisionVision from './components/MisionVision'
import DescripcionPuestos from './components/DescripcionPuestos'
import Scrum from './components/Scrum'
import './App.css'

const TABS = [
  { id: 'inicio', label: 'Inicio', Component: Inicio },
  { id: 'gestion', label: 'Gestión de Tecnología', Component: GestionTecnologia },
  { id: 'ciencia', label: 'Ciencia, Tecnología e Innovación', Component: CienciaTecnologia },
  { id: 'mision-vision', label: 'Misión y Visión', Component: MisionVision },
  { id: 'organizacion', label: 'Organización', Component: Organigrama },
  { id: 'descripcion-puestos', label: 'Descripción de Posiciones', Component: DescripcionPuestos },
  { id: 'scrum', label: 'Scrum', Component: Scrum },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio')
  const [scrollTarget, setScrollTarget] = useState(null)
  const Active = TABS.find((t) => t.id === activeTab).Component

  function handleTabChange(id) {
    setActiveTab(id)
    setScrollTarget(null)
  }

  function goToPosition(positionId) {
    setActiveTab('descripcion-puestos')
    setScrollTarget(positionId)
  }

  return (
    <div className="app">
      <Nav tabs={TABS} activeTab={activeTab} onChange={handleTabChange} />
      <main key={activeTab} className="page">
        <Active onNavigate={goToPosition} scrollTarget={scrollTarget} />
      </main>
      <footer className="footer">
        <p>Área de Software Silk Road &middot; Proyecto académico de Gerencia de las TIC</p>
      </footer>
    </div>
  )
}
