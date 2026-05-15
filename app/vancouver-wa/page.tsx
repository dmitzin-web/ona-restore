export const metadata = {
  title: 'Restoration Company in Vancouver WA | ONA Restoration',
  description:
    'Water damage restoration, fire damage restoration, mold remediation support, reconstruction, kitchen remodeling, and bathroom remodeling in Vancouver WA.',
}

export default function VancouverPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Vancouver WA Restoration Company
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Restoration & Remodeling in Vancouver, WA
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          ONA Restoration provides water damage restoration, fire and smoke damage,
          mold remediation, reconstruction, and remodeling services across
          Vancouver WA and Clark County.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+13608233196"
            className="rounded-full bg-white px-8 py-4 text-center font-medium text-black"
          >
            Call Now
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-4 text-center font-medium"
          >
            Request Inspection
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">
              Emergency Property Damage Services
            </h2>

            <p className="mt-4 leading-8 text-neutral-300">
              Property damage can spread quickly after water intrusion, fire,
              smoke contamination, or mold growth. Fast response and proper
              documentation help reduce secondary damage and organize the repair process.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">
              Reconstruction & Remodeling
            </h2>

            <p className="mt-4 leading-8 text-neutral-300">
              After mitigation, ONA Restoration can help rebuild affected drywall,
              flooring, trim, cabinets, paint, and interior finishes throughout
              the reconstruction phase.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">
              Restoration services in Vancouver WA
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Water damage restoration</li>
              <li>Fire and smoke damage restoration</li>
              <li>Mold remediation support</li>
              <li>Drywall and texture repair</li>
              <li>Interior reconstruction</li>
              <li>Insurance claim documentation support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">
              Areas we serve
            </h2>

            <p className="mt-5 leading-8 text-neutral-300">
              Vancouver, Salmon Creek, Hazel Dell, Felida, Orchards, Camas,
              Washougal, Ridgefield, Battle Ground, and surrounding Clark County areas.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">
              Related services
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/restoration/water-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Water Damage
              </a>

              <a href="/restoration/fire-smoke-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Fire Damage
              </a>

              <a href="/restoration/mold-remediation" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Mold Remediation
              </a>

              <a href="/restoration/reconstruction" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Reconstruction
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