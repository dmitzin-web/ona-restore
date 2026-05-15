export const metadata = {
  title: 'ONA Restore | Restoration & Remodeling in Vancouver WA',
  description:
    'Water damage restoration, fire damage restoration, mold remediation, reconstruction, remodeling, and insurance claim support in Vancouver WA and Portland metro.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-400">
            Vancouver WA · Clark County · Portland Metro
          </p>

          <h1 className="max-w-6xl text-5xl font-semibold tracking-tight md:text-8xl">
            Restoration & Remodeling Built Around Real Property Damage Recovery
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-300">
            ONA Restore helps homeowners navigate water damage, fire and smoke
            damage, mold-related reconstruction, interior repairs, and insurance-related
            rebuild projects across Vancouver WA and the Portland metro area.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+13600000000"
              className="rounded-full bg-white px-8 py-4 text-center font-medium text-black transition hover:bg-neutral-200"
            >
              Emergency Call
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/15 px-8 py-4 text-center font-medium transition hover:border-white/40"
            >
              Request Inspection
            </a>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold">24/7</div>
              <p className="mt-2 text-sm text-neutral-400">
                Emergency response availability
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold">Water</div>
              <p className="mt-2 text-sm text-neutral-400">
                Damage mitigation & reconstruction
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold">Fire</div>
              <p className="mt-2 text-sm text-neutral-400">
                Smoke, soot & rebuild support
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold">Mold</div>
              <p className="mt-2 text-sm text-neutral-400">
                Remediation-oriented rebuild planning
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Core Services
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Restoration Services
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <a
            href="/restoration/water-damage"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            <h3 className="text-2xl font-semibold">
              Water Damage
            </h3>

            <p className="mt-4 leading-7 text-neutral-300">
              Water intrusion, drywall removal, flooring damage,
              moisture-related reconstruction, and repair planning.
            </p>

            <div className="mt-8 text-sm text-neutral-400 group-hover:text-white">
              View service →
            </div>
          </a>

          <a
            href="/restoration/fire-smoke-damage"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            <h3 className="text-2xl font-semibold">
              Fire & Smoke
            </h3>

            <p className="mt-4 leading-7 text-neutral-300">
              Smoke contamination, soot cleanup, odor concerns,
              reconstruction planning, and rebuild coordination.
            </p>

            <div className="mt-8 text-sm text-neutral-400 group-hover:text-white">
              View service →
            </div>
          </a>

          <a
            href="/restoration/mold-remediation"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            <h3 className="text-2xl font-semibold">
              Mold Remediation
            </h3>

            <p className="mt-4 leading-7 text-neutral-300">
              Moisture investigation support, containment planning,
              removal coordination, and reconstruction after remediation.
            </p>

            <div className="mt-8 text-sm text-neutral-400 group-hover:text-white">
              View service →
            </div>
          </a>

          <a
            href="/restoration/reconstruction"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            <h3 className="text-2xl font-semibold">
              Reconstruction
            </h3>

            <p className="mt-4 leading-7 text-neutral-300">
              Drywall, flooring, trim, paint, cabinets,
              and interior rebuilding after mitigation.
            </p>

            <div className="mt-8 text-sm text-neutral-400 group-hover:text-white">
              View service →
            </div>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Insurance Claim Support
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              Organized Documentation Matters
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              Property damage claims often involve mitigation,
              reconstruction, contents, moisture issues, smoke contamination,
              and repair scope documentation. Organized photos,
              room-by-room observations, and clear rebuild planning help create
              a more understandable repair process.
            </p>

            <a
              href="/insurance-claims"
              className="mt-10 inline-flex rounded-full border border-white/15 px-6 py-3 transition hover:border-white/40"
            >
              Learn More
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Areas Served
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              Vancouver WA & Portland Metro
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              ONA Restore serves Vancouver, Camas, Washougal,
              Ridgefield, Battle Ground, Salmon Creek, Hazel Dell,
              and surrounding Clark County communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/vancouver-wa" className="rounded-full border border-white/15 px-5 py-3 text-sm">
                Vancouver WA
              </a>

              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-500">
                Camas
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-500">
                Battle Ground
              </span>

              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-500">
                Washougal
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-20 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              ONA Restore
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Need Help With Property Damage?
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
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
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}