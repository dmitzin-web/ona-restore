export const metadata = {
  title: 'Insurance Claim Help for Property Damage',
  description:
    'Insurance claim documentation support for water, fire, smoke, mold, and reconstruction scopes in Vancouver WA and Portland metro.',
}

export default function InsuranceClaimsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Property Damage Claims · Documentation · Repair Scope
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Insurance Claim Help for Property Damage
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          Property damage claims can be stressful and confusing. ONA Restore
          helps document visible damage, repair needs, affected materials, and
          reconstruction scope so homeowners have a clearer path forward.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="tel:+13600000000" className="rounded-full bg-white px-8 py-4 text-center font-medium text-black">
            Call Now
          </a>
          <a href="/contact" className="rounded-full border border-white/20 px-8 py-4 text-center font-medium">
            Request Inspection
          </a>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-neutral-500">
          ONA Restore is not a public adjuster and does not make coverage
          determinations. Coverage depends on your insurance policy and carrier.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Damage Documentation</h2>
            <p className="mt-4 text-neutral-300">
              Photos, affected materials, rooms, measurements, and scope notes
              help organize the claim and repair process.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Repair Scope Review</h2>
            <p className="mt-4 text-neutral-300">
              We help identify visible repair needs related to water, fire,
              smoke, mold, and reconstruction work.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Rebuild Planning</h2>
            <p className="mt-4 text-neutral-300">
              A clear rebuild plan helps homeowners understand what happens
              after mitigation and how the home gets put back together.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">What we help document</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Water-damaged drywall, flooring, trim, cabinets, and insulation</li>
              <li>Fire, smoke, soot, and odor-related damage</li>
              <li>Mold-related material removal and repair needs</li>
              <li>Reconstruction scope after mitigation</li>
              <li>Room-by-room repair observations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Important note</h2>
            <p className="mt-5 leading-8 text-neutral-300">
              We do not determine insurance coverage, interpret your policy as
              legal advice, or act as a public adjuster. We provide restoration,
              remodeling, documentation, and repair-scope support based on the
              visible property conditions and project needs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Related services</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/restoration/water-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Water Damage
              </a>
              <a href="/restoration/fire-smoke-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Fire & Smoke Damage
              </a>
              <a href="/restoration/mold-remediation" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Mold Remediation
              </a>
              <a href="/restoration/reconstruction" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Reconstruction
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}