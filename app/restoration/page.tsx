import ServiceSchema from '@/components/ServiceSchema'

const services = [
  {
    title: 'Water Damage',
    href: '/restoration/water-damage',
    description:
      'Leaks, burst pipes, appliance failures, crawlspace water, flooring damage, drywall damage, and moisture-related repairs.',
  },
  {
    title: 'Fire & Smoke',
    href: '/restoration/fire-smoke-damage',
    description:
      'Fire damage, smoke odor, soot contamination, damaged finishes, contents concerns, and rebuild planning.',
  },
  {
    title: 'Mold Remediation',
    href: '/restoration/mold-remediation',
    description:
      'Mold-related repairs, moisture source concerns, containment planning, material removal, and reconstruction after remediation.',
  },
]

const process = [
  {
    title: 'Inspection',
    text:
      'We review visible damage, affected materials, moisture-related concerns, and the likely repair path.',
  },
  {
    title: 'Documentation',
    text:
      'Photos, affected-material notes, room-by-room observations, and repair scope help organize the project.',
  },
  {
    title: 'Rebuild',
    text:
      'Drywall, flooring, cabinets, trim, paint, kitchens, bathrooms, and interior finishes are rebuilt after the damage is addressed.',
  },
]

const claimTopics = [
  'Mitigation versus reconstruction',
  'Repair scope documentation',
  'Insurance estimate review from a contractor perspective',
  'Photos, measurements, and affected-material notes',
  'Kitchen and bathroom rebuild after a covered loss',
  'Recoverable depreciation and completion documentation',
]

const areas = [
  'Vancouver WA',
  'Camas WA',
  'Washougal WA',
  'Battle Ground WA',
  'Ridgefield WA',
  'Salmon Creek WA',
  'Hazel Dell WA',
]

export const metadata = {
  title: 'Restoration Services in Vancouver WA | ONA Restoration',
  description:
    'Water damage restoration, fire and smoke damage restoration, mold remediation support, reconstruction, insurance repair documentation, kitchen rebuilds, and bathroom rebuilds in Vancouver WA and Clark County.',
}

export default function RestorationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <ServiceSchema
        name="Restoration Services"
        description="Water damage restoration, fire and smoke damage restoration, mold remediation support, reconstruction, and insurance-related repair documentation in Vancouver WA and Clark County."
        url="https://onarestore.com/restoration"
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-[140px]" />

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Restoration Services
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Damage recovery, documentation, and rebuild.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
              ONA Restoration helps homeowners move from water damage, fire and
              smoke damage, mold-related concerns, and emergency repairs into
              organized reconstruction and finished interior restoration.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+13608233196"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-medium text-black"
              >
                Call Now
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/10 px-7 py-3.5 text-center text-sm font-medium transition hover:border-white/30"
              >
                Request Inspection
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Restoration Path
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                Inspect → Document → Rebuild
              </h2>

              <div className="mt-8 space-y-4">
                {process.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="mt-2 leading-7 text-neutral-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Core Services
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Restoration work without the franchise feel.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="mt-5 leading-8 text-neutral-400">
                  {service.description}
                </p>

                <div className="mt-8 text-sm text-neutral-500 group-hover:text-white">
                  View service →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Insurance-Related Repairs
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Clear repair documentation matters.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400">
              Restoration projects often involve mitigation, reconstruction,
              contents, smoke, mold, moisture, flooring, cabinets, drywall,
              paint, and finish repairs. ONA Restoration helps document visible
              repair needs from a contractor perspective.
            </p>

            <div className="mt-10 grid gap-3">
              {claimTopics.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-6 text-neutral-500">
              ONA Restoration is not a public adjuster and does not make
              insurance coverage determinations. Coverage depends on the policy
              and insurance carrier.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Rebuild + Remodeling
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              From damage repair to finished interiors.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400">
              After water, fire, smoke, or mold-related damage, the rebuild
              often touches the same areas homeowners care about most:
              kitchens, bathrooms, flooring, cabinets, drywall, paint, trim,
              and interior finishes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/kitchen-remodeling" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Kitchen Remodeling
              </a>

              <a href="/bathroom-remodeling" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Bathroom Remodeling
              </a>

              <a href="/projects" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Projects
              </a>

              <a href="/contact" className="rounded-full border border-white/15 px-5 py-3 text-neutral-200">
                Request Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Local Service Area
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Built around Vancouver and Clark County.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400">
              ONA Restoration focuses on Vancouver WA and surrounding Clark
              County communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 px-5 py-3 text-neutral-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
