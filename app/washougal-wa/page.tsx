export const metadata = {
  title: 'Restoration Company in Washougal WA',
  description:
    'Water damage, fire damage, mold remediation, reconstruction, and remodeling services in Washougal WA and Clark County.',
}

export default function WashougalPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Washougal WA Restoration Company
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Restoration & Remodeling in Washougal, WA
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          ONA Restore provides water damage restoration, fire and smoke damage
          support, mold remediation planning, reconstruction, and remodeling
          services for homeowners in Washougal and surrounding Clark County areas.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="tel:+13600000000" className="rounded-full bg-white px-8 py-4 text-center font-medium text-black">
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
              Property Damage Services in Washougal
            </h2>

            <p className="mt-4 leading-8 text-neutral-300">
              Washougal homes can face storm-related moisture, roof leaks,
              plumbing failures, crawlspace water, smoke exposure, and interior
              reconstruction needs. ONA Restore helps organize the restoration
              and repair process.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">
              Repair Scope & Documentation
            </h2>

            <p className="mt-4 leading-8 text-neutral-300">
              We help document visible damage, affected materials, room-by-room
              conditions, and repair needs so homeowners have a clearer repair path.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">
              Services available in Washougal WA
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Water damage restoration</li>
              <li>Fire and smoke damage restoration</li>
              <li>Mold remediation support</li>
              <li>Drywall, flooring, trim, and paint repairs</li>
              <li>Reconstruction after mitigation</li>
              <li>Interior remodeling and rebuild work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">
              Nearby service areas
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/vancouver-wa" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Vancouver WA
              </a>

              <a href="/camas-wa" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Camas WA
              </a>

              <a href="/battle-ground-wa" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Battle Ground WA
              </a>

              <a href="/restoration/water-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Water Damage
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}