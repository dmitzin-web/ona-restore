export const metadata = {
  title: 'Restoration Company in Battle Ground WA | ONA Restoration',
  description:
    'Water damage, fire and smoke damage, mold remediation support, reconstruction, kitchen remodeling, and bathroom remodeling in Battle Ground WA.',
}

export default function BattleGroundPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Battle Ground WA Restoration Company
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Restoration & Remodeling in Battle Ground, WA
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          ONA Restoration provides water damage restoration, fire and smoke damage
          support, mold remediation planning, reconstruction, and remodeling
          services for homeowners in Battle Ground and surrounding Clark County areas.
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
              Property Damage Services in Battle Ground
            </h2>

            <p className="mt-4 leading-8 text-neutral-300">
              Battle Ground properties can experience plumbing leaks, storm
              intrusion, crawlspace moisture, smoke damage, and reconstruction
              needs. ONA Restoration helps homeowners move from inspection to repair.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">
              Reconstruction After Damage
            </h2>

            <p className="mt-4 leading-8 text-neutral-300">
              After mitigation or material removal, ONA Restoration can help rebuild
              drywall, trim, flooring, paint, cabinets, and interior finishes.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">
              Services available in Battle Ground WA
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Water damage restoration</li>
              <li>Fire and smoke damage restoration</li>
              <li>Mold remediation support</li>
              <li>Drywall, texture, trim, and paint repairs</li>
              <li>Flooring and cabinet-related repairs</li>
              <li>Interior reconstruction and remodeling</li>
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

              <a href="/washougal-wa" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Washougal WA
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
