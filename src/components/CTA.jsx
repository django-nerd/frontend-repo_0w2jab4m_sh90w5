import { useState } from 'react'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', note: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', note: 'Sending…' })
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error('Submission failed')
      setStatus({ state: 'success', note: data.stored ? 'Request received! We\'ll reach out shortly.' : 'Request received! (offline storage)'} )
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (e) {
      setStatus({ state: 'error', note: e.message })
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tell us what you need</h2>
            <p className="mt-3 text-gray-600 max-w-xl">Share a bit about your goals. We\'ll come back with the fastest path to impact and a clear, fixed quote.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Under 24h response</li>
              <li>• Fixed-fee or performance-based options</li>
              <li>• NDA on request</li>
            </ul>
          </div>

          <form onSubmit={submit} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Your name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
              <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
              <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="Phone (optional)" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
              <input value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})} placeholder="Service of interest" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
            </div>
            <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Project details" rows={4} className="mt-4 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
            <button disabled={status.state==='loading'} className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition disabled:opacity-60">
              {status.state==='loading' ? 'Sending…' : 'Request proposal'}
            </button>
            {status.state!=='idle' && (
              <p className={`mt-3 text-sm ${status.state==='error' ? 'text-red-600' : 'text-gray-700'}`}>{status.note}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
