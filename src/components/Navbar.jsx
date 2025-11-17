import { useState } from 'react'
import { Menu, X, Rocket, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const NavLink = ({ id, label }) => (
    <button onClick={() => scrollTo(id)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
      {label}
    </button>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 grid place-items-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900">First World Agency</span>
        </div>

        <nav className="hidden md:flex items-center">
          <NavLink id="services" label="Services" />
          <NavLink id="work" label="Work" />
          <NavLink id="contact" label="Contact" />
          <a href="/test" className="ml-2 text-sm text-gray-600 hover:text-gray-900">System</a>
          <button onClick={() => scrollTo('contact')} className="ml-6 inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-md">
            <Phone className="h-4 w-4" /> Get a quote
          </button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col">
            <button onClick={() => scrollTo('services')} className="py-2 text-left">Services</button>
            <button onClick={() => scrollTo('work')} className="py-2 text-left">Work</button>
            <button onClick={() => scrollTo('contact')} className="py-2 text-left">Contact</button>
            <a href="mailto:hello@firstworld.agency" className="mt-2 inline-flex items-center gap-2 text-sm text-gray-700"><Mail className="h-4 w-4"/> hello@firstworld.agency</a>
          </div>
        </div>
      )}
    </header>
  )
}
