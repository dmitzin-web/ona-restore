const trustItems = [
  {
    title: 'Restoration + Rebuild',
    text:
      'One team for property damage repair, reconstruction, kitchens, bathrooms, flooring, drywall, trim, and paint.',
  },
  {
    title: 'Insurance-Aware Documentation',
    text:
      'Clear visible-damage documentation, repair scope organization, and reconstruction planning for insurance-related projects.',
  },
  {
    title: 'Clark County Focus',
    text:
      'Built around Vancouver WA, Camas, Washougal, Battle Ground, Ridgefield, Salmon Creek, and Hazel Dell.',
  },
  {
    title: 'High-Finish Interior Work',
    text:
      'Remodeling-oriented finish work for kitchens, bathrooms, cabinets, flooring, drywall, paint, and trim details.',
  },
]

export default function TrustSection() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Why ONA Restoration
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Restoration knowledge with remodeling-level finish work.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
