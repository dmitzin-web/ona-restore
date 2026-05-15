export const metadata = {
  title: 'Fire & Smoke Damage Restoration in Vancouver WA',
  description:
    'Fire, smoke, soot, odor, and reconstruction services in Vancouver WA, Clark County, and Portland metro. Insurance claim support available.',
}

export default function FireSmokeDamagePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Fire & Smoke Damage · Vancouver WA · Portland Metro
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Fire & Smoke Damage Restoration in Vancouver, WA
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          Fire damage is more than burned materials. Smoke, soot, odor,
          pressurization, contaminated contents, and reconstruction scope all
          need to be documented correctly for a proper restoration plan.
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
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Smoke & Soot</h2>
            <p className="mt-4 text-neutral-300">
              Soot can affect walls, ceilings, trim, cabinets, HVAC pathways,
              contents, and hidden surfaces depending on fire severity and air movement.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Odor Control</h2>
            <p className="mt-4 text-neutral-300">
              Smoke odor often requires cleaning, sealing, material removal,
              and reconstruction decisions — not just surface wiping.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Reconstruction</h2>
            <p className="mt-4 text-neutral-300">
              After mitigation, ONA Restore can help rebuild affected drywall,
              trim, flooring, cabinets, paint, and structural finishes.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">What fire damage can include</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Smoke and soot contamination</li>
              <li>Odor trapped in porous materials</li>
              <li>Damaged drywall, paint, trim, flooring, and cabinets</li>
              <li>Contents cleaning and pack-out coordination</li>
              <li>Emergency board-up and temporary protection</li>
              <li>Reconstruction after mitigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Insurance claim support</h2>
            <p className="mt-5 leading-8 text-neutral-300">
              Fire losses often involve multiple scopes: mitigation, contents,
              odor control, HVAC-related concerns, and rebuild. Proper photos,
              room-by-room documentation, and scope organization help support
              the claim review process.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Related services</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/restoration/water-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Water Damage
              </a>
              <a href="/restoration/mold-remediation" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Mold Remediation
              </a>
              <a href="/restoration/reconstruction" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Reconstruction
              </a>
              <a href="/insurance-claims" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Insurance Claim Help
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}