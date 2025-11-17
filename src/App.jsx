import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <CTA />
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} First World Agency · All rights reserved</p>
          <div className="text-sm text-gray-600">Built with AI automations, real operators, and relentless taste</div>
        </div>
      </footer>
    </div>
  )
}

export default App
