import { motion, useScroll, useTransform } from 'framer-motion'

export default function BackgroundFX() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -120])
  const y2 = useTransform(scrollY, [0, 800], [0, 120])

  // Build an encoded SVG noise data URL to avoid JSX/arbitrary value parsing issues
  const noiseSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>
  `
  const noiseDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(noiseSvg)}`

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Gradient blobs parallax */}
      <motion.div style={{ y: y1 }} className="absolute -top-40 -left-40 h-[48rem] w-[48rem] rounded-full bg-gradient-to-br from-fuchsia-400/40 via-blue-400/30 to-cyan-300/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-40 -right-40 h-[44rem] w-[44rem] rounded-full bg-gradient-to-tr from-indigo-400/30 via-sky-400/25 to-emerald-300/20 blur-3xl" />

      {/* Vignette + noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.05)_100%)]" />
      <div
        className="absolute inset-0"
        style={{
          mixBlendMode: 'soft-light',
          opacity: 0.08,
          backgroundImage: `url(${noiseDataUrl})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />
    </div>
  )
}
