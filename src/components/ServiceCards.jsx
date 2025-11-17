import { motion } from 'framer-motion'

export default function ServiceCards({ items }) {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ y: 24, opacity: 0, rotateX: -8 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="group relative p-6 rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur-sm overflow-hidden will-change-transform"
        >
          <div className="absolute inset-px rounded-[1rem] bg-gradient-to-br from-transparent via-transparent to-gray-50 pointer-events-none" />
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-400/30 to-blue-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="h-11 w-11 rounded-xl bg-gray-900 text-white grid place-items-center shadow-sm shadow-gray-900/10">
              {s.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.description}</p>
            <div className="mt-4 inline-flex items-center text-sm font-medium text-gray-900/80 group-hover:translate-x-1 transition-transform">Learn more →</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
