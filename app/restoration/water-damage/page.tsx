import FaqSchema from '@/components/FaqSchema'
import FaqSection from '@/components/FaqSection'
const waterDamageFaqs = [
  {
    question: 'What should I do immediately after water damage?',
    answer:
      'If it is safe, stop the source of water, take photos before moving items, avoid disturbing contaminated materials, and request an inspection as soon as possible.',
  },
  {
    question: 'Can water damage lead to mold?',
    answer:
      'Yes. Moisture trapped behind drywall, under flooring, inside cabinets, or in crawlspaces can contribute to mold growth if not properly addressed.',
  },
  {
    question: 'Does ONA Restore help with insurance documentation?',
    answer:
      'ONA Restore helps document visible property damage, affected materials, and repair scope. Coverage decisions depend on the policy and insurance carrier.',
  },
  {
    question: 'Do you handle reconstruction after mitigation?',
    answer:
      'Yes. ONA Restore can help with reconstruction work such as drywall, texture, paint, trim, flooring, cabinets, and interior repairs after mitigation.',
  },
]
export default function WaterDamagePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Water Damage Restoration · Vancouver WA · Portland Metro
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Water Damage Restoration in Vancouver, WA
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          Emergency water damage help for burst pipes, appliance leaks,
          storm intrusion, crawlspace water, and insurance-related property
          damage across Clark County and the Portland metro area.
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
            <h2 className="text-2xl font-semibold">Emergency Response</h2>
            <p className="mt-4 text-neutral-300">
              Water damage can spread quickly through flooring, drywall,
              cabinets, insulation, and crawlspaces.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Insurance Claim Support</h2>
            <p className="mt-4 text-neutral-300">
              We help document visible damage and repair scope for insurance claims.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Reconstruction & Repair</h2>
            <p className="mt-4 text-neutral-300">
              Reconstruction, drywall, flooring, trim, paint, and remodeling services after mitigation.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-16">
          <section>
            <h2 className="text-3xl font-semibold">What to do after water damage</h2>
            <p className="mt-4 max-w-4xl leading-8 text-neutral-300">
              Stop the source if safe, take photos before moving items,
              and request an inspection as soon as possible.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Common water damage sources</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Burst or leaking supply lines</li>
              <li>Dishwasher or refrigerator leaks</li>
              <li>Toilet overflow or sewage backup</li>
              <li>Storm intrusion and roof leaks</li>
              <li>Crawlspace water and hidden moisture</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Service areas</h2>
            <p className="mt-4 max-w-4xl leading-8 text-neutral-300">
              Vancouver, Camas, Washougal, Battle Ground, Ridgefield,
              Salmon Creek, Hazel Dell, Clark County, and the Portland metro area.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
