const services = [
  {
    label: 'Water Damage',
    href: '/restoration/water-damage',
  },
  {
    label: 'Fire & Smoke',
    href: '/restoration/fire-smoke-damage',
  },
  {
    label: 'Mold Remediation',
    href: '/restoration/mold-remediation',
  },
  {
    label: 'Reconstruction',
    href: '/restoration/reconstruction',
  },
  {
    label: 'Remodeling',
    href: '/kitchen-bathroom-remodeling',
  },
  {
    label: 'Kitchen Remodeling',
    href: '/kitchen-remodeling',
  },
  {
    label: 'Bathroom Remodeling',
    href: '/bathroom-remodeling',
  },
]

const locations = [
  {
    label: 'Vancouver WA',
    href: '/vancouver-wa',
  },
  {
    label: 'Camas WA',
    href: '/camas-wa',
  },
  {
    label: 'Washougal WA',
    href: '/washougal-wa',
  },
  {
    label: 'Battle Ground WA',
    href: '/battle-ground-wa',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold">
              ONA Restoration
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-neutral-400">
              Restoration, reconstruction, remodeling, water damage,
              fire and smoke damage, and mold-related repair services
              across Vancouver WA and Clark County.
            </p>

            <div className="mt-8 space-y-2 text-sm text-neutral-500">
              <div>Vancouver, Washington</div>
              <div>Clark County & Portland Metro</div>
              <div>
                <a href="tel:+13608233196" className="hover:text-white">
                  +1 (360) 823-3196
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="text-neutral-300 transition hover:text-white"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Service Areas
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {locations.map((location) => (
                <a
                  key={location.href}
                  href={location.href}
                  className="text-neutral-300 transition hover:text-white"
                >
                  {location.label}
                </a>
              ))}

              <a
                href="/locations"
                className="text-neutral-300 transition hover:text-white"
              >
                View All Areas
              </a>

              <a
                href="/about"
                className="text-neutral-300 transition hover:text-white"
              >
                About
              </a>

              <a
                href="/projects"
                className="text-neutral-300 transition hover:text-white"
              >
                Projects
              </a>

              <a
                href="/reviews"
                className="text-neutral-300 transition hover:text-white"
              >
                Reviews
              </a>

              <a
                href="/learn"
                className="text-neutral-300 transition hover:text-white"
              >
                Guides
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-sm text-neutral-600">
          © 2026 ONA Restoration. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
