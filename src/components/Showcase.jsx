import { motion } from 'framer-motion'

export default function Showcase() {
  const items = [
    { title: 'DTC Ecommerce Lift', stat: '+214% ROAS', note: 'Scaled meta + search with creative refresh and landing tests.' },
    { title: 'SaaS Demand Engine', stat: '3.4x pipeline', note: 'Revamped ICP, offers, and lifecycle nurture. Built partner motions.' },
    { title: 'Travel Launch', stat: '0 → 10k MAU', note: 'Full-stack build: brand, app, site, CRM, and paid social.' },
  ]

  return (
    <section id="work" className="py-24 bg-white relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40rem_20rem_at_20%_10%,rgba(59,130,246,0.06),transparent),radial-gradient(30rem_15rem_at_80%_80%,rgba(16,185,129,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-gray-900">Selected results</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((x, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
            >
              <p className="text-sm text-gray-500">{x.title}</p>
              <p className="mt-4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-500">{x.stat}</p>
              <p className="mt-2 text-sm text-gray-600">{x.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
