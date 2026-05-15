import FaqSection from '@/components/FaqSection'
import FaqSchema from '@/components/FaqSchema'
import ServiceSchema from '@/components/ServiceSchema'
const bathroomFaqs = [
  {
    question: 'How much does bathroom remodeling cost in Vancouver WA?',
    answer:
      'Bathroom remodeling cost depends on the size of the bathroom, vanity, flooring, tile, drywall, paint, trim, finish selections, and whether the work is related to property damage.',
  },
  {
    question: 'Can ONA Restoration repair a bathroom after a leak?',
    answer:
      'Yes. ONA Restoration can help with bathroom reconstruction after leaks, including drywall, flooring, trim, paint, vanity replacement, and finish repairs.',
  },
  {
    question: 'Do you handle tile and vanity replacement?',
    answer:
      'Bathroom remodeling may include vanity replacement, flooring, tile-related repairs, drywall, paint, trim, and moisture-related reconstruction.',
  },
  {
    question: 'Can bathroom remodeling be part of an insurance claim?',
    answer:
      'Sometimes reconstruction after covered damage may involve bathroom repairs. ONA Restoration can document visible repair needs, but coverage depends on the policy and carrier.',
  },
]

export const metadata = {
  title: 'Bathroom Remodeling in Vancouver WA | ONA Restoration',
  description:
    'Bathroom remodeling, vanity replacement, tile, flooring, drywall, paint, trim, and reconstruction services in Vancouver WA and Clark County.',
}

export default function BathroomRemodelingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <FaqSchema items={bathroomFaqs} />
      <ServiceSchema
        name="Bathroom Remodeling"
        description="Bathroom remodeling, vanity replacement, tile, flooring, drywall, paint, trim, moisture-related repairs, and reconstruction services in Vancouver WA and Clark County."
        url="https://onarestore.com/bathroom-remodeling"
      />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
          Bathroom Remodeling
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Bathroom remodeling in Vancouver, WA.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          ONA Restoration helps homeowners with bathroom remodeling, vanity
          replacement, tile, flooring, drywall, paint, trim, moisture-related
          repairs, and reconstruction after leaks or property damage.
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
              Bathroom repairs after leaks
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              Bathroom leaks can affect flooring, drywall, trim, vanities,
              subfloor areas, and adjacent rooms. ONA Restoration helps plan the
              repair and rebuild work after damage is identified.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-3xl font-semibold">
              Bathroom upgrades and remodeling
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              Bathroom remodeling can include vanity replacement, flooring,
              tile, drywall, paint, trim, finish upgrades, and reconstruction
              after water or mold-related damage.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl space-y-14">
          <section>
            <h2 className="text-3xl font-semibold">
              Bathroom remodeling services
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-neutral-300">
              <li>Bathroom vanity replacement</li>
              <li>Bathroom flooring replacement</li>
              <li>Tile and finish repairs</li>
              <li>Drywall, texture, and paint</li>
              <li>Trim and finish carpentry</li>
              <li>Water damage bathroom reconstruction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">
              Related services
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/kitchen-remodeling" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Kitchen Remodeling
              </a>

              <a href="/kitchen-bathroom-remodeling" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Remodeling
              </a>

              <a href="/restoration/water-damage" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Water Damage
              </a>

              <a href="/restoration/mold-remediation" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Mold Remediation
              </a>
            </div>
          </section>
        </div>
      </section>
      <FaqSection items={bathroomFaqs} />
    </main>
  )
}
