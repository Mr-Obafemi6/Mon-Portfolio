import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Cv from './pages/Cv'
import Expertise from './pages/Expertise'
import Home from './pages/Home'
import Journey from './pages/Journey'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import ProjectsFull from './pages/ProjectsFull'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profil" element={<About />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="realisations" element={<Projects />} />
        <Route path="realisations/tous" element={<ProjectsFull />} />
        <Route path="parcours" element={<Journey />} />
        <Route path="parcours/cv" element={<Cv />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
