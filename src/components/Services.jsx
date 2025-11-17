import { useEffect, useState } from 'react'
import { Rocket, Server, PenTool, MessageCircle, Bot, Smartphone, Plane, Building2, Megaphone, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import ServiceCards from './ServiceCards'

const icons = {
  marketing: <Megaphone className="h-5 w-5" />,
  hosting: <Server className="h-5 w-5" />,
  design: <PenTool className="h-5 w-5" />,
  consulting: <MessageCircle className="h-5 w-5" />,
  social: <Globe className="h-5 w-5" />,
  ads: <Megaphone className="h-5 w-5" />,
  ai: <Bot className="h-5 w-5" />,
  web: <Rocket className="h-5 w-5" />,
  travel: <Plane className="h-5 w-5" />,
  property: <Building2 className="h-5 w-5" />,
  mobile: <Smartphone className="h-5 w-5" />,
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

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40rem_20rem_at_70%_30%,rgba(99,102,241,0.06),transparent),radial-gradient(30rem_15rem_at_20%_60%,rgba(236,72,153,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-gray-900">What we do</motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="mt-2 text-gray-600 max-w-2xl">A complete stack of growth, brand, and product capabilities to move you from idea to market domination.</motion.p>

        {loading && <div className="mt-10 text-gray-600">Loading services…</div>}
        {error && <div className="mt-10 text-red-600">{error}</div>}
        {!loading && !error && (
          <ServiceCards items={services.map(s => ({ ...s, icon: icons[s.id] }))} />
        )}
      </div>
    </section>
  )
}
