import { useState } from 'react'
import Nav from './components/Nav'
import Inicio from './components/Inicio'
import Organigrama from './components/Organigrama'
import GestionTecnologia from './components/GestionTecnologia'
import CienciaTecnologia from './components/CienciaTecnologia'
import MisionVision from './components/MisionVision'
import './App.css'

const TABS = [
  { id: 'inicio', label: 'Inicio', Component: Inicio },
  { id: 'gestion', label: 'Gestión de Tecnología', Component: GestionTecnologia },
  { id: 'ciencia', label: 'Ciencia, Tecnología e Innovación', Component: CienciaTecnologia },
  { id: 'mision-vision', label: 'Misión y Visión', Component: MisionVision },
  { id: 'organigrama', label: 'Organigrama', Component: Organigrama },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio')
  const Active = TABS.find((t) => t.id === activeTab).Component

  return (
    <div className="app">
      <Nav tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
      <main key={activeTab} className="page">
        <Active />
      </main>
      <footer className="footer">
        <p>Área de Software Silk Road &middot; Proyecto académico de Gerencia de las TIC</p>
      </footer>
    </div>
  )
}
