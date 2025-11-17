export default function Showcase() {
  const items = [
    {
      title: 'DTC Ecommerce Lift',
      stat: '+214% ROAS',
      note: 'Scaled meta + search with creative refresh and landing tests.'
    },
    {
      title: 'SaaS Demand Engine',
      stat: '3.4x pipeline',
      note: 'Revamped ICP, offers, and lifecycle nurture. Built partner motions.'
    },
    {
      title: 'Travel Launch',
      stat: '0 → 10k MAU',
      note: 'Full-stack build: brand, app, site, CRM, and paid social.'
    }
  ]

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected results</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((x, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
              <p className="text-sm text-gray-500">{x.title}</p>
              <p className="mt-4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-500">{x.stat}</p>
              <p className="mt-2 text-sm text-gray-600">{x.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
