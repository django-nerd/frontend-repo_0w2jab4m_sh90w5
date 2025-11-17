import { useEffect, useRef } from 'react'

export default function Marquee({ items = [], speed = 40 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const totalWidth = el.scrollWidth / 2
    let start

    const step = (t) => {
      if (!start) start = t
      const elapsed = (t - start) / 1000
      const x = (elapsed * speed) % totalWidth
      el.style.transform = `translateX(-${x}px)`
      anim = requestAnimationFrame(step)
    }

    let anim = requestAnimationFrame(step)
    return () => cancelAnimationFrame(anim)
  }, [speed])

  const row = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <div ref={ref} className="flex items-center gap-8 py-4 will-change-transform">
        {row.map((item, i) => (
          <div key={i} className="text-sm text-gray-700 whitespace-nowrap opacity-70 hover:opacity-100 transition">{item}</div>
        ))}
      </div>
    </div>
  )
}
