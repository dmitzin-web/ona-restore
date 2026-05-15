const steps = [
  {
    title: '1. Inspection & Documentation',
    text:
      'We review visible conditions, affected materials, moisture-related concerns, reconstruction needs, and project scope.',
  },
  {
    title: '2. Mitigation & Damage Stabilization',
    text:
      'Projects may involve water extraction, demolition, drying, smoke-related cleaning, containment planning, or moisture-related repairs.',
  },
  {
    title: '3. Reconstruction & Remodeling',
    text:
      'After mitigation, ONA Restoration helps rebuild drywall, flooring, cabinets, trim, paint, kitchens, bathrooms, and interior finishes.',
  },
]

export default function ProcessSection() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Process
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            From damage inspection to rebuild.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Restoration projects often move through multiple phases:
            inspection, mitigation, documentation, reconstruction,
            and interior finish work.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-neutral-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
