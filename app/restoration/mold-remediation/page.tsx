import ServiceAreasSection from '@/components/ServiceAreasSection'
import FaqSchema from '@/components/FaqSchema'
import FaqSection from '@/components/FaqSection'
const moldFaqs = [
  {
    question: 'What causes mold after water damage?',
    answer:
      'Mold can develop when moisture remains trapped in drywall, flooring, cabinets, insulation, crawlspaces, or other building materials for an extended period.',
  },
  {
    question: 'Should mold be tested before remediation?',
    answer:
      'Testing depends on the situation, visible conditions, project size, health concerns, and whether third-party documentation is needed. Some projects may also require professional assessment.',
  },
  {
    question: 'Can mold return after repairs?',
    answer:
      'Yes, if the original moisture source is not corrected. Proper repair planning should address the water source, affected materials, and conditions that allowed mold growth.',
  },
  {
    question: 'Does ONA Restoration rebuild after mold remediation?',
    answer:
      'Yes. ONA Restoration can help repair drywall, trim, flooring, paint, insulation, cabinets, and other finishes after affected materials are removed.',
  },
]

export const metadata = {
  title: 'Mold Remediation Support in Vancouver WA | ONA Restoration',
  description:
    'Mold remediation support, moisture-related repair planning, containment coordination, reconstruction, drywall, flooring, and finish repairs in Vancouver WA and Clark County.',
}

export default function MoldRemediationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <FaqSchema items={moldFaqs} />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Mold Remediation · Vancouver WA · Clark County
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Mold Remediation in Vancouver, WA
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          Mold problems usually start with moisture. ONA Restoration helps identify
          affected areas, document visible conditions, coordinate remediation
          planning, and restore damaged building materials after removal.
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
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Moisture Source</h2>
            <p className="mt-4 text-neutral-300">
              Mold remediation should begin with understanding the moisture
              source so the problem does not return after repairs.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Containment Planning</h2>
            <p className="mt-4 text-neutral-300">
              Proper containment, negative air, PPE, and removal methods depend
              on the size, location, and severity of the affected area.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Repair After Removal</h2>
            <p className="mt-4 text-neutral-300">
              After contaminated materials are removed, affected drywall, trim,
              flooring, insulation, and finishes may need reconstruction.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">Common mold locations</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Crawlspaces and subfloor areas</li>
              <li>Behind cabinets and vanities</li>
              <li>Bathrooms, kitchens, and laundry rooms</li>
              <li>Drywall affected by long-term moisture</li>
              <li>Areas affected by roof leaks or plumbing leaks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Why documentation matters</h2>
            <p className="mt-5 leading-8 text-neutral-300">
              Mold work often requires clear documentation of visible growth,
              moisture conditions, affected materials, containment needs, and
              repair scope. This helps property owners understand the process
              and supports insurance-related conversations where applicable.
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
      <FaqSection items={moldFaqs} />
      <ServiceAreasSection />
    </main>
  )
}