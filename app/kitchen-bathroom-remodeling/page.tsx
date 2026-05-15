import ServiceAreasSection from '@/components/ServiceAreasSection'
import ServiceSchema from '@/components/ServiceSchema'
import FaqSchema from '@/components/FaqSchema'
import FaqSection from '@/components/FaqSection'

const remodelingFaqs = [
  {
    question: 'Do you offer kitchen remodeling in Vancouver WA?',
    answer:
      'Yes. ONA Restoration provides kitchen remodeling, cabinet replacement, flooring, drywall, paint, trim, finish carpentry, and kitchen reconstruction services in Vancouver WA and Clark County.',
  },
  {
    question: 'Do you offer bathroom remodeling in Vancouver WA?',
    answer:
      'Yes. ONA Restoration provides bathroom remodeling, vanity replacement, flooring, tile-related repairs, drywall, paint, trim, and bathroom reconstruction services.',
  },
  {
    question: 'Can remodeling be part of property damage reconstruction?',
    answer:
      'Yes. Remodeling and upgrades are often considered during the reconstruction phase after water damage, fire damage, smoke damage, mold remediation, or other property damage.',
  },
  {
    question: 'Can you help after an insurance-related repair?',
    answer:
      'ONA Restoration can help document visible repair needs and perform reconstruction or remodeling work. Coverage decisions depend on the insurance policy and carrier.',
  },
]

export const metadata = {
  title: 'Kitchen & Bathroom Remodeling in Vancouver WA | ONA Restoration',
  description:
    'Kitchen remodeling, bathroom remodeling, reconstruction, cabinets, flooring, tile, drywall, paint, trim, and interior remodeling in Vancouver WA and Clark County.',
}

export default function RemodelingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <FaqSchema items={remodelingFaqs} />
      <ServiceSchema
        name="Kitchen and Bathroom Remodeling"
        description="Kitchen remodeling, bathroom remodeling, reconstruction, cabinets, flooring, tile, drywall, paint, trim, and interior remodeling services in Vancouver WA and Clark County."
        url="https://onarestore.com/kitchen-bathroom-remodeling"
      />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
          Remodeling Services
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Kitchen and bathroom remodeling in Vancouver, WA.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          ONA Restoration helps homeowners with kitchen remodeling, bathroom
          remodeling, interior reconstruction, cabinets, flooring, tile,
          drywall, paint, trim, and finish upgrades across Vancouver WA and
          Clark County.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="tel:+13608233196" className="rounded-full bg-white px-8 py-4 text-center font-medium text-black">
            Call Now
          </a>

          <a href="/contact" className="rounded-full border border-white/15 px-8 py-4 text-center font-medium">
            Request Estimate
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/kitchen-remodeling"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25 hover:bg-white/[0.06]"
          >
            <h2 className="text-3xl font-semibold">
              Kitchen Remodeling
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              Cabinet replacement, flooring, drywall, paint, trim, finish
              carpentry, kitchen rebuilds after water damage, and planned
              kitchen upgrades.
            </p>

            <div className="mt-8 text-sm text-neutral-500 group-hover:text-white">
              View kitchen remodeling →
            </div>
          </a>

          <a
            href="/bathroom-remodeling"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25 hover:bg-white/[0.06]"
          >
            <h2 className="text-3xl font-semibold">
              Bathroom Remodeling
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              Vanity replacement, tile, flooring, drywall, paint, trim,
              moisture-related bathroom repairs, and bathroom reconstruction
              after leaks.
            </p>

            <div className="mt-8 text-sm text-neutral-500 group-hover:text-white">
              View bathroom remodeling →
            </div>
          </a>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">
              Remodeling services
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Kitchen remodeling in Vancouver WA</li>
              <li>Bathroom remodeling in Vancouver WA</li>
              <li>Cabinets, vanities, flooring, tile, drywall, and paint</li>
              <li>Trim, baseboards, casing, and finish carpentry</li>
              <li>Reconstruction after water, fire, smoke, or mold-related damage</li>
              <li>Interior upgrades during insurance-related rebuild projects</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">
              Restoration-related remodeling
            </h2>

            <p className="mt-5 leading-8 text-neutral-300">
              Many remodeling projects begin after property damage. A kitchen
              leak, bathroom overflow, fire event, smoke contamination, or mold
              remediation project can lead to reconstruction and finish upgrades.
              ONA Restoration helps connect the restoration phase with the
              remodeling and rebuild phase.
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

              <a href="/restoration/reconstruction" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Reconstruction
              </a>

              <a href="/restoration" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Restoration Documentation
              </a>

              <a href="/locations" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Service Areas
              </a>
            </div>
          </section>
        </div>
      </section>
      <FaqSection items={remodelingFaqs} />
      <ServiceAreasSection />
    </main>
  )
}
