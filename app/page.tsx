import ReviewsSection from '@/components/ReviewsSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
export const metadata = {
  title: 'ONA Restoration | Restoration & Remodeling in Vancouver WA',
  description:
    'Premium restoration, reconstruction, remodeling, water damage, fire damage, mold remediation, and insurance claim support in Vancouver WA and Portland metro.',
}

const services = [
  {
    title: 'Water Damage',
    href: '/restoration/water-damage',
    text: 'Water intrusion, drying coordination, damaged materials, and reconstruction planning.',
  },
  {
    title: 'Fire & Smoke',
    href: '/restoration/fire-smoke-damage',
    text: 'Smoke, soot, odor, structural finishes, contents, and rebuild scope support.',
  },
  {
    title: 'Mold Remediation',
    href: '/restoration/mold-remediation',
    text: 'Moisture-driven damage, containment planning, material removal, and repair work.',
  },
  {
    title: 'Reconstruction',
    href: '/restoration/reconstruction',
    text: 'Drywall, flooring, trim, paint, cabinets, and interior rebuild after mitigation.',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:pb-32 md:pt-36">
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-500">
            Vancouver WA · Clark County · Portland Metro
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white md:text-8xl">
            Property damage recovery, rebuilt with precision.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            ONA Restoration provides restoration, reconstruction, remodeling, and
            insurance-related repair documentation for homeowners across
            Vancouver WA and the Portland metro.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+13600000000"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Call Now
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/10 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:border-white/30"
            >
              Request Inspection
            </a>
          </div>
        </div>

        <div className="mt-24 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-neutral-500">Focus</p>
            <h2 className="mt-3 text-2xl font-medium">
              Insurance-driven repairs
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-neutral-500">Service Area</p>
            <h2 className="mt-3 text-2xl font-medium">
              Vancouver & Clark County
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-neutral-500">Scope</p>
            <h2 className="mt-3 text-2xl font-medium">
              Mitigation to rebuild
            </h2>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Services
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              A cleaner path from damage to repair.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <h3 className="text-2xl font-medium">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-neutral-400">
                      {service.text}
                    </p>
                  </div>

                  <span className="text-neutral-600 transition group-hover:text-white">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Claims
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Documentation matters.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400">
              Property damage claims can involve mitigation, reconstruction,
              contents, smoke, mold, moisture, and finish repairs. We help
              organize visible conditions and repair scope so the process is
              easier to understand.
            </p>

            <a
              href="/insurance-claims"
              className="mt-8 inline-flex rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium transition hover:border-white/30"
            >
              Insurance Claim Support
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Local
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Built for Vancouver first.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400">
              Serving Vancouver, Camas, Washougal, Ridgefield, Battle Ground,
              Salmon Creek, Hazel Dell, and surrounding Clark County areas.
            </p>

            <a
              href="/vancouver-wa"
              className="mt-8 inline-flex rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium transition hover:border-white/30"
            >
              Vancouver WA Services
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              ONA Restoration
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Need an inspection?
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+13600000000"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-medium text-black"
            >
              Call Now
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/10 px-7 py-3.5 text-center text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
      <BeforeAfterSection />
      <ReviewsSection />
    </main>
  )
}