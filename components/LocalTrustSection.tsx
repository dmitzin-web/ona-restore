export default function LocalTrustSection() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Local Restoration Company
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Built around Vancouver WA and Clark County.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-neutral-400">
            ONA Restoration serves homeowners across Vancouver, Camas,
            Washougal, Battle Ground, Ridgefield, Salmon Creek, Hazel Dell,
            and surrounding Clark County communities.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="/locations"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-neutral-200 transition hover:border-white/25"
            >
              View service areas
            </a>

            <a
              href="/insurance-claims"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-neutral-200 transition hover:border-white/25"
            >
              Insurance claim support
            </a>

            <a
              href="/restoration/water-damage"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-neutral-200 transition hover:border-white/25"
            >
              Water damage restoration
            </a>

            <a
              href="/contact"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-neutral-200 transition hover:border-white/25"
            >
              Request inspection
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
