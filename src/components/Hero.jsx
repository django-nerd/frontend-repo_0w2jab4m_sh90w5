import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl py-24">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/60 backdrop-blur border border-white/50 text-gray-800">A first‑world, full‑stack marketing partner</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Build. Launch. Scale.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Marketing, design, development, AI automations, social growth, ads, hosting, mobile apps, travel concierge, and property management — executed end‑to‑end by one elite team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition-colors">Get a proposal</a>
            <a href="#services" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white/70 backdrop-blur border border-gray-200 text-gray-900 font-medium hover:bg-white transition">Explore services</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/40 to-white"></div>
    </section>
  )
}
