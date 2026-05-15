const services = [
  {
    title: 'Water Damage Restoration',
    href: '/restoration/water-damage',
    description:
      'Water intrusion, burst pipes, appliance leaks, crawlspace water, moisture concerns, and reconstruction planning.',
  },
  {
    title: 'Fire & Smoke Damage',
    href: '/restoration/fire-smoke-damage',
    description:
      'Smoke, soot, odor, damaged finishes, contents concerns, and rebuild support after fire damage.',
  },
  {
    title: 'Mold Remediation Support',
    href: '/restoration/mold-remediation',
    description:
      'Moisture-related mold concerns, containment planning, material removal coordination, and repairs after remediation.',
  },
  {
    title: 'Reconstruction Services',
    href: '/restoration/reconstruction',
    description:
      'Drywall, texture, paint, trim, flooring, cabinets, and interior rebuild work after mitigation.',
  },
]

export const metadata = {
  title: 'Restoration Services in Vancouver WA | ONA Restoration',
  description:
    'Water damage restoration, fire and smoke damage restoration, mold remediation support, and reconstruction services in Vancouver WA, Clark County, and Portland metro.',
}

export default function RestorationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
          Restoration Services
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Restoration, reconstruction, and repair after property damage.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          ONA Restoration helps homeowners recover from water damage, fire and
          smoke damage, mold-related damage, and reconstruction projects across
          Vancouver WA, Clark County, and the Portland metro area.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+13600000000"
            className="rounded-full bg-white px-8 py-4 text-center font-medium text-black"
          >
            Call Now
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/15 px-8 py-4 text-center font-medium"
          >
            Request Inspection
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <h2 className="text-2xl font-medium">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-neutral-400">
                {service.description}
              </p>

              <div className="mt-8 text-sm text-neutral-500 group-hover:text-white">
                View service →
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Insurance-related restoration
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Damage repair needs clear documentation.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400">
              Restoration projects often involve affected materials, mitigation
              work, rebuild scope, moisture concerns, smoke contamination, and
              insurance-related documentation. ONA Restoration helps organize
              the visible conditions and repair path.
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
              Service areas
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Built around Clark County.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400">
              Serving Vancouver, Camas, Washougal, Battle Ground, Ridgefield,
              Salmon Creek, Hazel Dell, and surrounding Clark County areas.
            </p>

            <a
              href="/locations"
              className="mt-8 inline-flex rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium transition hover:border-white/30"
            >
              View Service Areas
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
