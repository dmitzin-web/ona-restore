const areas = [
  { name: 'Vancouver WA', href: '/vancouver-wa' },
  { name: 'Camas WA', href: '/camas-wa' },
  { name: 'Washougal WA', href: '/washougal-wa' },
  { name: 'Battle Ground WA', href: '/battle-ground-wa' },
  { name: 'Ridgefield WA', href: '/ridgefield-wa' },
  { name: 'Salmon Creek WA', href: '/salmon-creek-wa' },
  { name: 'Hazel Dell WA', href: '/hazel-dell-wa' },
]

export default function ServiceAreasSection() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Service Areas
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
          Serving Vancouver WA and Clark County.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {areas.map((area) => (
            <a
              key={area.href}
              href={area.href}
              className="rounded-full border border-white/15 px-5 py-3 text-neutral-200 transition hover:border-white/35 hover:text-white"
            >
              {area.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
