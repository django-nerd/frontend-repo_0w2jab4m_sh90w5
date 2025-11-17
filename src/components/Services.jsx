import { useEffect, useState } from 'react'
import { Rocket, Server, PenTool, MessageCircle, Bot, Smartphone, Plane, Building2, Megaphone, Globe } from 'lucide-react'

const icons = {
  marketing: Megaphone,
  hosting: Server,
  design: PenTool,
  consulting: MessageCircle,
  social: Globe,
  ads: Megaphone,
  ai: Bot,
  web: Rocket,
  travel: Plane,
  property: Building2,
  mobile: Smartphone,
}

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/services`)
        if (!res.ok) throw new Error('Failed to load services')
        const data = await res.json()
        setServices(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <section id="services" className="py-24"><div className="max-w-7xl mx-auto px-4">Loading services…</div></section>
  if (error) return <section id="services" className="py-24"><div className="max-w-7xl mx-auto px-4 text-red-600">{error}</div></section>

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we do</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">A complete stack of growth, brand, and product capabilities to move you from idea to market domination.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = icons[s.id] || Rocket
            return (
              <div key={s.id} className="group p-6 rounded-xl border border-gray-200 hover:shadow-lg transition bg-white">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 text-white grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
