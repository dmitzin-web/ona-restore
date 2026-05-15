import FaqSection from '@/components/FaqSection'
import FaqSchema from '@/components/FaqSchema'
import ServiceSchema from '@/components/ServiceSchema'
const kitchenFaqs = [
  {
    question: 'How much does kitchen remodeling cost in Vancouver WA?',
    answer:
      'Kitchen remodeling cost depends on the project size, cabinets, flooring, drywall, paint, trim, finish selections, and whether the work is part of property damage reconstruction.',
  },
  {
    question: 'Can ONA Restoration rebuild a kitchen after water damage?',
    answer:
      'Yes. ONA Restoration can help with kitchen reconstruction after water damage, including drywall, flooring, trim, paint, cabinets, and interior finishes.',
  },
  {
    question: 'Do you handle cabinets and flooring?',
    answer:
      'Yes. Kitchen remodeling and reconstruction may include cabinet replacement, flooring, baseboards, casing, drywall repair, painting, and finish carpentry.',
  },
  {
    question: 'Can kitchen remodeling be combined with an insurance repair?',
    answer:
      'Yes. Some homeowners choose to upgrade finishes during the reconstruction phase. Insurance coverage depends on the policy and carrier.',
  },
]

export const metadata = {
  title: 'Kitchen Remodeling in Vancouver WA | ONA Restoration',
  description:
    'Kitchen remodeling, cabinet replacement, flooring, drywall, paint, trim, and reconstruction services in Vancouver WA and Clark County.',
}

export default function KitchenRemodelingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <FaqSchema items={kitchenFaqs} />
      <ServiceSchema
        name="Kitchen Remodeling"
        description="Kitchen remodeling, cabinet replacement, flooring, drywall, paint, trim, finish carpentry, and reconstruction services in Vancouver WA and Clark County."
        url="https://onarestore.com/kitchen-remodeling"
      />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
          Kitchen Remodeling
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Kitchen remodeling in Vancouver, WA.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          ONA Restoration helps homeowners with kitchen remodeling, cabinets,
          flooring, drywall, paint, trim, finish carpentry, and reconstruction
          after leaks, water damage, fire damage, or planned upgrades.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="tel:+13600000000" className="rounded-full bg-white px-8 py-4 text-center font-medium text-black">
            Call Now
          </a>

          <a href="/contact" className="rounded-full border border-white/15 px-8 py-4 text-center font-medium">
            Request Estimate
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Kitchen rebuilds after damage
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              Kitchen damage can involve cabinets, flooring, drywall, trim,
              paint, countertops coordination, appliances, and moisture-affected
              materials. ONA Restoration helps organize repair and rebuild scope.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Remodeling and finish upgrades
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              For planned upgrades, ONA Restoration can help with layout repairs,
              cabinet replacement, flooring, finish carpentry, drywall, paint,
              and interior finish improvements.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">
              Kitchen remodeling services
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Kitchen cabinet replacement</li>
              <li>Kitchen flooring replacement</li>
              <li>Drywall, texture, and paint</li>
              <li>Baseboard, casing, and finish carpentry</li>
              <li>Water damage kitchen reconstruction</li>
              <li>Fire and smoke-related kitchen rebuilds</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">
              Related services
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/bathroom-remodeling" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Bathroom Remodeling
              </a>

              <a href="/kitchen-bathroom-remodeling" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Remodeling
              </a>

              <a href="/restoration/water-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Water Damage
              </a>

              <a href="/restoration/reconstruction" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Reconstruction
              </a>
            </div>
          </section>
        </div>
      </section>
      <FaqSection items={kitchenFaqs} />
    </main>
  )
}
