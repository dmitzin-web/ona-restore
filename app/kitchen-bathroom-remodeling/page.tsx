export const metadata = {
  title: 'Kitchen & Bathroom Remodeling in Vancouver WA | ONA Restoration',
  description:
    'Kitchen remodeling, bathroom remodeling, reconstruction, cabinets, flooring, drywall, tile, paint, and interior renovation services in Vancouver WA and Clark County.',
}

export default function KitchenBathroomPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
          Kitchen & Bathroom Remodeling
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Kitchen and bathroom remodeling in Vancouver, WA.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          ONA Restoration handles kitchen remodeling, bathroom remodeling,
          interior reconstruction, cabinets, flooring, tile, drywall, paint,
          trim, and finish upgrades for homeowners across Vancouver WA and
          Clark County.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+13600000000"
            className="rounded-full bg-white px-8 py-4 text-center font-medium text-black"
          >
            Call Now
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/15 px-8 py-4 text-center font-medium"
          >
            Request Estimate
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Kitchen Remodeling
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              Cabinets, countertops coordination, flooring, drywall, paint,
              trim, layout repairs, finish upgrades, and reconstruction after
              water or fire-related damage.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Bathroom Remodeling
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              Vanity replacement, tile, flooring, drywall, paint, trim,
              moisture-related repairs, and bathroom reconstruction after
              leaks or property damage.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">
              Remodeling services
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Kitchen remodeling in Vancouver WA</li>
              <li>Bathroom remodeling in Vancouver WA</li>
              <li>Cabinet replacement and finish carpentry</li>
              <li>Flooring, trim, drywall, texture, and paint</li>
              <li>Tile, vanity, and interior finish repairs</li>
              <li>Insurance-related reconstruction and upgrades</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">
              Related restoration services
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/restoration/water-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Water Damage
              </a>

              <a href="/restoration/reconstruction" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Reconstruction
              </a>

              <a href="/insurance-claims" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Insurance Claims
              </a>

              <a href="/locations" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Service Areas
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
