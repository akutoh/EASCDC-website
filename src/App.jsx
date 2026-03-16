import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/projects"   element={<Projects />} />
          <Route path="/services"   element={<Placeholder tab="Services" />} />
          <Route path="/about"      element={<Placeholder tab="About Us" />} />
          <Route path="/contact"    element={<Placeholder tab="Contact Us" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
