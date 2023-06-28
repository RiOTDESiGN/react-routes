import { NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'
import { Contact } from './pages/Contact'
import { PageNotFound } from './pages/PageNotFound'
import { ProjectsLayout } from './ProjectsLayout'

import './App.css'

function App() {
  return (
  <>
  <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li><NavLink to="/Projects">Projects</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
    </ul>
  </nav>
  <div className="homeAnimation">

  </div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Projects" element={<ProjectsLayout />}>
      <Route index element={<Projects />} />
      <Route path=":id" element={<Project />} />
    </Route>
    <Route path="/Contact" element={<Contact />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  <hr />
  </>
  )
}

export default App
