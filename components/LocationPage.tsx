type LocationPageProps = {
  city: string
  state: string
  intro: string
  localNote?: string
  nearbyAreas: {
    label: string
    href: string
  }[]
}

export default function LocationPage({
  city,
  state,
  intro,
  localNote,
  nearbyAreas,
}: LocationPageProps) {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          {city} {state} Restoration Company
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Restoration & Remodeling in {city}, {state}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          {intro}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="tel:+13608233196" className="rounded-full bg-white px-8 py-4 text-center font-medium text-black">
            Call Now
          </a>

          <a href="/contact" className="rounded-full border border-white/20 px-8 py-4 text-center font-medium">
            Request Inspection
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">
              Property Damage Services in {city}
            </h2>

            <p className="mt-4 leading-8 text-neutral-300">
              ONA Restoration helps homeowners with water damage, fire and smoke
              damage, mold-related repair planning, reconstruction, kitchen
              remodeling, bathroom remodeling, and interior repairs after
              property damage.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">
              Local Repair Planning
            </h2>

            <p className="mt-4 leading-8 text-neutral-300">
              {localNote ||
                'We help document visible conditions, affected materials, and repair needs so homeowners have a clearer path from damage to repair.'}
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">
              Services available in {city} {state}
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Water damage restoration</li>
              <li>Fire and smoke damage restoration</li>
              <li>Mold remediation support</li>
              <li>Reconstruction after mitigation</li>
              <li>Kitchen remodeling</li>
              <li>Bathroom remodeling</li>
              <li>Drywall, flooring, trim, cabinets, and paint repairs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">
              Nearby service areas
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {nearbyAreas.map((area) => (
                <a key={area.href} href={area.href} className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                  {area.label}
                </a>
              ))}

              <a href="/restoration/water-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Water Damage
              </a>

              <a href="/kitchen-remodeling" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Kitchen Remodeling
              </a>

              <a href="/bathroom-remodeling" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Bathroom Remodeling
              </a>

              <a href="/insurance-claims" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Insurance Claims
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
