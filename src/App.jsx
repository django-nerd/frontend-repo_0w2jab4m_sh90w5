import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import BackgroundFX from './components/BackgroundFX'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <section className="pt-6">
        <div className="max-w-7xl mx-auto px-4">
          <Marquee items={[
            'Brand strategy',
            'Performance media',
            'CRO & landing tests',
            'AI automations',
            'Full‑stack builds',
            'Mobile apps',
            'Social growth',
            'Travel concierge',
            'Property management'
          ]} />
        </div>
      </section>
      <Services />
      <Showcase />
      <CTA />
      <footer className="py-12 border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} First World Agency · All rights reserved</p>
          <div className="text-sm text-gray-600">Built by operators. Less slides, more outcomes.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
