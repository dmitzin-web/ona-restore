export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Vancouver WA · Portland Metro
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Restoration & Remodeling for Insurance-Driven Property Damage
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
          Water damage, fire and smoke damage, mold remediation,
          reconstruction, and remodeling services throughout Clark County
          and the Portland metro area.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+13600000000"
            className="rounded-full bg-white px-8 py-4 text-center font-medium text-black"
          >
            Call Now
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-4 text-center font-medium"
          >
            Request Inspection
          </a>
        </div>
      </section>
    </main>
  )
}