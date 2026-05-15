import FaqSchema from '@/components/FaqSchema'
import FaqSection from '@/components/FaqSection'
import ServiceSchema from '@/components/ServiceSchema'
const reconstructionFaqs = [
  {
    question: 'What is reconstruction after mitigation?',
    answer:
      'Reconstruction is the repair and rebuild phase after damaged materials are removed or dried. It can include drywall, texture, paint, trim, flooring, cabinets, and finish repairs.',
  },
  {
    question: 'Is mitigation the same as reconstruction?',
    answer:
      'No. Mitigation stops or reduces damage, while reconstruction repairs and rebuilds the affected areas after mitigation is complete.',
  },
  {
    question: 'Can reconstruction include upgrades?',
    answer:
      'Yes. Some homeowners choose to upgrade finishes during the rebuild phase, especially in kitchens, bathrooms, flooring areas, and interior spaces.',
  },
  {
    question: 'Does ONA Restoration handle insurance-related repair scope?',
    answer:
      'ONA Restoration can help document visible repair needs and reconstruction scope. Coverage decisions depend on the policy and insurance carrier.',
  },
]

export const metadata = {
  title: 'Reconstruction Services in Vancouver WA | ONA Restoration',
  description:
    'Reconstruction after water, fire, smoke, mold, and storm damage. Drywall, flooring, trim, paint, cabinets, kitchens, bathrooms, and interior rebuild work in Vancouver WA.',
}

export default function ReconstructionPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <FaqSchema items={reconstructionFaqs} />
        <ServiceSchema
  name="Reconstruction Services"
  description="Reconstruction after water, fire, smoke, mold, and storm damage, including drywall, flooring, trim, paint, cabinets, and interior rebuild work."
  url="https://onarestore.com/restoration/reconstruction"
/>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Reconstruction · Repairs · Remodeling
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Reconstruction After Property Damage
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          After mitigation is complete, damaged materials still need to be
          rebuilt correctly. ONA Restoration helps with drywall, texture, paint,
          trim, flooring, cabinets, and remodeling work after covered losses.
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
            <h2 className="text-2xl font-semibold">Drywall & Texture</h2>
            <p className="mt-4 text-neutral-300">
              Repairing opened walls and ceilings after mitigation, including
              drywall replacement, texture blending, priming, and painting.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Flooring & Trim</h2>
            <p className="mt-4 text-neutral-300">
              Replacement and repair of affected flooring, baseboards, casing,
              transitions, and finish details.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Cabinets & Finishes</h2>
            <p className="mt-4 text-neutral-300">
              Reconstruction can include cabinets, countertops, paint, finish
              carpentry, and upgrades during the rebuild phase.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">Mitigation is not the end</h2>
            <p className="mt-5 leading-8 text-neutral-300">
              Many property damage claims require two major phases: mitigation
              and reconstruction. Mitigation stops the damage and removes
              affected materials. Reconstruction puts the home back together.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Common reconstruction scopes</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Drywall replacement and texture blending</li>
              <li>Interior painting and finish repair</li>
              <li>Baseboard, casing, and trim installation</li>
              <li>Flooring replacement and transitions</li>
              <li>Cabinet, vanity, and built-in repairs</li>
              <li>Kitchen and bathroom rebuild work</li>
            </ul>
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
              <a href="/insurance-claims" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Insurance Claim Help
              </a>
            </div>
          </section>
        </div>
      </section>
      <FaqSection items={reconstructionFaqs} />
    </main>
  )
}