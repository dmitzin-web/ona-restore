export const metadata = {
  title: 'About ONA Restoration | Vancouver WA Restoration Company',
  description:
    'ONA Restoration provides water damage restoration, fire and smoke damage restoration, mold remediation, reconstruction, kitchen remodeling, and bathroom remodeling services in Vancouver WA and Clark County.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          About ONA Restoration
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Restoration and remodeling built around real property damage projects.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          ONA Restoration helps homeowners across Vancouver WA and Clark County
          with water damage, fire and smoke damage, mold remediation,
          reconstruction, kitchen remodeling, bathroom remodeling, and
          insurance-related repair projects.
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Built around restoration first.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-8 text-neutral-400">
            <p>
              Property damage projects often involve mitigation,
              reconstruction, drywall, flooring, cabinets, trim, paint,
              moisture-related repairs, and insurance-related documentation.
            </p>

            <p>
              ONA Restoration focuses on helping homeowners move from damage
              conditions into organized reconstruction and finished interior repairs.
            </p>

            <p>
              Our work includes restoration-related repairs, kitchen remodeling,
              bathroom remodeling, reconstruction, and interior finish work
              across Vancouver WA and surrounding Clark County communities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-24 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Need help with a restoration project?
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+13608233196"
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
    </main>
  )
}
