const locations = [
  { name: 'Vancouver WA', href: '/vancouver-wa' },
  { name: 'Camas WA', href: '/camas-wa' },
  { name: 'Washougal WA', href: '/washougal-wa' },
  { name: 'Battle Ground WA', href: '/battle-ground-wa' },
  { name: 'Ridgefield WA', href: '/ridgefield-wa' },
  { name: 'Salmon Creek WA', href: '/salmon-creek-wa' },
  { name: 'Hazel Dell WA', href: '/hazel-dell-wa' },
]

export const metadata = {
  title: 'Service Areas | ONA Restoration',
  description:
    'ONA Restoration provides water damage restoration, fire and smoke damage restoration, mold remediation support, reconstruction, and remodeling across Vancouver WA and Clark County.',
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
          Service Areas
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Restoration services across Clark County.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          ONA Restoration serves homeowners across Vancouver WA, Clark County,
          and the Portland metro with property damage restoration,
          reconstruction, remodeling, and insurance-related repair documentation.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <a
              key={location.href}
              href={location.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <h2 className="text-2xl font-medium">
                {location.name}
              </h2>

              <p className="mt-4 leading-7 text-neutral-400">
                Water damage, fire and smoke damage, mold remediation,
                reconstruction, and remodeling services.
              </p>

              <div className="mt-8 text-sm text-neutral-500 group-hover:text-white">
                View area →
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
